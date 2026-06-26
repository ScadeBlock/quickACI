function load(linkr){
    linkits = document.createElement('link');
    linkits.rel = 'stylesheet';
    linkits.type = 'text/css';
    linkits.href = linkr;
    
    document.head.appendChild(linkits);
}

load("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css")
