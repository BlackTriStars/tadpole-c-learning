<template>
    <div class="test-answer">
        <myTab :currentName="'choose'">
            <myTabPane :name="'choose'" :label="'选择题'">
                <div class="choose">
                    <p class=total>选择题总共 <span>{{answer.choose.total}}道题目(总分值{{answer.choose.totalScore}}分)</span></p>
                    <div class="rightorwrong">
                        <div class="right">
                            <p>正确答题</p>
                            <p>{{answer.choose.right}}题</p>
                        </div>
                        <div class="wrong">
                            <p>错误答题</p>
                            <p>{{answer.choose.false}}题</p>
                        </div>
                    </div>
                    <div class="answers">
                        <p class="tips">
                            <span><i></i> 正确答案</span>
                            <span><i></i> 错误答案</span>
                        </p>
                        <ul>
                            <li v-for="(choose,index) in answer.choose.questions" :key="index" :class="{wrong: choose.yourChoice !== choose.rightChoice}" @click="activeIndex = index">
                                {{index}}{{choose.yourChoice}}
                            </li>
                        </ul>
                    </div>
                    <div class="danxuan">
                        <h3>单选题</h3>
                    </div>
                    <div class="question" v-for="(question,i) in answer.choose.questions" :key="i" v-show="activeIndex == i">
                        <p><i>{{i + 1}}:</i> {{question.title}}</p>
                        <div v-for="(value, key) in question.choose" :key="key"><i>{{key}}</i>{{value}}</div>
                    </div>
                </div>
            </myTabPane>    
            <myTabPane :name="'quiz'" :label="'问答题'"></myTabPane>    
            <myTabPane :name="'judge'" :label="'判断题'"></myTabPane>    
        </myTab> 
    </div>
</template>
<script>
import myTab from '@/components/common/tab/tab'
import myTabPane from '@/components/common/tab/tabPane'
export default {
    components: {myTab, myTabPane},
    data () {
        return {
            activeIndex: 0,
            answer: {
                choose: {
                    total: 4,
                    totalScore: 16,
                    right: 2,
                    false: 2,
                    questions: [
                        {
                            title: '八月十五日是什么节日？',
                            choose: {
                                A: '国庆节',
                                B: '春节',
                                C: '清明节',
                                D: '中秋节'
                            },
                            yourChoice: 'A',
                            rightChoice: 'D'
                        },
                        {
                            title: '八月十五日是什么节日？',
                            choose: {
                                A: '国庆节',
                                B: '春节',
                                C: '清明节',
                                D: '中秋节'
                            },
                            yourChoice: 'A',
                            rightChoice: 'D'
                        },
                        {
                            title: '八月十五日是什么节日？',
                            choose: {
                                A: '国庆节',
                                B: '春节',
                                C: '清明节',
                                D: '中秋节'
                            },
                            yourChoice: 'D',
                            rightChoice: 'D'
                        },
                        {
                            title: '八月十五日是什么节日？',
                            choose: {
                                A: '国庆节',
                                B: '春节',
                                C: '清明节',
                                D: '中秋节'
                            },
                            yourChoice: 'D',
                            rightChoice: 'D'
                        }
                    ]
                },
                quiz: {

                },
                judge: {

                }
            }
        }
    }
}
</script>
<style lang="less">
    .test-answer {
        height:  100%;
        .choose {
            width: 100%;
            .total {
                padding: 0 4%;
                line-height:  100px;
                border-bottom: 1px solid #ccc;
                height: 100px;
                text-align: left;
                font-size: 30px;
                font-weight: 700;   
                span {
                    float: right;
                }   
            }
            .rightorwrong {
                height: 180px;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                div {
                    width: 50%;
                    font-size: 30px;
                    font-weight: 700;
                }
                .right p:last-child {
                    color: blue;
                }
                .wrong p:last-child {
                    color: red;
                }
            }
            .answers {
                padding-top: 20px;
                .tips {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        width:  50%;
                        font-size: 28px;
                        i {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            border: 1px solid red;
                        }
                    }
                    span:first-child i{
                        border: 1px solid blue;
                    }
                }
                ul {
                    margin-top:  20px;
                    padding: 0 2% 20px;
                    overflow: hidden;
                    border-bottom: 1px solid #ccc;
                }
                li {
                    float: left;
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                    display: inline-block;
                    border: 1px solid blue;
                    line-height: 100px;
                }
                li.wrong {
                    border: 1px solid red;
                }
            }
        }
        h3 {
            padding: 10px 20px;
            color: #fff;
            background-color: #00bcd4;
            border-radius: 5px;
            display: inline-block;
            float: left;
            margin-left: 20px;
        }
        .danxuan {
            margin-top: 10px;
            overflow: hidden;
        }
        .question {
            text-align: left;
            color: #888;
            padding:  20px;
            font-size: 28px;
        }
        .question>div {
            padding: 10px;
            i {
                display: inline-block;
                color: #fff;
                background-color: #888;
                border-radius: 50%;
                width: 40px;
                height:  40px;
                line-height: 40px;
                text-align: center;
                margin-right: 20px;
            }
        }
    }
</style>


