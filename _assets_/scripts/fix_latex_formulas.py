#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
修复Markdown文件中LaTeX多行公式不规范的问题
将混排在文字行中的$$公式$$格式化为单独一行
"""

import os
import re
import argparse
from pathlib import Path

def find_markdown_files(directories):
    """查找指定目录中的所有Markdown文件"""
    md_files = []
    for directory in directories:
        if os.path.exists(directory):
            for root, _, files in os.walk(directory):
                for file in files:
                    if file.endswith('.md'):
                        md_files.append(os.path.join(root, file))
        else:
            print(f"警告: 目录 '{directory}' 不存在，跳过")
    return md_files

def fix_latex_formulas(content):
    """修复LaTeX公式格式"""
    # 正则表达式匹配与文字混排的$$公式$$
    # 匹配模式：非换行符 + $$ + 任意内容 + $$ + 非换行符
    pattern = r'([^\n]*)(\$\$[^\n]*?\$\$)([^\n]*)'
    
    def replace_formula(match):
        before = match.group(1).strip()  # 公式前的文字
        formula = match.group(2).strip()  # 公式本身
        after = match.group(3).strip()   # 公式后的文字
        
        result = []
        if before:  # 如果有公式前的文字，保留在单独一行
            result.append(before)
        result.append(formula)  # 公式单独一行
        if after:   # 如果有公式后的文字，保留在单独一行
            result.append(after)
        
        return '\n'.join(result)
    
    # 使用正则表达式替换
    fixed_content = re.sub(pattern, replace_formula, content)
    return fixed_content

def process_file(file_path):
    """处理单个文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        fixed_content = fix_latex_formulas(content)
        
        # 如果内容有变化，则写入文件
        if fixed_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        return False
    
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='修复Markdown文件中LaTeX多行公式不规范的问题')
    parser.add_argument('--dry-run', action='store_true', help='只显示将要修改的内容，不实际修改文件')
    parser.add_argument('--verbose', action='store_true', help='显示详细信息')
    args = parser.parse_args()
    
    # 要处理的目录
    directories = ['微积分', '概率论', '线性代数']
    
    # 查找所有Markdown文件
    md_files = find_markdown_files(directories)
    
    if not md_files:
        print("未找到任何Markdown文件")
        return
    
    print(f"找到 {len(md_files)} 个Markdown文件")
    
    modified_count = 0
    for file_path in md_files:
        if args.verbose:
            print(f"检查文件: {file_path}")
        
        if args.dry_run:
            # 在dry-run模式下，只显示将要修改的内容
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 查找混排的公式
                pattern = r'([^\n]*)(\$\$[^\n]*?\$\$)([^\n]*)'
                matches = re.findall(pattern, content)
                
                if matches:
                    print(f"\n文件: {file_path}")
                    print("发现混排的公式:")
                    for match in matches:
                        before, formula, after = match
                        print(f"  原文: {before}{formula}{after}")
                        print(f"  建议改为:")
                        if before.strip():
                            print(f"        {before.strip()}")
                        print(f"        {formula.strip()}")
                        if after.strip():
                            print(f"        {after.strip()}")
                        print()
                    modified_count += 1
                    
            except Exception as e:
                print(f"读取文件 {file_path} 时出错: {e}")
        else:
            # 实际处理文件
            modified = process_file(file_path)
            if modified:
                print(f"已修改: {file_path}")
                modified_count += 1
    
    print(f"\n处理完成。共修改了 {modified_count} 个文件")

if __name__ == "__main__":
    main()
