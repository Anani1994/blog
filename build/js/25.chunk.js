(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{353:function(t,s,i){"use strict";i.r(s);var n=i(499),e=i(398);for(var o in e)"default"!==o&&function(t){i.d(s,t,function(){return e[t]})}(o);var a=i(0),r=Object(a.a)(e.default,n.a,n.b,!1,null,null,null);r.options.__file="src/views/articles/others/computer/OperatingSystem.vue",s.default=r.exports},398:function(t,s,i){"use strict";i.r(s);var n=i(399),e=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(s,t,function(){return n[t]})}(o);s.default=e.a},399:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{toTop:this.$util.toTop}}}},499:function(t,s,i){"use strict";var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("BoWen",[i("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[i("Steps",{attrs:{direction:"vertical"}},[i("Step",{attrs:{title:"基本概念",content:"基本概念",status:"wait"},nativeOn:{click:function(s){t.toTop("#OperatingSystem-1",30)}}}),i("Step",{attrs:{title:"基本特征",content:"基本特征",status:"wait"},nativeOn:{click:function(s){t.toTop("#OperatingSystem-2",30)}}}),i("Step",{attrs:{title:"系统的分类",content:"系统的分类",status:"wait"},nativeOn:{click:function(s){t.toTop("#OperatingSystem-3",30)}}})],1)],1),i("div",{staticClass:"px-1"},[i("div",{staticClass:"py-3 text-center"},[i("h1",[i("Icon",{attrs:{type:"ios-book-outline"}}),i("font",[t._v(" 操作系统")])],1),i("p",{staticClass:"pt-1"},[t._v("计算机系统的内核与基石")])]),i("h3",{staticClass:"ml-1",attrs:{id:"OperatingSystem-1"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 基本概念")])],1),i("Divider"),i("p",[i("font",{staticClass:"text-info"},[t._v("操作系统（Operating System）")]),i("font",[t._v("是一种管理、调度、控制计算机系统资源（硬件和软件资源），合理组织计算机的工作流程，方便用户使用和可扩展的计算机程序模块的集合（系统软件）。")])],1),i("p",[i("font",{staticClass:"text-info"},[t._v("用户通常面对的是一个整体的计算机系统，分为虚拟机和物理机两个部分。")]),i("font",[t._v("在操作计算机时，用户实际操作的是虚拟机，物理机是由 OS 管理和操作的。")])],1),i("p",{staticClass:"text-info"}),i("ul",[i("font",{staticClass:"text-info"},[t._v("操作系统的功能：")]),i("li",[t._v("处理机管理：有效地、合理地分配 CPU 的时间。")]),i("li",[t._v("储存管理： 完成存储分配、地址转换、信息保存以及存储扩充等工作（1、存储地址的分配。2、地址转换(相对地址转换为绝对地址)。3、存储扩充。4、存储保护，比如在内存中运行的多个程序间的数据互不影响）。")]),i("li",[t._v("文件管理：对文件进行组织管理、提供方便的存取和文件的安全保证机制。")]),i("li",[t._v("设备管理： 对各种各样的设备进行有效的管理，位用户提供方便的操作，提高设备的利用率。")])],1),i("h3",{staticClass:"ml-1",attrs:{id:"OperatingSystem-2"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 基本特征")])],1),i("Divider"),i("p",[t._v("操作系统具有三个特性，分别是并发性、共享性、虚拟性。")]),i("p",[i("font",{staticClass:"text-info"},[t._v("并发性：")]),i("font",[t._v("两个或两个以上的事件在同一时间间隔中发生。")])],1),i("p",[t._v("早期的计算机系统中，一旦程序开始运行，就会占用系统的所有空间，直到运行结束，也就是我们所说的"),i("font",{staticClass:"text-info"},[t._v("单道程序系统")]),i("font",[t._v("。因此任何时刻内存中只允许一个程序在系统中运行。")])],1),i("p",[t._v("在后来的"),i("font",{staticClass:"text-info"},[t._v("多道程序系统")]),i("font",[t._v("中，“并发”是指在宏观上在一段时间内可以“同时”运行多个程序。对于只有一个处理器的情况，多个进程在极短的时间内交替执行，而用户察觉不到这种交替动作。比如我们可以一边听音乐，一边调试程序。")])],1),i("p",[i("font",{staticClass:"text-info"},[t._v("共享性")]),i("font",[t._v("多个并发执行的程序可以共同使用系统的资源。")])],1),i("p",[t._v("共享的访问包括互斥共享（比如打印机）和同时访问（比如磁盘）的规则。")]),i("p",[i("font",{staticClass:"text-info"},[t._v("虚拟性：")]),i("font",[t._v("通过虚拟技术把一个物理设备虚拟为多个逻辑设备（比如虚拟内存）。")])],1),i("h3",{staticClass:"ml-1",attrs:{id:"OperatingSystem-3"}},[i("Icon",{attrs:{type:"logo-buffer"}}),i("font",[t._v(" 系统分类")])],1),i("Divider"),i("p",[t._v("按照用户界面划分：命令行界面操作系统（DOS等）和图形用户界面操作系统（windows等）。")]),i("p",[t._v("按照用户数划分：单用户操作系统和多用户操作系统。")]),i("ul",[t._v("按照系统功能划分："),i("li",[i("font",{staticClass:"text-info"},[t._v("批处理操作系统（Batch Proce ssing System）：")]),i("font",[t._v("一种“成批”处理用户作业的操作系统。")])],1),i("li",[i("font",{staticClass:"text-info"},[t._v("分时操作系统（Time Sharing System）：")]),i("font",[t._v("一种将 CPU 时间划分成很小的时间片，按时间片轮转法分配给多个终端用户使用的操作系统（比如 UNIX）。")])],1),i("li",[i("font",{staticClass:"text-info"},[t._v("实时操作系统（Real Time Operating System）：")]),i("font",[t._v("指对于特定的输入，系统能够在极短的时间内做出响应，并完成对该输入请求处理的操作系统。")])],1),i("li",[i("font",{staticClass:"text-info"},[t._v("分布式操作系统（Distributed Operating System）：")]),i("font",[t._v("指通过计算机网络将物理上分布的具有自治功能的数据处理系统或计算机系统互连起来，实现信息交换或资源共享，协作完成处理任务的操作系统。")])],1),i("li",[i("font",{staticClass:"text-info"},[t._v("网络操作系统（Network Operating System）：")]),i("font",[t._v("指通常在操作系统功能的基础上提高网络通信和网络服务功能的操作系统。")])],1),i("li",[i("font",{staticClass:"text-info"},[t._v("嵌入式操作系统（Embedded Operating System）：")]),i("font",[t._v("指运行在嵌入式系统中，对整个嵌入式系统以及它控制的各种资源进行统一管理和调度的操作系统（如IOS系统、安卓系统）。")])],1)]),i("p",{staticClass:"text-right"},[t._v("参考资料："),i("a",{attrs:{href:"https://www.icourse163.org/course/DLUT-1001938002"}},[t._v("中国大学MOOC")])]),i("FooterDivider")],1)])},e=[];n._withStripped=!0,i.d(s,"a",function(){return n}),i.d(s,"b",function(){return e})}}]);