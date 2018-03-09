<template>
  <div id="app">
    <div id="main">
      <header>
        <a href="https://www.dinghyu.com/shanyin/table.html">题1:数组</a>
        <a href="https://www.dinghyu.com/shanyin/select_jQuery.html">题2:select-jQuery</a>
        <a href="https://www.dinghyu.com/shanyin/select_vue.html">题2:select-vue</a>
        <a href="https://s1.ax2x.com/2018/03/08/Ch7nK.png">题目IMG</a>
      </header>

      <div class="answer">
        <select class="form-control" v-model="oSelected.selectA">
          <option v-for="item in aOptionA"  :value="item.val">{{ item.name }}</option>
        </select>

        <select class="form-control" v-model="oSelected.selectB">
          <option v-for="item in aOptionB"  :value="item.val">{{ item.name }}</option>
        </select>

        <select class="form-control" v-model="oSelected.selectC">
          <option v-for="item in aOptionC"  :value="item.val">{{ item.name }}</option>
        </select>
      </div>

      <section class="code">
        <h1>code</h1>
        <div class="note-view _3Hc8o"><pre><code class="hljs javascript">    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      <span class="hljs-attr">name</span>: <span class="hljs-string">'App'</span>,
      data () {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">aDefaultOption</span> :[
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'请选择'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">-1</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'1'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">1</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'2'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">2</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'3'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">3</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'4'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">4</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'5'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">5</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'6'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">6</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'7'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">7</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'8'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">8</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'9'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">9</span>},
            {<span class="hljs-attr">name</span> : <span class="hljs-string">'10'</span>, <span class="hljs-attr">val</span> : <span class="hljs-number">10</span>},
          ],
          <span class="hljs-attr">aOptionA</span> : [],
          <span class="hljs-attr">aOptionB</span> : [],
          <span class="hljs-attr">aOptionC</span> : [],
          <span class="hljs-attr">oSelected</span> : {
            <span class="hljs-attr">selectA</span> : <span class="hljs-number">-1</span>,
            <span class="hljs-attr">selectB</span> : <span class="hljs-number">-1</span>,
            <span class="hljs-attr">selectC</span> : <span class="hljs-number">-1</span>
          }
        }
      },
      <span class="hljs-attr">methods</span> : {
        <span class="hljs-attr">fnSelectChange</span> : <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
          <span class="hljs-keyword">this</span>.aOptionA = [];
          <span class="hljs-keyword">this</span>.aOptionB = [];
          <span class="hljs-keyword">this</span>.aOptionC = [];

          <span class="hljs-keyword">this</span>.aDefaultOption.forEach(<span class="hljs-function">(<span class="hljs-params">ele, index</span>) =&gt;</span> {
            <span class="hljs-keyword">var</span> id = <span class="hljs-keyword">this</span>.fnContrastSelected(index);
            <span class="hljs-keyword">if</span> (id) {
              <span class="hljs-keyword">switch</span> (id) {
                <span class="hljs-keyword">case</span> <span class="hljs-string">'selectA'</span> : <span class="hljs-keyword">this</span>.aOptionA.push(ele);
                  <span class="hljs-keyword">break</span>
                <span class="hljs-keyword">case</span> <span class="hljs-string">'selectB'</span> : <span class="hljs-keyword">this</span>.aOptionB.push(ele);
                  <span class="hljs-keyword">break</span>
                <span class="hljs-keyword">case</span> <span class="hljs-string">'selectC'</span> : <span class="hljs-keyword">this</span>.aOptionC.push(ele);
                  <span class="hljs-keyword">break</span>
              }
            } <span class="hljs-keyword">else</span> {
              <span class="hljs-keyword">this</span>.aOptionA.push(ele);
              <span class="hljs-keyword">this</span>.aOptionB.push(ele);
              <span class="hljs-keyword">this</span>.aOptionC.push(ele);
            }
          });
        },
        <span class="hljs-attr">fnContrastSelected</span> : <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">index</span>) </span>{
          <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> <span class="hljs-keyword">this</span>.oSelected) {
            <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.oSelected[key] === index) {
              <span class="hljs-keyword">return</span> key
            }
          }
          <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
        }
      },
      <span class="hljs-attr">watch</span> : {
        [<span class="hljs-string">'oSelected.selectA'</span>] () {
          <span class="hljs-keyword">this</span>.fnSelectChange()
        },
        [<span class="hljs-string">'oSelected.selectB'</span>] () {
          <span class="hljs-keyword">this</span>.fnSelectChange()
        },
        [<span class="hljs-string">'oSelected.selectC'</span>] () {
          <span class="hljs-keyword">this</span>.fnSelectChange()
        }
      },
      <span class="hljs-attr">mounted</span> : <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">this</span>.aOptionA = <span class="hljs-keyword">this</span>.aDefaultOption;
        <span class="hljs-keyword">this</span>.aOptionB = <span class="hljs-keyword">this</span>.aDefaultOption;
        <span class="hljs-keyword">this</span>.aOptionC = <span class="hljs-keyword">this</span>.aDefaultOption;
      }
    }</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      aDefaultOption :[
        {name : '请选择', val : -1},
        {name : '1', val : 1},
        {name : '2', val : 2},
        {name : '3', val : 3},
        {name : '4', val : 4},
        {name : '5', val : 5},
        {name : '6', val : 6},
        {name : '7', val : 7},
        {name : '8', val : 8},
        {name : '9', val : 9},
        {name : '10', val : 10},
      ],
      aOptionA : [],
      aOptionB : [],
      aOptionC : [],
      oSelected : {
        selectA : -1,
        selectB : -1,
        selectC : -1
      }
    }
  },
  methods : {
    fnSelectChange : function () {
      this.aOptionA = [];
      this.aOptionB = [];
      this.aOptionC = [];

      this.aDefaultOption.forEach((ele, index) => {
        var id = this.fnContrastSelected(index);
        if (id) {
          switch (id) {
            case 'selectA' : this.aOptionA.push(ele);
              break
            case 'selectB' : this.aOptionB.push(ele);
              break
            case 'selectC' : this.aOptionC.push(ele);
              break
          }
        } else {
          this.aOptionA.push(ele);
          this.aOptionB.push(ele);
          this.aOptionC.push(ele);
        }
      });
    },
    fnContrastSelected : function (index) {
      for (var key in this.oSelected) {
        if (this.oSelected[key] === index) {
          return key
        }
      }
      return false
    }
  },
  watch : {
    ['oSelected.selectA'] () {
      this.fnSelectChange()
    },
    ['oSelected.selectB'] () {
      this.fnSelectChange()
    },
    ['oSelected.selectC'] () {
      this.fnSelectChange()
    }
  },
  mounted : function () {
    this.aOptionA = this.aDefaultOption;
    this.aOptionB = this.aDefaultOption;
    this.aOptionC = this.aDefaultOption;
  }
}
</script>

<style>
  body, html {
    padding: 0;
    margin: 0;
  }

  #main {
    overflow: hidden;
    padding: 10px;
  }

  .answer {
    width: 600px;
    margin: 0 auto;
  }

  .answer select {
    width: 180px;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }

  .btn {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 4px;
  }

  ._3Hc8o {
    width: 100%;
    word-wrap: break-word;
    color: inherit;
  }

  pre {
    word-wrap: normal;
    word-break: break-all;
    white-space: pre;
    overflow: auto;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    line-height: 20px;
    background-color: #f2f2f2;
  }

  code {
    padding: 0;
    background-color: transparent;
    white-space: pre;
    border: none;
    color: #657b83;
    font-size: 12px;
    display: block;
    overflow-x: auto;
  }
</style>
