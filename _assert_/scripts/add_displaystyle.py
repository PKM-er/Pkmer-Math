import re
from pathlib import Path

def add_displaystyle(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 正则匹配单行公式，添加displaystyle
    pattern = r'\$(?!\\displaystyle)(?=[^$]*?(\\lim|\\sum|\\int|\\Sigma)[^$]*?\$)'
    content = re.sub(pattern, '$\\displaystyle', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_files(base_dir):
    for file_path in base_dir.rglob('**/数一20*.md'):
        add_displaystyle(file_path)
        print(f'Processed: {file_path}')

if __name__ == '__main__':
    base_dir = Path('d:/OneDrive/Notebook/Library/Science/Math')
    process_files(base_dir)
