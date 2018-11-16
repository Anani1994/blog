<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="冯.诺伊曼计算机"
                    content="冯.诺伊曼计算机"
                    status="wait"
                    @click.native="toTop('#ComputerSystem-1', 30)")
                Step(title="计算机硬件系统的组成"
                    content="计算机硬件系统的组成"
                    status="wait"
                    @click.native="toTop('#ComputerSystem-2', 30)")
                Step(title="计算机软件系统的组成"
                    content="计算机软件系统的组成"
                    status="wait"
                    @click.native="toTop('#ComputerSystem-3', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    font  计算机系统
                p.pt-1 数据库管理的计算机硬软件及网络系统
            h3#ComputerSystem-1.ml-1
                Icon(type="logo-buffer")
                font  冯.诺伊曼计算机
            Divider
            p 数学家冯.诺伊曼根据图灵机的设想提出设计计算机的体系结构，这一结构也称为
                font.text-info 冯.诺伊曼体系结构
                font 。
            ul 冯.诺伊曼计算机主要有三个特点：
                li 计算机由五大部分组成：运算器、控制器、存储器、输入设备和输出设备(其中：运算器 + 控制器 = CPU(中央处理器)，运算器 + 控制器 + 存储器 = 主机，输入设备 + 输出设备 = 外部设备)。
                li 指令和数据以同等地位储存在主储存器中，并按地址访问、以顺序的方式执行。
                li 程序和数据以二进制表示。
            img.img-fluid.mb-3(src="../../../../static/images/articles/others/computer/computer-comprise.png", alt="计算机结构")
            h3#ComputerSystem-2.ml-1
                Icon(type="logo-buffer")
                font  计算机硬件系统的组成
            Divider
            p 计算机系统是由硬件系统和软件系统组成。
            p 硬件通常是指由电子线路和机电设备组成的设备实体（比如主机、输入设备和输出设备等）。
            p 软件通常是为运行、维护管理、应用计算机所编制的计算机程序，包括系统软件和应用软件。没有安装软件的系统称为裸机。
            img.img-fluid.mb-3(src="../../../../static/images/articles/others/computer/hardware-system-composition.png", alt="硬件系统组成")
            h3#ComputerSystem-3.ml-1
                Icon(type="logo-buffer")
                font  计算机软件系统的组成
            Divider
            p 如前所述计算机软件系统由两部分组成：系统软件和应用软件。
            img.img-fluid.mb-3(src="../../../../static/images/articles/others/computer/software-system-composition.png", alt="软件系统组成")
            p 硬件是软件运行的物质基础，软件是计算机的灵魂，是发挥计算机功能的关键，提高了机器的效率、扩展了硬件的功能、方便了用户的使用。
            p
                font.text-info 操作系统
                font 是最重要的系统软件，是计算机系统软件的核心，是对计算机硬件、软件资源进行管理、调度、控制和运行的一组程序。
            p 通过操作系统，用户可以更方便、顺利操作计算机，而不必知晓硬件的具体内容。
            p 除了操作系统意外，程序设计语言及语言处理程序也是很重要的一个系统软件。
            ul 程序设计语言及语言处理程序包括：
                li
                    font.text-info 机器语言：
                    font 用二进制代码编写，机器能直接执行。
                li
                    font.text-info 汇编语言：
                    font 用符号表示指令代码，需要汇编程序将其翻译成机器指令后才能运行。
                li
                    font.text-info 高级语言：
                    font 采用接近自然语言的字符或表达式、按照一定的语法规则编写程序，需要高级语言编译程序将源程序编译生成目标程序才能运行。
            p.text-info 高级语言即程序设计语言分为面向过程和面向对象两类。
            p
                font.text-info 面向过程语言：
                font 强调用计算机能够理解的逻辑来描述解决问题的方法和步骤，不仅要说明做什么，还要说明如何做。
                font.text-muted 过分强调求解过程的描述，难以重复使用（如BASIC语言和C语言等）。
            p
                font.tetx-info 面向对象语言：
                font 能够直接描述客观世界的事物，将一切事物都看成具有属性华为行为的对象。通过抽象找出同一类对象的共同属性和行为，并抽象成类。
                font.text-success 通过类的继承实现代码的重用，编程的效率高（如JAVA、C++等）。
            p 任何一种高级语言或汇编语言编写的程序（称为源程序），都不能由计算机直接执行，必须通过相应的编译程序翻译成及其语言程序（称为目标语言）后才能执行，或者通过解释程序边解释边执行。不同的语言所对应的语言处理程序也是不同的。
            p
                font.text-info 应用软件
                font 是指除了系统软件以外的所有软件，它是用户利用计算机及其提供的系统软件为解决各种实际问题而编制的计算机程序。
            ul 应用软件可分为以下两种：
                li
                    font.text-info 用户程序：
                    font 指用户为了解决自己特定的具体问题而开发的软件，在系统软件和应用软件包的支持下开发。
                li
                    font.text-info 应用软件包：
                    font 指为实现某种特殊功能或特殊计算，经过精心设计的独立软件系统，可以满足同类应用许多用户需要的软件。
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
