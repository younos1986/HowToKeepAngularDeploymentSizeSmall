# HowToKeepAngularDeploymentSizeSmall

A sample project to show hoe to make angular2+ deployment size small. it uses lazy loaded modules to keep the size small.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

Live <a target='_blank' href='https://younos1986.github.io/HowToKeepAngularDeploymentSizeSmall/#'> Home page demo </a> 

Live <a target='_blank' href='https://younos1986.github.io/HowToKeepAngularDeploymentSizeSmall/#/dashboard'> Admin panel demo </a> 



## The routing schema 

To make any page independent and make them not affect other pages' size, every page is a lazy loaded Module

```
                                 ------------>    Dashboard (router + template)
app.component (router) -------->
                                 ------------>    Home  (router + template)
                                                                              -------------> aboutus
                                                                              -------------> blog
                                                                              -------------> contact
                                                                              -------------> index
                                                                              -------------> pricing
```                                                    


# Admin Panel  (page Size ~= 950KB )

<img  src='https://raw.githubusercontent.com/younos1986/HowToKeepAngularDeploymentSizeSmall/master/doc/dashboard.png' />




# Home Page (page Size ~= 950KB )

<img  src='https://raw.githubusercontent.com/younos1986/HowToKeepAngularDeploymentSizeSmall/master/doc/homepage.png' />


## The Home page size

<img src='https://raw.githubusercontent.com/younos1986/HowToKeepAngularDeploymentSizeSmall/master/doc/inspected_hompage.png'/>

