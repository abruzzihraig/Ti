Ti
==

Ti is a css preprocessor developed by Rework framework.  
!! *Currently This repo is just a demo for preprocessing css.*

## Note
The suffix of Ti's file is `.ti`.

## Features
### indent syntax like SASS/Stylus
You can write indent syntax like SASS/Stylus.  
source:
```
.foo
  color: #333
    .bar
      font-size: 12px
```
yields:
```
.foo {
  color: #333;
}

.foo .bar {
  font-size: 12px;
}
```
### base mixin
Ti support some basic mixin now.  
More mixin supports from [rework-mixins](https://github.com/reworkcss/rework-mixins).  
source:
```
.foo
  overflow: ellipsis
  .bar
    absolute: top 5px left 10px
```
yields:
```
.foo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.foo .bar {
  position: absolute;
  top: 5px;
  left: 10px;
}
```
### clearfix mixin
This great css clearfix code from [Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/).  
source:
```
.foo
  clear: fix
```
yields:
```
.foo {
  *zoom: 1;
}

.foo:before,
.foo:after {
  content: " ";
  display: table;
}

.foo:after {
  clear: both;
}
```
### distinguish contrast color
Use this feature you can pick the most contrast color between black & white.  
Like below code, #ffffff is further than #000000 to #59ab3c, so here #ffffff is a most contrast color to #59ab3c.  
You can easily get a contrast color to distinguish in foreground & backgroud.  
it distinguish color by CIE2000 standard.  
More detail in [WCAG](http://www.w3.org/TR/WCAG20/).  
source:
```
.foo
  color: #592b3c
  background: url(xxx) contrast(#592b3c) no-repeat
```
yields:
```
.foo {
  color: #592b3c;
  background: url(xxx) #ffffff no-repeat;
}
```
## TODO
- [x] indent syntax like SASS/Stylus
- [x] base mixin
- [x] clearfix mixin
- [x] distinguish contrast color
- [ ] extend
- [ ] import
- [ ] calc
- [ ] self-define function
- [ ] variable

## Author
Yang He [abruzzi.hraig@gmail.com](http://mailto:abruzzi.hraig@gmail.com)

## Licence
MIT
