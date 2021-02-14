<template>
    <div class="container">
        <div class="content">
            <div class="content-top">
                <div class="languages">中文（简体）</div>
                <div class="transform">
                    <img src="../assets/images/switch.png">
                </div>
                <div class="languages">英语</div>
                <button @click="doTranslate">翻译</button>
            </div>
            <div class="main">
                <el-input
                    class="text-input"
                    type="textarea"
                    :autosize="{ minRows: 6}"
                    placeholder="请输入内容"
                    v-model="textInput">
                </el-input>
                <div class="result"></div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Translate",
		data () {
			return {
				textInput: ""
			}
		},
		methods: {
			doTranslate () {
				alert (this.textInput)
			}
		}
	}
</script>

<style lang="scss" scoped>

    .container {
        width: 100%;
        margin-top: 54px;
        background: #F9F9F9;

        .content {
            width: 1200px;
            min-height: 600px;
            margin: 0 auto;
            padding: 20px 0;

            .content-top {
                width: 500px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

                .languages {
                    width: 140px;
                    text-align: center;
                    font-size: 14px;
                    padding: 4px 0px;
                    border-radius: 4px;
                    background: #fff;
                    border: 1px solid #999;
                }

                .transform {
                    width: 50px;
                    text-align: center;
                    cursor: pointer;

                    img {
                        width: 25px;
                    }
                }

                button {
                    padding: 4px 40px;
                    border-radius: 4px;
                    border: none;
                    background: #4395ff;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                }

                button:hover {
                    background: rgb(52, 133, 251);
                }
            }

            .main {
                display: flex;
                width: 100%;
                margin-top: 20px;

                .text-input {
                    width: 50%;
                    min-height: 140px;
                    background: #fff;

                    textarea {
                        width: 100%;
                        font-size: 18px;
                        border: none;
                    }
                }

                .result {
                    width: 50%;
                    min-height: 140px;
                    border: 1px solid #eee;
                    border-left: 0;
                    background: #f0f0f0;

                }
            }
        }
    }
</style>