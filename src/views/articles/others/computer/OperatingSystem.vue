<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本概念"
                    content="基本概念"
                    status="wait"
                    @click.native="toTop('#OperatingSystem-1', 30)")
                Step(title="基本特征"
                    content="基本特征"
                    status="wait"
                    @click.native="toTop('#OperatingSystem-2', 30)")
                Step(title="系统的分类"
                    content="系统的分类"
                    status="wait"
                    @click.native="toTop('#OperatingSystem-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    font  操作系统
                p.pt-1 计算机系统的内核与基石
            h3#OperatingSystem-1.ml-1
                Icon(type="logo-buffer")
                font  基本概念
            Divider
            p
                font.text-info 操作系统（Operating System）
                font 是一种管理、调度、控制计算机系统资源（硬件和软件资源），合理组织计算机的工作流程，方便用户使用和可扩展的计算机程序模块的集合（系统软件）。
            p
                font.text-info 用户通常面对的是一个整体的计算机系统，分为虚拟机和物理机两个部分。
                font 在操作计算机时，用户实际操作的是虚拟机，物理机是由 OS 管理和操作的。
            p.text-info 
            ul 
                font.text-info 操作系统的功能：
                li 处理机管理：有效地、合理地分配 CPU 的时间。
                li 储存管理： 完成存储分配、地址转换、信息保存以及存储扩充等工作（1、存储地址的分配。2、地址转换(相对地址转换为绝对地址)。3、存储扩充。4、存储保护，比如在内存中运行的多个程序间的数据互不影响）。
                li 文件管理：对文件进行组织管理、提供方便的存取和文件的安全保证机制。
                li 设备管理： 对各种各样的设备进行有效的管理，位用户提供方便的操作，提高设备的利用率。
            h3#OperatingSystem-2.ml-1
                Icon(type="logo-buffer")
                font  基本特征
            Divider
            p 操作系统具有三个特性，分别是并发性、共享性、虚拟性。
            p
                font.text-info 并发性：
                font 两个或两个以上的事件在同一时间间隔中发生。
            p 早期的计算机系统中，一旦程序开始运行，就会占用系统的所有空间，直到运行结束，也就是我们所说的
                font.text-info 单道程序系统
                font 。因此任何时刻内存中只允许一个程序在系统中运行。
            p 在后来的
                font.text-info 多道程序系统
                font 中，“并发”是指在宏观上在一段时间内可以“同时”运行多个程序。对于只有一个处理器的情况，多个进程在极短的时间内交替执行，而用户察觉不到这种交替动作。比如我们可以一边听音乐，一边调试程序。
            
            p
                font.text-info 共享性
                font 多个并发执行的程序可以共同使用系统的资源。
            p 共享的访问包括互斥共享（比如打印机）和同时访问（比如磁盘）的规则。
            p
                font.text-info 虚拟性：
                font 通过虚拟技术把一个物理设备虚拟为多个逻辑设备（比如虚拟内存）。
            h3#OperatingSystem-3.ml-1
                Icon(type="logo-buffer")
                font  系统分类
            Divider
            p 按照用户界面划分：命令行界面操作系统（DOS等）和图形用户界面操作系统（windows等）。
            p 按照用户数划分：单用户操作系统和多用户操作系统。
            ul 按照系统功能划分：
                li
                    font.text-info 批处理操作系统（Batch Proce ssing System）：
                    font 一种“成批”处理用户作业的操作系统。
                li
                    font.text-info 分时操作系统（Time Sharing System）：
                    font 一种将 CPU 时间划分成很小的时间片，按时间片轮转法分配给多个终端用户使用的操作系统（比如 UNIX）。
                li
                    font.text-info 实时操作系统（Real Time Operating System）：
                    font 指对于特定的输入，系统能够在极短的时间内做出响应，并完成对该输入请求处理的操作系统。
                li
                    font.text-info 分布式操作系统（Distributed Operating System）：
                    font 指通过计算机网络将物理上分布的具有自治功能的数据处理系统或计算机系统互连起来，实现信息交换或资源共享，协作完成处理任务的操作系统。
                li
                    font.text-info 网络操作系统（Network Operating System）：
                    font 指通常在操作系统功能的基础上提高网络通信和网络服务功能的操作系统。
                li
                    font.text-info 嵌入式操作系统（Embedded Operating System）：
                    font 指运行在嵌入式系统中，对整个嵌入式系统以及它控制的各种资源进行统一管理和调度的操作系统（如IOS系统、安卓系统）。
            p.text-right 参考资料：
                a(href="https://www.icourse163.org/course/DLUT-1001938002") 中国大学MOOC
            FooterDivider
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
