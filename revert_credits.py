#!/usr/bin/env python3
import os
import re
import glob

def revert_credits_format(file_path):
    """統合されたクレジット形式を作業単位の形式に戻す"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 統合されたクレジット形式を検索
    pattern = r'<li><strong>Akifumi Chiba:</strong>\s*([^<]+)</li>'
    match = re.search(pattern, content)
    
    if match:
        roles = match.group(1).strip()
        # カンマで分割して個別の役割に分ける
        role_list = [role.strip() for role in roles.split(',')]
        
        # 新しいクレジット形式を作成
        new_credits = []
        for role in role_list:
            new_credits.append(f'                                    <li><strong>{role}:</strong> Akifumi Chiba</li>')
        
        # 元の行を新しい形式に置換
        new_content = re.sub(
            pattern,
            '\n'.join(new_credits),
            content
        )
        
        # ファイルに書き戻し
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✓ {file_path}: {roles}")
        return True
    
    return False

def main():
    # worksディレクトリ内のすべてのHTMLファイルを処理
    html_files = glob.glob('works/**/*.html', recursive=True)
    
    processed_count = 0
    for file_path in html_files:
        if revert_credits_format(file_path):
            processed_count += 1
    
    print(f"\n処理完了: {processed_count}/{len(html_files)} ファイルを修正しました")

if __name__ == "__main__":
    main() 