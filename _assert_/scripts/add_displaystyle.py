import re

def add_displaystyle(file_path):
    # 正则表达式模式
    pattern = r'\$(?!\\displaystyle)(?=[^$]*?(\\lim|\\sum|\\int|\\Sigma)[^$]*?\$)'
    
    # 读取文件内容
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 进行替换
    new_content = re.sub(pattern, r'$\\displaystyle', content)
    
    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    # 要处理的文件路径
    file_path = "Other/例题/高数1真题/数一2010.md"
    add_displaystyle(file_path)
