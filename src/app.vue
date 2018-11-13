<template>
  <div class="app-container" :style="{background: allBgColor}">
    <Menu mode="horizontal" :active-name="this.activeName">
      <div class="float-left px-1 text-white">
        <Icon type="android-globe"></Icon>
        码良的博客
      </div>
      <MenuItem class="float-right" name="github" @click.native="window.location.href='https://github.com/Anani1994'">
          <Icon type="logo-github" />
          Github
      </MenuItem>
      <MenuItem class="float-right" name="cnblogs" @click.native="window.location.href='http://www.cnblogs.com/anani/'">
        <Icon type="ios-planet-outline" />
        博客园
      </MenuItem>
      <Submenu class="float-right" name="projects">
        <template slot="title">
          <Icon type="ios-folder-outline" />
          项目演示
        </template>
        <MenuItem name="vue-market" @click.native="window.location.href='http://anani.coding.me/blog/blog/projects/vue-market/index.html#/login'">
          <Icon type="md-appstore" />
          购物商城
        </MenuItem>
        <MenuItem name="vue-market" @click.native="window.location.href='https://anani1994.github.io/anani1994.github.io/blog/projects/old-blog/index.html'">
          <Icon type="md-alert" />
          前往旧博客
        </MenuItem>
      </Submenu>
      <MenuItem class="float-right" name="articles" @click.native="toPage('field')">
        <Icon type="ios-book-outline"></Icon>
        博文
      </MenuItem>
      <MenuItem class="float-right" name="main" @click.native="toPage('index')">
        <Icon type="ios-home-outline" />
        首页
      </MenuItem>
    </Menu>
    <router-view></router-view>
    <template v-if="showSearch">
      <div class="search-container">
        <div class="search-content">
          <Input
            size="large"
            clearable
            @on-focus="hideSearchResult"
            v-model="searchValue">
            <Select v-model="searchType" slot="prepend" style="width: 100px" @on-change="hideSearchResult">
              <Option value="git">Git 命令</Option>
              <Option value="dos">Dos 命令</Option>
              <Option value="vim">Vim 命令</Option>
              <Option value="linux">Linux 命令</Option>
            </Select>
          </Input>
          <div class="search-result-container">
            <template v-if="!toShowThisResult">
              <ul class="search-result">
                <li class="result-list" v-for="item in filteredGitCommandsInfo" :key="item.id">
                  <pre class="custom-pre" @click="showSearchResult(item)">{{item.command}}</pre> {{item.detail}}
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="search-result">
                <router-view name="search"></router-view>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
    <div class="bottom">
      Created in 2018<span class="border-right">
      </span>网站开发者：<a class="text-white" href="">码良</a>
      <span class="border-right"></span>
      <span class="time"></span>
    </div>
  </div>
</template>

<script>
import gitCommandsInfo from './data/git-command.js';
import dosCommandsInfo from './data/dos-command.js';
import linuxCommandsInfo from './data/linux-command.js';
import vimCommandsInfo from './data/vim-command.js';
import util from './libs/util.js';
export default {
  data() {
    return {
      toPage: util.toPage,
      window,
      showSearch: false,
      searchValue: '',
      searchType: 'git',
      toShowThisResult: false
    }
  },
  methods: {
    showSearchResult(item) {
      this.toShowThisResult = true;
      this.toPage(item.pathName);
    },
    hideSearchResult() {
      if (this.toShowThisResult) {
        this.toShowThisResult = false;
      }
    },
    // 匹配 command 和 detail 属性
    filterData(str, arr) {
      let result = arr;
      let data = [];
      let filterArr = str.split(" ");
      result.forEach((item1) => {
        let detailContinue = filterArr.every((item2) => {
          return item1.detail.includes(item2);
        });
        let commandContinue = filterArr.every((item2) => {
          return item1.command.includes(item2);
        });
        if (detailContinue || commandContinue) {
          data.push(item1);
        }
      });
      return data;
    }
  },
  computed: {
    activeName() {
      return this.$store.state.activeName;
    },
    allBgColor() {
      return this.$store.state.allBgColor;
    },
    // 通过选择的搜索类型设置用于过滤的数据源
    filteredGitCommandsInfo() {
      let data = '';
      if (this.searchType === 'git') {
        data = this.filterData(this.searchValue, gitCommandsInfo);
      } else if (this.searchType === 'dos') {
        data = this.filterData(this.searchValue, dosCommandsInfo);
      } else if (this.searchType === 'vim') {
        data = this.filterData(this.searchValue, vimCommandsInfo);
      } else {
        data = this.filterData(this.searchValue, linuxCommandsInfo);
      }
      return data;
    }
  },
  mounted() {
    setInterval(() => { let result = this.$util.formatDate();document.querySelector('.time').innerHTML = result; },1000);
    if (localStorage.defaultAllBgColor) {
      this.$store.commit('setAllBgColor',localStorage.defaultAllBgColor);
    }
    if (localStorage.defaultBowenBgColor) {
      this.$store.commit('setBowenBgColor',localStorage.defaultBowenBgColor);
    }
    if (localStorage.defaultBgColor) {
      this.$store.commit('setBgColor',localStorage.defaultBgColor);
    } else {
      if (localStorage.defaultBgColor !== '') {
        this.$store.commit('setBgColor','rgba(35,36,31,.8)');
      }
    }
  },
  created() {
    document.onkeyup = (event) => {
      if (event.ctrlKey && 32 === event.keyCode) {
        if (!this.showSearch) {
          this.showSearch = !this.showSearch;
        }
      }
      if (27 === event.keyCode) {
        if (this.showSearch) {
          this.$Modal.remove();
          this.showSearch = !this.showSearch;
        }
      }
    }
  }
}
</script>

<style lang=less>
html,body {
  width: 100%;
  height: 100%;
}
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.5)),url('./assets/images/app-bg-img.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  ul {
    background-color: transparent;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .border-right {
    margin: 0 1rem;
    height: 2rem;
    border-right: 1px solid #fff;
  }
  .search-container {
    z-index: 999;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.5);
  }
  .search-content {
    width: 60%;
    height: 100%;
    margin: 90px auto 0;
    .search-result-container {
        overflow: hidden;
        padding-top: 15px;
        width: 100%;
        height: calc(100% - 157px);
      .search-result {
        overflow-x: hidden;
        overflow-y: scroll;
        width: calc(100% + 17px);
        height: 100%;
        li.result-list {
          overflow-x: auto;
          margin-bottom: 5px;
          list-style-type: none;
          &:hover {
            background-color: #030303;
          }
          pre:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
