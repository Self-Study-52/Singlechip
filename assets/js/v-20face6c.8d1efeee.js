"use strict";(self.webpackChunkvue_press=self.webpackChunkvue_press||[]).push([[373],{4994:(n,s,a)=>{a.r(s),a.d(s,{data:()=>l});const l={key:"v-20face6c",path:"/guide/C-Language/01.C%E8%AF%AD%E8%A8%80%E7%AE%80%E4%BB%8B.html",title:"第一章：C语言简介",lang:"en-US",frontmatter:{title:"第一章：C语言简介",lang:"en-US"},excerpt:"",headers:[{level:2,title:"1.1 程序语言概述",slug:"_1-1-程序语言概述",children:[]},{level:2,title:"1.2 C 语言历史",slug:"_1-2-c-语言历史",children:[]},{level:2,title:"1.3 C 语言特点",slug:"_1-3-c-语言特点",children:[]},{level:2,title:"1.4 一个 C 语言程序",slug:"_1-4-一个-c-语言程序",children:[]},{level:2,title:"1.5 一个完整的 C 程序",slug:"_1-5-一个完整的-c-程序",children:[]},{level:2,title:"1.6 C 语言格式",slug:"_1-6-c-语言格式",children:[]}],filePathRelative:"guide/C-Language/01.C语言简介.md",git:{updatedTime:1635217036e3,contributors:[{name:"Sue-52",email:"1219243947@qq.com",commits:1}]}}},3828:(n,s,a)=>{a.r(s),a.d(s,{default:()=>Cn});var l=a(6252),e=a(6398),t=a(5634),c=a(9035),_=a(8501);const o=(0,l._)("h1",{id:"第一章-c语言简介",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#第一章-c语言简介","aria-hidden":"true"},"#"),(0,l.Uk)(" 第一章："),(0,l._)("code",null,"C"),(0,l.Uk)("语言简介")],-1),u=(0,l._)("h2",{id:"_1-1-程序语言概述",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-1-程序语言概述","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.1 程序语言概述")],-1),p=(0,l._)("p",null,"在介绍C语言的发展历程之前，先对程序语言进行大概的了解。",-1),i=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("strong",null,"机器语言：")])],-1),r=(0,l._)("p",null,"机器语言是低级语言，也称为二进制代码语言。计算机使用的是由0和1组成的二进制数组成的一串指令来表达计算机操作的语言。机器语言的特点是，计算机可以直接识别，不需要进行任何的翻译。",-1),k=(0,l._)("ol",{start:"2"},[(0,l._)("li",null,[(0,l._)("strong",null,"汇编语言：")])],-1),m=(0,l._)("p",null,"汇编语言是面向机器的程序设计语言。为了减轻使用机器语言编程的痛苦，用英文字母或符号串来替代机器语言的二进制码，这样就把不易理解和使用的机器语言变成了汇编语言。这样一来，使用汇编语言就比机器语言便于阅读和理解程序。",-1),d=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,[(0,l._)("strong",null,"高级语言：")])],-1),b=(0,l._)("p",null,"由于汇编语言依赖于硬件体系，并且该语言中的助记符号数量比较多，所以其运用起来仍然不够方便。为了使程序语言能更贴近人类的自然语言，同时又不依赖于计算机硬件，于是产生了高级语言。这种语言，其语法形式类似于英文，并且因为远离对硬件的直接操作，而易于被普通人所理解与使用。其中影响较大、使用普遍的高级语言有Fortran、ALGOL、Basic、COBOL、LISP、Pascal、PROLOG、C、C++、VC、VB、Delphi、Java等。",-1),U=(0,l._)("h2",{id:"_1-2-c-语言历史",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-2-c-语言历史","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.2 C 语言历史")],-1),g=(0,l._)("p",null,"语言是在由UNIX的研制者丹尼斯·里奇（Dennis Ritchie）和肯·汤普逊（Ken Thompson）于1970年研制出的BCPL语言（简称B语言）的基础上发展和完善起来的。19世纪70年代初期，AT&T Bell实验室的程序员丹尼斯·里奇第一次把B语言改为C语言。",-1),h=(0,l._)("p",null,"最初，C语言运行于AT&T的多用户、多任务的UNIX操作系统上。后来，丹尼斯·里奇用C语言改写了UNIX C的编译程序，UNIX操作系统的开发者肯·汤普逊又用C语言成功地改写了UNIX，从此开创了编程史上的新篇章。UNIX成为第一个不是用汇编语言编写的主流操作系统。",-1),C=(0,l._)("p",null,"尽管C语言是在大型商业机构和学术界的研究实验室研发的，但是当开发者们为第一台个人计算机提供C编译系统之后，C语言就得以广泛传播，并为大多数程序员所接受。对MS-DOS操作系统来说，系统软件和实用程序都是用C语言编写的。Windows操作系统大部分也是用C语言编写的。",-1),f=(0,l._)("p",null,"C语言是一种面向过程的语言，同时具有高级语言和汇编语言的优点。C语言可以广泛应用于不同的操作系统，如UNIX、MS-DOS、Microsoft Windows及Linux等。",-1),v=(0,l._)("p",null,"在C语言的基础上发展起来的有支持多种程序设计风格的C++语言、网络上广泛使用的Java、JavaScript以及微软的C#语言等。也就是说，学好C语言之后，再学习其他语言时就会比较轻松。",-1),y=(0,l._)("h2",{id:"_1-3-c-语言特点",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-3-c-语言特点","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.3 C 语言特点")],-1),w=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("strong",null,"高效性：")])],-1),x=(0,l._)("p",null,"谈到高效性，不得不说C语言是“鱼与熊掌”兼得。从C语言的发展历史也可以看到，它继承了低级语言的优点，产生了高效的代码，并具有友好的可读性和编写性。一般情况下，C语言生成的目标代码的执行效率只比汇编程序低10%～20%。",-1),L=(0,l._)("ol",{start:"2"},[(0,l._)("li",null,"灵活性")],-1),B=(0,l._)("p",null,"C语言中的语法不拘一格，可在原有语法基础上进行创造、复合，从而给程序员更多的想象和发挥的空间。",-1),S=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,"功能丰富")],-1),H=(0,l._)("p",null,"除了C语言中所具有的类型，还可以使用丰富的运算符和自定义的结构类型，来表达任何复杂的数据类型，完成所需要的功能。",-1),I=(0,l._)("ol",{start:"4"},[(0,l._)("li",null,"表达力强")],-1),W=(0,l._)("p",null,"C语言的特点体现在它的语法形式与人们所使用的语言形式相似，书写形式自由，结构规范，并且只需简单的控制语句即可轻松控制程序流程，完成繁琐的程序要求。",-1),A=(0,l._)("ol",{start:"5"},[(0,l._)("li",null,"移植性好")],-1),N=(0,l._)("p",null,"由于C语言具有良好的移植性，从而使得C程序在不同的操作系统下，只需要简单的修改或者不用修改即可进行跨平台的程序开发操作。",-1),O=(0,l._)("h2",{id:"_1-4-一个-c-语言程序",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-4-一个-c-语言程序","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.4 一个 C 语言程序")],-1),X=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token macro property"},[(0,l._)("span",{class:"token directive-hash"},"#"),(0,l._)("span",{class:"token directive keyword"},"include"),(0,l._)("span",{class:"token string"},"<stdio.h>")]),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"main"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token punctuation"},")"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"Hello C \\n"'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"token number"},"0"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br")])],-1),D=(0,l._)("p",null,[(0,l._)("img",{src:e,alt:"image-20211025212449833"})],-1),T=(0,l._)("p",null,[(0,l._)("img",{src:t,alt:"image-20211025212525224"})],-1),E=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("strong",null,"#include指令")])],-1),P=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token macro property"},[(0,l._)("span",{class:"token directive-hash"},"#"),(0,l._)("span",{class:"token directive keyword"},"include"),(0,l._)("span",{class:"token string"},"<stdio.h>")]),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),q=(0,l._)("p",null,[(0,l.Uk)("这个语句的功能是进行有关的预处理操作。"),(0,l._)("code",null,"include"),(0,l.Uk)("成为文件包含命令，后面尖括号中的内容成为头部文件或首文件。")],-1),J=(0,l._)("ol",{start:"2"},[(0,l._)("li",null,[(0,l._)("strong",null,"空行")])],-1),M=(0,l._)("p",null,"实例代码中的第二行。 C语言是一个较灵活的语言，因此格式并不是固定不变、拘于一格的。也就是说，空格、空行、跳格并不会影响程序。有的读者就会问：“为什么要有这些多余的空格和空行呢？”其实这就像生活中在纸上写字一样，虽然拿来一张白纸就可以在上面写字，但是通常还会在纸的上面印上一行一行的方格或段落，隔开每一段文字，自然就更加美观和规范。合理、恰当地使用这些空格、空行，可以使编写出来的程序更加规范，对日后的阅读和整理发挥着重要的作用。在此也提醒读者，在写程序时最好将程序书写得规范、干净。",-1),R=(0,l._)("p",null,[(0,l._)("strong",null,"注意:")],-1),F=(0,l._)("blockquote",null,[(0,l._)("p",null,"不是所有的空格都没有用，如在两个关键字之间用空格隔开（else if），这种情况下如果将空格去掉，程序就不能通过编译。在这里先进行一下说明，在以后章节的学习中就会慢慢领悟")],-1),G=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,[(0,l._)("strong",null,[(0,l._)("code",null,"main"),(0,l.Uk)("函数声明")])])],-1),V=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"main"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},"{"),(0,l._)("span",{class:"token punctuation"},"."),(0,l._)("span",{class:"token punctuation"},"."),(0,l._)("span",{class:"token punctuation"},"."),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),Z=(0,l._)("ol",{start:"4"},[(0,l._)("li",null,[(0,l._)("strong",null,"函数体")])],-1),K=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"Hello C \\n"'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"token number"},"0"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br")])],-1),Y=(0,l._)("p",null,"两个大括号就构成了函数体，函数体也可以称为函数的语句块。",-1),j=(0,l._)("ol",{start:"5"},[(0,l._)("li",null,[(0,l._)("strong",null,"执行语句")])],-1),z=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"Hello C \\n"'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),Q=(0,l._)("p",null,"执行语句就是函数体中要执行的动作内容。",-1),$=(0,l._)("ol",{start:"6"},[(0,l._)("li",null,[(0,l._)("strong",null,[(0,l._)("code",null,"return"),(0,l.Uk)(" 语句")])])],-1),nn=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"token number"},"0"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),sn=(0,l._)("p",null,"行语句使main函数终止运行，并向操作系统返回一个整型常量0。前面介绍main函数时，说过返回一个整型返回值，此时0就是要返回的整型值。",-1),an=(0,l._)("h2",{id:"_1-5-一个完整的-c-程序",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-5-一个完整的-c-程序","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.5 一个完整的 C 程序")],-1),ln=(0,l._)("p",null,"现这样的功能：有一个长方体，它的高已经给出，然后输入这个长方体的长和宽，通过输入的长、宽以及给定的高度，计算出长方体的体积。",-1),en=(0,l._)("div",{class:"language-c ext-c line-numbers-mode"},[(0,l._)("pre",{class:"language-c"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"/* 头文件 */"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token macro property"},[(0,l._)("span",{class:"token directive-hash"},"#"),(0,l._)("span",{class:"token directive keyword"},"include"),(0,l._)("span",{class:"token string"},"<stdio.h>")]),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"/* 定义常量 */"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token macro property"},[(0,l._)("span",{class:"token directive-hash"},"#"),(0,l._)("span",{class:"token directive keyword"},"define"),(0,l.Uk)(),(0,l._)("span",{class:"token macro-name"},"Height"),(0,l.Uk)(),(0,l._)("span",{class:"token expression"},[(0,l._)("span",{class:"token number"},"10")])]),(0,l.Uk)("\n"),(0,l._)("span",{class:"token macro property"},[(0,l._)("span",{class:"token directive-hash"},"#"),(0,l._)("span",{class:"token directive keyword"},"define"),(0,l.Uk)(),(0,l._)("span",{class:"token macro-name"},"Height"),(0,l.Uk)(),(0,l._)("span",{class:"token expression"},[(0,l._)("span",{class:"token number"},"10")])]),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"/* 函数声明 */"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"calculate"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" Long"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" Width"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"/* 主函数 main */"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"main"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token punctuation"},")"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 定义整型变量，表示长度 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" m_Long"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 定义整型变量，表示宽度 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" m_Width"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 定义整型变量，表示长方体的体积 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" result"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 显示提示 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"长方形的高度为：%d\\n"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(" Height"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 显示提示 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"请输入长度\\n"'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 输入 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"scanf_s"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"%d"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},"&"),(0,l.Uk)("m_Long"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 显示提示 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"请输入宽度\\n"'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 输入 */"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"scanf_s"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"%d"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},"&"),(0,l.Uk)("m_Width"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token comment"},"/* 调用函数计算值 */"),(0,l.Uk)("\n\tresult "),(0,l._)("span",{class:"token operator"},"="),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"calculate"),(0,l._)("span",{class:"token punctuation"},"("),(0,l.Uk)("m_Long"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(" m_Width"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"长方体的体积为："'),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token function"},"printf"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token string"},'"%d\\n"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(" result"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"return"),(0,l.Uk)(),(0,l._)("span",{class:"token number"},"0"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"// 计算函数"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"calculate"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" Long"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" Width"),(0,l._)("span",{class:"token punctuation"},")"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"int"),(0,l.Uk)(" result "),(0,l._)("span",{class:"token operator"},"="),(0,l.Uk)(" Long "),(0,l._)("span",{class:"token operator"},"*"),(0,l.Uk)(" Width "),(0,l._)("span",{class:"token operator"},"*"),(0,l.Uk)(" Height"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n\t"),(0,l._)("span",{class:"token keyword"},"return"),(0,l.Uk)(" result"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"20"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"21"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"22"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"23"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"24"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"25"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"26"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"27"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"28"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"29"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"30"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"31"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"32"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"33"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"34"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"35"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"36"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"37"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"38"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"39"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"40"),(0,l._)("br")])],-1),tn=(0,l._)("p",null,[(0,l._)("img",{src:c,alt:"image-20211026083134926"})],-1),cn=(0,l._)("div",{class:"custom-container tip"},[(0,l._)("p",{class:"custom-container-title"},"【程序流程图】"),(0,l._)("p",null,[(0,l._)("img",{src:_,alt:"image-20211026083225639"})])],-1),_n=(0,l._)("h2",{id:"_1-6-c-语言格式",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_1-6-c-语言格式","aria-hidden":"true"},"#"),(0,l.Uk)(" 1.6 C 语言格式")],-1),on=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("strong",null,"主函数main")])],-1),un=(0,l._)("p",null,"一个C程序都是从main函数开始执行的。main函数不论放在什么位置都没有关系。",-1),pn=(0,l._)("ol",{start:"2"},[(0,l._)("li",null,[(0,l._)("strong",null,"C程序整体是由函数构成的")])],-1),rn=(0,l._)("p",null,"程序中main就是其中的主函数，当然在程序中是可以定义其他函数的。在这些定义函数中进行特殊的操作，使得函数完成特定的功能。虽然将所有的执行代码全部放入main函数也是可行的，但是如果将其分成一块一块，每一块使用一个函数进行表示，那么整个程序看起来就具有结构性，并且易于观察和修改。",-1),kn=(0,l._)("ol",{start:"3"},[(0,l._)("li",null,[(0,l._)("strong",null,"函数体的内容在“{}”中")])],-1),mn=(0,l._)("p",null,'每一个函数都要执行特定的功能，那么如何才能看出一个函数的具体操作的范围呢？答案就是寻找“{"和"}”这两个大括号。C语言使用一对大括号来表示程序的结构层次，需要注意的就是左右大括号要对应使用。 技巧:在编写程序时，为了防止对应大括号的遗漏，每次都可以先将两个对应的大括号写出来，再向括号中添加代码。',-1),dn=(0,l._)("ol",{start:"4"},[(0,l._)("li",null,[(0,l._)("strong",null,"每一个执行语句都以“;”结尾")])],-1),bn=(0,l._)("p",null,"如果注意观察前面的两个实例就会发现，在每一个执行语句后面都会有一个“;”（分号）作为语句结束的标志。",-1),Un=(0,l._)("ol",{start:"5"},[(0,l._)("li",null,[(0,l._)("strong",null,"英文字符大小通用")])],-1),gn=(0,l._)("p",null,"在程序中，可以使用英文的大写字母，也可以使用英文的小写字母。但一般情况下使用小写字母多一些，因为小写字母易于观察。但是在定义常量时常常使用大写字母，而在定义函数时有时也会将第一个字母大写。",-1),hn={},Cn=(0,a(3744).Z)(hn,[["render",function(n,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,u,p,i,r,k,m,d,b,U,g,h,C,f,v,y,w,x,L,B,S,H,I,W,A,N,O,X,D,T,E,P,q,J,M,R,F,G,V,Z,K,Y,j,z,Q,$,nn,sn,an,ln,en,tn,cn,_n,on,un,pn,rn,kn,mn,dn,bn,Un,gn],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,l]of s)n[a]=l;return n}},6398:(n,s,a)=>{n.exports=a.p+"assets/img/image-20211025212449833.a3e02a84.png"},5634:(n,s,a)=>{n.exports=a.p+"assets/img/image-20211025212525224.a5a26c23.png"},9035:(n,s,a)=>{n.exports=a.p+"assets/img/image-20211026083134926.1eaa1d1a.png"},8501:(n,s,a)=>{n.exports=a.p+"assets/img/image-20211026083225639.9e6f5473.png"}}]);