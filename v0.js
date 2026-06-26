function load(link){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'path/to/styles.css';
    
    document.head.appendChild(link);
}

load("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css")
