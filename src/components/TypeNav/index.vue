<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex()" @mouseenter="isShow = true">
                <h2 class="all">全部商品分类</h2>
                <div class="sort" @click="goSerach" v-show="isShow">
                    <div class="all-sort-list2">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                            :class="{ cur: index === currentIndex }">
                            <h3 @mouseenter="changeIndex(index)">
                                <a :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                            </h3>
                            <!-- 二三级分类 -->
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dt>
                                            <a :data-category2Id="c1.categoryId">{{ c2.categoryName }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-category3Id="c1.categoryId">{{ c3.categoryName }}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle';
export default {
    name: "TypeNav",
    data() {
        return {
            currentIndex: -1,
            isShow: true,
        }
    },
    methods: {
        // 鼠标移入
        // 将currentIndex更改为当前的index
        changeIndex: throttle(function (index) {
            this.currentIndex = index;
        }, 50),
        // 鼠标移出
        leaveIndex() {
            this.currentIndex = -1;
            // 搜索页面鼠标移除需要隐藏列表
            if (this.$route.path === '/search') {
                this.isShow = false;
            }
        },
        // 利用事件委托+编程式导航实现
        goSerach($event) {
            // 获取事件触发元素标签name
            let element = $event.target;
            console.log(element.nodeName);
            // 不是A标签触发直接返回
            if (element.nodeName != 'A') return;
            // 获取id
            let { category1id, category2id, category3id } = element.dataset;
            let location = { name: 'search' };
            let query = { categoryName: element.innerText };
            if (category1id) {
                query.category1Id = category1id;
            } else if (category2id) {
                query.category2Id = category2id;
            } else if (category3id) {
                query.category3Id = category3id;
            }
            location.query = query;
            // 合并参数  可能搜索框有parmas
            if (this.$route.params) {
                location.params = this.$route.params;
            }
            this.$router.push(location);
        }
    },
    mounted() {
        // 搜索页面不展示
        if (this.$route.path === '/search') {
            this.isShow = false;
        }

    },
    computed: {
        ...mapState('home', ['categoryList'])
    }
};
</script>

<style lang="less" scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            display: block;
                        }


                    }
                }
            }
        }

        .cur {
            background-color: skyblue;
        }
    }
}
</style>