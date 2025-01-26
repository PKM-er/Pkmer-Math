import re
from pathlib import Path
import requests

def convert_bilibili_links(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 转换b23.tv短链接为BV号链接
    pattern = r'https://b23\.tv/([a-zA-Z0-9]+)'
    content = re.sub(pattern, lambda m: get_bv_link(m.group(1)), content)
    
    # 转换旧格式BV链接为新格式
    old_bv_pattern = r'https://www\.bilibili\.com/video/(BV[a-zA-Z0-9]+)/?\?.*'
    content = re.sub(old_bv_pattern, r'https://www.bilibili.com/video/\1', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def get_bv_link(short_code):
    try:
        # 获取重定向后的URL
        url = f'https://b23.tv/{short_code}'
        response = requests.get(url, allow_redirects=True)
        final_url = response.url
        
        # 提取BV号
        bv_match = re.search(r'(BV[a-zA-Z0-9]+)', final_url)
        if bv_match:
            return f'https://www.bilibili.com/video/{bv_match.group(1)}'
        return final_url
    except:
        return f'https://b23.tv/{short_code}'

def process_files(base_dir):
    for file_path in base_dir.rglob('**/数一20*.md'):
        convert_bilibili_links(file_path)
        print(f'Processed: {file_path}')

if __name__ == '__main__':
    base_dir = Path('d:/OneDrive/Notebook/Library/Science/Math')
    process_files(base_dir)
