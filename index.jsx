import React from "react";

const MarkDownText = (props) => {
    const { data, bold, italic, underline } = props
    function textrender(params) {
        if (typeof data !== 'string' || data === undefined) {
            return null
        }
        // bold only
        if (bold && !italic && !underline) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><b> ')
                .replace(/\. \*\*/g, '. <b>')
                .replace(/\*\* -/g, '</b> -')
                .replace(/(\d+)\. <b>/g, '<br>$1. <b>')
                .replace(/\*\*:/g, ':</b>')
                .replace(/\*\*(?!<b>)/g, '</b>')
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            return processedData
        }
        // italic only
        else if (italic && !bold && !underline) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<i>$1</i>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><i> ')
                .replace(/\. \*\*/g, '. <i>')
                .replace(/\*\* -/g, '</i> -')
                .replace(/(\d+)\. <i>/g, '<br>$1. <i>')
                .replace(/\*\*:/g, ':</i>')
                .replace(/\*\*(?!<i>)/g, '</i>')
                .replace(/\*\*(.*?)\*\*/g, '<i>$1</i>')
            return processedData
        }
        // underline only
        else if (underline && !bold && !italic) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<u>$1</u>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><u> ')
                .replace(/\. \*\*/g, '. <u>')
                .replace(/\*\* -/g, '</u> -')
                .replace(/(\d+)\. <u>/g, '<br>$1. <u>')
                .replace(/\*\*:/g, ':</u>')
                .replace(/\*\*(?!<u>)/g, '</u>')
                .replace(/\*\*(.*?)\*\*/g, '<u>$1</u>')
            return processedData
        }
        // bold & italic
        else if (bold && italic && !underline) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<b><i>$1</i></b>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><b><i> ')
                .replace(/\. \*\*/g, '. <b><i>')
                .replace(/\*\* -/g, '</i></b> -')
                .replace(/(\d+)\. <b><i>/g, '<br>$1. <b><i>')
                .replace(/\*\*:/g, ':</i></b>')
                .replace(/\*\*(?!<b><i>)/g, '</i></b>')
                .replace(/\*\*(.*?)\*\*/g, '<b><i>$1</i></b>')
            return processedData
        }
        // bold & underline
        else if (bold && underline && !italic) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<b><u>$1</u></b>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><b><u> ')
                .replace(/\. \*\*/g, '. <b><u>')
                .replace(/\*\* -/g, '</u></b> -')
                .replace(/(\d+)\. <b><u>/g, '<br>$1. <b><u>')
                .replace(/\*\*:/g, ':</u></b>')
                .replace(/\*\*(?!<b><u>)/g, '</u></b>')
                .replace(/\*\*(.*?)\*\*/g, '<b><u>$1</i></b>')
            return processedData
        }
        // italic & underline
        else if (italic && underline && !bold) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<i><u>$1</u></i>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><i><u> ')
                .replace(/\. \*\*/g, '. <i><u>')
                .replace(/\*\* -/g, '</u></i> -')
                .replace(/(\d+)\. <i><u>/g, '<br>$1. <i><u>')
                .replace(/\*\*:/g, ':</u></i>')
                .replace(/\*\*(?!<i><u>)/g, '</u></i>')
                .replace(/\*\*(.*?)\*\*/g, '<i><u>$1</u></i>')
            return processedData
        }
        // bold & italic & underline
        else if (italic && underline && bold) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<b><i><u>$1</u></i></b>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><b><i><u> ')
                .replace(/\. \*\*/g, '. <b><i><u>')
                .replace(/\*\* -/g, '</u></i></b> -')
                .replace(/(\d+)\. <b><i><u>/g, '<br>$1. <b><i><u>')
                .replace(/\*\*:/g, ':</u></i></b>')
                .replace(/\*\*(?!<b><i><u>)/g, '</u></i></b>')
                .replace(/\*\*(.*?)\*\*/g, '<b><i><u>$1</u></i></b>')
            return processedData
        }
        // no style
        else if (!bold && !italic && !underline) {
            const hasNoHyphenNumberOrColon = /^(?!.*-)(?!.*\d)(?!.*:).*$/.test(data)
            if (hasNoHyphenNumberOrColon) {
                const processedData = data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                return processedData
            }
    
            const processedData = data
                .replace(/(?<!\*\*):/g, ': <br>')
                .replace(/(?<![a-zA-Z])- \*\*/g, '<br><b> ')
                .replace(/\. \*\*/g, '. <b>')
                .replace(/\*\* -/g, '</b> -')
                .replace(/(\d+)\. <b>/g, '<br>$1. <b>')
                .replace(/\*\*:/g, ':</b>')
                .replace(/\*\*(?!<b>)/g, '</b>')
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            return processedData
        }
    }
    
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: textrender(data) } });

           
};

export default MarkDownText;
