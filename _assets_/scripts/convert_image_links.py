import re
import requests
from pathlib import Path
from urllib.parse import urlparse
import os

def download_image(url, save_path):
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(save_path, 'wb') as f:
            f.write(response.content)
        return True
    except:
        return False

def convert_image_links(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 匹配图床图片链接
    pattern = r'!\[(.*?)\]\((https://obsidian-picture-[^)]+)\)'
    
    def replace_image(match):
        alt_text = match.group(1)
        image_url = match.group(2)
        
        # 解析URL获取文件名
        parsed_url = urlparse(image_url)
        filename = os.path.basename(parsed_url.path)
        
        # 本地保存路径
        save_dir = Path(file_path).parent / '_assets_/Images'
        save_dir.mkdir(parents=True, exist_ok=True)
        save_path = save_dir / filename
        
        # 下载图片
        if download_image(image_url, save_path):
            # 只替换URL部分，保留原有格式
            relative_path = save_path.relative_to(Path(file_path).parent)
            return f'![{alt_text}]({relative_path})'
        else:
            # 下载失败则保留原链接
            return f'![{alt_text}]({image_url})'
    
    content = re.sub(pattern, replace_image, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_files(base_dir):
    for file_path in base_dir.rglob('**/数一20*.md'):
        convert_image_links(file_path)
        print(f'Processed: {file_path}')

if __name__ == '__main__':
    base_dir = Path('d:/OneDrive/Notebook/Library/Science/Math')
    process_files(base_dir)
