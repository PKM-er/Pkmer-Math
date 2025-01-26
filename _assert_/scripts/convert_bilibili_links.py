import re
import requests
from pathlib import Path

def convert_bilibili_links(file_path):
    # 匹配bilibili短链接的正则表达式
    short_url_pattern = r'https://b23\.tv/[a-zA-Z0-9]+'
    
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找所有短链接
    short_urls = re.findall(short_url_pattern, content)
    
    # 转换每个短链接
    for short_url in short_urls:
        try:
            # 获取重定向后的URL
            response = requests.get(short_url, allow_redirects=True)
            final_url = response.url
            
            # 提取BV号
            bv_pattern = r'BV[a-zA-Z0-9]+'
            bv_match = re.search(bv_pattern, final_url)
            if bv_match:
                bv_url = f'https://www.bilibili.com/video/{bv_match.group()}'
                # 替换文件中的短链接
                content = content.replace(short_url, bv_url)
        except Exception as e:
            print(f'Error converting {short_url}: {e}')
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    # 获取当前目录下所有md文件
    base_dir = Path(__file__).parent.parent.parent
    md_files = list(base_dir.rglob('*.md'))
    
    # 处理每个文件
    for md_file in md_files:
        print(f'Processing {md_file}...')
        convert_bilibili_links(md_file)
