// Contact Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('.submit-button');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        showLoadingState();
        
        // Create email content
        const emailSubject = `お問い合わせ: ${data['project-type'] || 'その他'}`;
        const emailBody = createEmailBody(data);
        
        // Try multiple email sending methods
        const primaryEmail = 'akifumichiba@astraltown.com';
        const secondaryEmail = 'astraltown0102@gmail.com';
        
        // Create mailto links for both emails
        const primaryMailto = `mailto:${primaryEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        const secondaryMailto = `mailto:${secondaryEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Show custom email options
        showEmailOptions(primaryMailto, secondaryMailto, emailSubject, emailBody);
    });
    
    function createEmailBody(data) {
        let body = `【お問い合わせ内容】\n\n`;
        body += `お名前: ${data.name || ''}\n`;
        body += `メールアドレス: ${data.email || ''}\n`;
        body += `会社名・団体名: ${data.company || '未記入'}\n`;
        body += `プロジェクトタイプ: ${getProjectTypeText(data['project-type']) || ''}\n`;
        body += `予算: ${getBudgetText(data.budget) || '未記入'}\n`;
        body += `希望納期: ${getTimelineText(data.timeline) || '未記入'}\n\n`;
        
        if (data.reference) {
            body += `参考映像・イメージ:\n${data.reference}\n\n`;
        }
        
        body += `プロジェクト詳細・ご希望:\n${data.message || ''}\n\n`;
        body += `---\n`;
        body += `このメールは映像制作ポートフォリオサイトのお問い合わせフォームから送信されました。`;
        
        return body;
    }
    
    function getProjectTypeText(value) {
        const types = {
            'music-video': 'ミュージックビデオ',
            'pr-video': 'PR映像',
            'talk-video': 'トーク映像',
            'live-streaming': 'ライブ配信サポート',
            'other': 'その他'
        };
        return types[value] || value;
    }
    
    function getBudgetText(value) {
        const budgets = {
            'under-100k': '10万円未満',
            '100k-300k': '10万円〜30万円',
            '300k-500k': '30万円〜50万円',
            '500k-1m': '50万円〜100万円',
            'over-1m': '100万円以上',
            'discuss': '要相談'
        };
        return budgets[value] || value;
    }
    
    function getTimelineText(value) {
        const timelines = {
            'urgent': '1週間以内（緊急）',
            '2weeks': '2週間以内',
            '1month': '1ヶ月以内',
            '2months': '2ヶ月以内',
            '3months': '3ヶ月以内',
            'flexible': '柔軟に対応可能'
        };
        return timelines[value] || value;
    }
    
    function validateForm(data) {
        const requiredFields = ['name', 'email', 'project-type', 'message'];
        let isValid = true;
        
        // Clear previous error states
        clearErrorStates();
        
        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                showFieldError(field);
                isValid = false;
            }
        });
        
        // Validate email format
        if (data.email && !isValidEmail(data.email)) {
            showFieldError('email', 'メールアドレスの形式が正しくありません');
            isValid = false;
        }
        
        // Check privacy policy agreement
        if (!data.privacy) {
            showFieldError('privacy', 'プライバシーポリシーに同意してください');
            isValid = false;
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(fieldName, message = '必須項目です') {
        const field = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.style.borderColor = '#ff4444';
            
            // Create error message element
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            errorElement.style.color = '#ff4444';
            errorElement.style.fontSize = '0.9em';
            errorElement.style.marginTop = '5px';
            
            // Insert error message after the field
            field.parentNode.appendChild(errorElement);
        }
    }
    
    function clearErrorStates() {
        // Remove error styling
        const fields = contactForm.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
        });
        
        // Remove error messages
        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        // Remove success/error messages
        const statusMessages = contactForm.querySelectorAll('.success-message, .error-message-global');
        statusMessages.forEach(msg => msg.remove());
    }
    
    function showLoadingState() {
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
        submitButton.style.opacity = '0.7';
    }
    
    function resetButtonState() {
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> 送信する';
        submitButton.style.opacity = '1';
    }
    
    function showSuccessMessage() {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="
                background: rgba(0, 255, 255, 0.1);
                border: 1px solid var(--accent-color);
                border-radius: 10px;
                padding: 20px;
                margin-top: 20px;
                text-align: center;
                color: var(--accent-color);
            ">
                <i class="fas fa-check-circle" style="font-size: 2em; margin-bottom: 10px;"></i>
                <h3>送信完了</h3>
                <p>お問い合わせありがとうございます。<br>
                通常24時間以内にご返信いたします。</p>
            </div>
        `;
        
        contactForm.appendChild(successMessage);
        
        // Remove success message after 8 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 8000);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    function showErrorMessage() {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message-global';
        errorMessage.innerHTML = `
            <div style="
                background: rgba(255, 68, 68, 0.1);
                border: 1px solid #ff4444;
                border-radius: 10px;
                padding: 20px;
                margin-top: 20px;
                text-align: center;
                color: #ff4444;
            ">
                <i class="fas fa-exclamation-circle" style="font-size: 2em; margin-bottom: 10px;"></i>
                <h3>送信エラー</h3>
                <p>申し訳ございません。送信に失敗しました。<br>
                しばらく時間をおいて再度お試しください。</p>
            </div>
        `;
        
        contactForm.appendChild(errorMessage);
        
        // Remove error message after 8 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 8000);
        
        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Add input event listeners for real-time validation feedback
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(255, 68, 68)') {
                this.style.borderColor = '';
                // Remove associated error message
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
    });
});

// Email copy function
function copyEmailInfo(subject, body) {
    const emailText = `件名: ${subject}\n\n宛先: akifumichiba@astraltown.com または astraltown0102@gmail.com\n\n${body}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(emailText).then(() => {
            showCopySuccess();
        }).catch(() => {
            fallbackCopyTextToClipboard(emailText);
        });
    } else {
        fallbackCopyTextToClipboard(emailText);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        showCopyError();
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess() {
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 255, 255, 0.9);
            color: #000;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 700;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        ">
            <i class="fas fa-check"></i> メール内容をコピーしました！
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showCopyError() {
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 68, 68, 0.9);
            color: #fff;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 700;
            z-index: 10000;
        ">
            <i class="fas fa-exclamation"></i> コピーに失敗しました
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function showEmailOptions(primaryMailto, secondaryMailto, subject, body) {
    resetButtonState();
    
    // Show email options message
    const optionsMessage = document.createElement('div');
    optionsMessage.className = 'email-options-message';
    optionsMessage.innerHTML = `
        <div style="
            background: rgba(0, 255, 255, 0.1);
            border: 1px solid var(--accent-color);
            border-radius: 15px;
            padding: 30px;
            margin-top: 20px;
            text-align: center;
            color: var(--accent-color);
        ">
            <i class="fas fa-envelope" style="font-size: 2em; margin-bottom: 15px;"></i>
            <h3>メール送信オプション</h3>
            <p style="margin-bottom: 25px; color: var(--text-color);">下記のいずれかの方法でお問い合わせください：</p>
            
            <div style="display: flex; flex-direction: column; gap: 15px; max-width: 500px; margin: 0 auto;">
                <button onclick="window.location.href='${primaryMailto}'" style="
                    background: linear-gradient(135deg, var(--accent-color), rgba(0, 255, 255, 0.8));
                    color: #000;
                    border: none;
                    padding: 15px 25px;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: 1em;
                    transition: transform 0.3s ease;
                " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    <i class="fas fa-paper-plane"></i> メインアドレスに送信 (akifumichiba@astraltown.com)
                </button>
                
                <button onclick="window.location.href='${secondaryMailto}'" style="
                    background: rgba(0, 255, 255, 0.2);
                    color: var(--accent-color);
                    border: 2px solid var(--accent-color);
                    padding: 15px 25px;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                    font-size: 1em;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(0, 255, 255, 0.3)'" onmouseout="this.style.background='rgba(0, 255, 255, 0.2)'">
                    <i class="fas fa-envelope"></i> サブアドレスに送信 (astraltown0102@gmail.com)
                </button>
                
                <button onclick="copyEmailInfo('${subject.replace(/'/g, "\\'")}', \`${body.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)" style="
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--text-color);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 12px 25px;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 0.9em;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='rgba(255, 255, 255, 0.2)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.1)'">
                    <i class="fas fa-copy"></i> メール内容をコピー（手動送信用）
                </button>
            </div>
            
            <p style="margin-top: 20px; font-size: 0.9em; color: #999;">
                メールクライアントが開かない場合は、コピーボタンを使用して手動でメールを作成してください
            </p>
        </div>
    `;
    
    contactForm.appendChild(optionsMessage);
    
    // Remove message after 30 seconds
    setTimeout(() => {
        optionsMessage.remove();
    }, 30000);
    
    // Scroll to options message
    optionsMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
} 