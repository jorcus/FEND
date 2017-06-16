## Website Performance Optimization portfolio project

The goals:

1. Pagespeed score of 90 or above for index.html (on mobile and desktop)

2. Consistent frame rate of 60fps when scrolling on pizza.html

3. Resizing pizzas on pizza.html in less than 5ms

### GitHub
Github Repo: https://github.com/jorcus/udportfolio/
Github Pages: http://jorcus.github.io/udportfolio/

## How to Run the Project
1. Clone the Github Repo or Download it on: 
Github Repo: https://github.com/jorcus/udportfolio/

2. Unpack it in a local folder.

3. Upload the contents on your web server (FTP?).
   Use a browser to navigate to the folder on your web server.

## Optimizations
### index.html
* Remove Google Font
* inlining style.css
* Using the media query on print.css
* Used async on Google Analytics
* Resizing Image
* Compress jpeg with [https://tinypng.com/](https://tinypng.com/)
* Resizing Image [http://www.reduceimages.com/](http://www.reduceimages.com/)
* Minimize performance.js to performance-min.js
* Added .htaccess code for leverage browser caching
* Adding alternative eg:(alt="something") on image
* To fix HTML no heading issue,i changing the HTML 
 ```<p> in <header> to <h1>``` 
* Changing CSS style 
 ```<p> to <h1>.```

##### Results
Pagespeed score of http://jorcus.github.io/udportfolio/ :
* Mobile: 96/100
* Desktop: 97/100

### pizza.html and main.js




### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>
