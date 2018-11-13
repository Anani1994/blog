<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="引言"
                    content="情景概要"
                    status="wait"
                    @click.native="toTop('#git-issue-01', 30)">
                </Step>
                <Step
                    title="原因"
                    content="可能产生该问题的原因"
                    status="wait"
                    @click.native="toTop('#git-issue-02', 30)">
                </Step>
                <Step
                    title="解决方案"
                    content="解决方案"
                    status="wait">
                    <steps direction="vertical">
                        <Step
                            title="方案一"
                            content="重新储存"
                            status="wait"
                            @click.native.stop="toTop('#git-issue-031', 30)">
                        </Step>
                        <Step
                            title="方案二"
                            content="删除已经存在的文件"
                            status="wait"
                            @click.native.stop="toTop('#git-issue-032', 30)">
                        </Step>
                    </steps>
                </Step>
                <Step
                    title="总结"
                    content="概括本篇内容"
                    status="wait"
                    @click.native="toTop('#git-issue-04', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> How to fix "Could not restore untracked files from stash" issue</h1>
                <p class="pt-1">分析解决如题所示问题的原因和解决方法</p>
            </div>
            <h3 id="git-issue-01" class="ml-1"><Icon type="logo-buffer" /> 引言</h3>
            <Divider />
            <p>我们知道在一个分支上使用 <code>Git</code> 储藏后的内容可以把它用在任意一个分支上，而并不仅仅只是在它产生的分支上使用，这使得我们使用分支进行开发变得更加有利。</p>
            <p>在一个分支上保存一个储藏，切换到另一个分支，然后尝试重新应用这些修改。 当应用储藏时工作目录中也可以有修改与未提交的文件（如果有任何东西不能干净地应用，Git 会产生合并冲突）。</p>
            <p>本次出现错误提示的情景正是在一个分支上工作后储存了未提交的修改，后面在新的分支上使用此次储存时报错：<code>&lt;something&gt; already exists, no checkoutCould not restore untracked files from stash entry.</code></p>
            <h3 id="git-issue-02" class="ml-1"><Icon type="logo-buffer" /> 原因</h3>
            <Divider />
            <ul class="ml-2">如果在将要使用提取储存的分支上的工作区已经存在了存储里携带的未被跟踪的文件时，就会报如题所示的错误。储存中包含未跟踪文件的方式有以下两种：
                <li>错误的使用了命令：<code>git stash -a</code>，其中的关键点就是 <code>-a</code> 这个参数，添加这个参数后会将 .gitignore 忽略的文件放入此次储存中。</li>
                <li>错误的使用了命令：<code>git stash --include-untracked</code>，其中的关键点就是 <code>--include-untracked</code> 这个参数，添加这个参数后会将未被跟踪的文件放到此次储存中。</li>
            </ul>
            <h3 id="git-issue-031" class="ml-1 mt-1"><Icon type="logo-buffer" /> 方案一</h3>
            <Divider />
            <pre v-highlight class="ml-2"><code class="js">// 第一步 找到所有提交记录
git log --graph --all --decorate --oneline

// 第二步 跳转到使用 git stash 的版本 &lt;commit id&gt;
git checkout &lt;commit id&gt;

// 第三步 回到版本提交前
git reset HEAD~1

// 第四步 重新使用正确的储存命令
git stash -u

// 第五步 使用正确的储存
git stash apply</code></pre>
            <h3 id="git-issue-032" class="ml-1"><Icon type="logo-buffer" /> 方案二</h3>
            <Divider />
            <p>因为将要删除的是未被跟踪的文件，所以此方式属于危险操作，从工作目录中移除未被追踪的文件，有可能将再也找不回来。</p>
            <p>此方式的核心思想就是将报错里提示已经存在的文件从工作目录种删除，从而解决问题，删除的手法可以手动直接在文件目录里删除（推荐剪切相应的文件作为备份）。</p>
            <p>另外更安全的做法是移除每一样东西并存放在栈中：<code>git stash --all</code>，不过这样储存里又会存在未被跟踪的文件，好在我们只是用作备份。</p>
            <p>当然，在 <code>Git</code> 里也为我们提供了清除工作区的方法，它大概就像这样：</p>
            <pre v-highlight class="ml-2"><code class="js">// 只移除没有忽略的未跟踪文件
git clean

// 移除工作目录中所有未追踪的文件以及空的子目录。 -f 意味着 强制 或 确定移除
git clean -f -d

// 任何与 .gitiignore 或其他忽略文件中的模式匹配的文件都不会被移除。
// 如果你也想要移除那些文件，可以给 clean 命令增加一个 -x 选项
git clean -f -d -x</code></pre>
            <h3 id="git-issue-04" class="ml-1"><Icon type="logo-buffer" /> 总结</h3>
            <Divider />
            <p>在已经存在未被跟踪文件（包括普通未跟踪和 .gitignore 种匹配的文件）的分支上使用再现储存，如果使用的此次储存中又包含了以上的文件，那么就会报错。</p>
            <p>解决这个错误的主要思想就是让其中一方丢弃共用的未跟踪文件。</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
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
