<template>
    <div class="container">
        <div class="content">
            <div class="content-top">
                <div class="latest"></div>
                <div class="recommend"></div>
            </div>
            <div class="article-list">
                <div class="article" v-for="item in 10" :key="item">
                    <div class="pic"></div>
                    <div class="main">
                        <div class="type">News</div>
                        <div class="title">我是标题</div>
                        <div class="desc">我是描述</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Article"
	}
</script>

<style lang="scss" scoped>
.container{
    position: relative;
    width: 100%;
    padding-top: 54px;

    .content{
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
        .content-top{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 400px;

            .latest{
                width: 60%;
                background: red;
            }
            .recommend{
                position: fixed;
                top: 74px;
                right: 40px;
                width: 36%;
                height: 400px;
                background: burlywood;
            }
        }
        .article-list{
            width: 60%;
            .article{
                width: 100%;
                height: 150px;
                display: flex;
                align-items: center;
                .pic{
                    width: 220px;
                    height: 120px;
                    margin-right: 20px;
                    background: #4395ff;
                }
                .main{
                    flex: 1;
                    height: 120px;
                    background: blue;
                }
            }
        }
    }
}
</style>