let redirectUrl = '';

const checkUrl = (url) => {
    try {
        let u = new URL(url);
        
        return (u.protocol !== 'https:') ?
            { result: false, error: 'Please enter a URL with HTTPS protocol.' } :
            { result: true };
    } catch {
        return { result: false, error: 'Invalid string, it is not a URL' };
    }
};

const setUrl = () => {
    let url = prompt('Please enter a URL to redirect:', redirectUrl);
    if (!url || !url.length) {
        alert('Empty string passed as URL.');
        return;
    }

    url = url.indexOf(':') > 0 ? url : `https://${url}`;
    const urlCheckResult = checkUrl(url);

    if (!urlCheckResult.result) {
        alert(urlCheckResult.error);
    } else {
        redirectUrl = url;
    }
}

const redirectToUrl = () => {
    if (!redirectUrl || !redirectUrl.length) {
        alert('Redirect URL is empty. Please enter a URL.');
        return;
    }

    document.location.href = redirectUrl;
};