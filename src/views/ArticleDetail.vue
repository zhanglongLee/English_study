<template>
  <div class="article-container">
    <div class="article-content">
      <div class="article-detail contentAear content-mb">
        <div v-loading="loading" class="article-detail-left">
          <div class="title">{{ detailData.title }}</div>
          <div class="publish">
            <span v-if="detailData.happendate" class="date">{{
              detailData.happendate
            }}</span>
            <span class="publisher">{{ detailData.authorstr }}</span>
          </div>
          <div class="line"></div>
          <div class="content">
            <!-- <div v-if="detailData.pic" class="content-img">
              <img :src="detailData.pic" alt="" />
            </div> -->
            <!-- <div v-if="detailData.pic" class="img-info">
              文、图/本刊记者 {{ detailData.authorstr }}
            </div> -->
            <div class="content-text" v-html="detailData.html"></div>
          </div>
          <div class="back-to-prev-page">
            <img src="../assets/images/article/prev.png" alt="" />
            <span @click="backToPrev">返回上一页</span>
          </div>

          <div class="comment">
            <comment
              comment-width="100%"
              :comment-list="commentList"
              :comment-num="commentNum"
              :label="label"
              :avatar="avatar"
              :placeholder="placeholder"
              :min-rows="minRows"
              :max-rows="maxRows"
              @doSend="doSend($event)"
              @doChidSend="doChidSend(arguments)"
            />
          </div>
          <div class="related-articles">
            <div class="item-header">
              <div class="line"></div>
              <div class="item-title">相关文章</div>
            </div>
            <div
              v-for="item in detailData.relevantnews"
              :key="item.id"
              class="related-articles-item"
            >
              <div class="item-info">
                <div class="title ellipsis" @click="toOtherDetail(item.id)">
                  {{ item.title }}
                </div>
                <div class="brief">{{ item.content.substr(0, 100) }}…</div>
                <div class="date">{{ item.happendate.split(" ")[0] }}</div>
              </div>
              <div v-if="item.pic" class="item-img">
                <img :src="item.pic" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="article-detail-right">
          <hot-recommend />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotRecommend from '../components/common/HotRecommend'
import comment from '@/components/common/comment/Comment'
export default {
  name: 'ArticleDetail',
  components: {
    HotRecommend,
    comment
  },
  data() {
    return {
      detailData: [],
      loading: true,
      label: '博主',
      placeholder: '说点什么吧',
      minRows: 4,
      maxRows: 4,
      commentNum: 2,
      avatar: require('@/components/common/comment/img/icon/avtar.png'),
      commentList: [
        {
          id: 1,
          commentUser: {
            id: 1,
            nickName: '小胖',
            avatar: require('@/components/common/comment/img/icon/xiaopang.jpg')
          },
          content: '小肥同学你好呀[太开心][太开心]~',
          createDate: '2019-9-23 17:36:02',
          childrenList: [
            {
              id: 2,
              commentUser: {
                id: 2,
                nickName: '小肥',
                avatar: require('@/components/common/comment/img/icon/xiaofei.jpg')
              },
              targetUser: {
                id: 1,
                nickName: '小胖',
                avatar: require('@/components/common/comment/img/icon/xiaopang.jpg')
              },
              content: '小胖你好呀[太开心][太开心]~很高兴认识你',
              createDate: '2019-9-23 17:45:26'
            }
          ]
        }
      ]

    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        this.getNewsDetails()
      }
    }
  },
  created() {
    this.getNewsDetails()
  },
  methods: {
    getNewsDetails() {
      this.loading = true
      // const postObj = { id: this.$route.params.id }
      // if (!postObj.id) {
      //   return
      // }
      // this.$Post(
      //   'News/NewsData/getNewsDetails',
      //   { data: postObj },
      //   res => {
      //     console.log('新闻详情', res)
      //     const vdata = res.data
      //     this.detailData = vdata
      //     this.loading = false
      //   },
      //   err => {
      //     this.$alertShow(err.msg)
      //   },
      //   true
      // )
      const res = {
        status: true,
        data: {
          id: '2039',
          title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
          views: '94',
          istop: '1',
          isexcellent: '0',
          istopic: '0',
          happendate: 'Tue., March 16, 2021, 5:15 a.m',
          status: '1001002',
          pic:
            'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
          html:`<div class="caas-body">
<figure class="caas-figure">
<div class="caas-figure-with-pb">
<div>
<div class="caas-img-container"><img class="caas-img has-preview caas-loaded" src="https://s.yimg.com/ny/api/res/1.2/4KmF00KWVkGOJ2ylyAxB0g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MC4wNjIzMjk1Njc1ODg3O2NmPXdlYnA-/https://s.yimg.com/uu/api/res/1.2/ePnygq8htx69okVjEK.xtA--~B/aD0zNDIzO3c9NTEzNDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_635/d7f54bfeb8831085f14c83f3a82d7369" alt=" (AP)" /></div>
</div>
</div>
<div class="caption-wrapper caption-aligned-with-image">
<div class="caption-wrapper caption-aligned-with-image">&nbsp;</div>
</div>
<figcaption class="caption-collapse" data-id="m-0">(AP)</figcaption>
</figure>
<p>Among the items on&nbsp;<a class="link rapid-noclick-resp" href="https://www.independent.co.uk/topic/texas" target="_blank" rel="nofollow noopener" data-ylk="slk:Texas" data-rapid_p="6" data-v9y="1">Texas</a>&nbsp;governor&nbsp;<a class="link rapid-noclick-resp" href="https://www.independent.co.uk/topic/greg-abbott" target="_blank" rel="nofollow noopener" data-ylk="slk:Greg Abbott" data-rapid_p="7" data-v9y="1">Greg Abbott</a>&rsquo;s list of emergency priorities in 2021: &ldquo;election integrity&rdquo;.</p>
<p>The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.</p>
<p>Republican lawmakers in Texas have filed more than two dozen bills aimed at restricting voting in a state that already has some of the most restrictive voting laws in the country, which voting rights groups say disproportionately threaten and suppress votes from Black voters.</p>
<p>Governor Abbott said on Monday that the bills are aimed at restoring &ldquo;trust and confidence in the outcome&rdquo; of the state&rsquo;s elections, although he also admitted that he is not aware of any elections altered by fraud.</p>
<p>Texas is among 43 states where Republican lawmakers have introduced more than 250 bills restricting voting rights, limiting ballot access or adding barriers to voting. GOP lawmakers have said the bills aim to restore &ldquo;trust&rdquo; in elections, compelled by baseless claims of election fraud promoted by former president Donald Trump.</p>
<p>Voting rights advocates and civil rights groups have argued that the former president&rsquo;s persistent lie that the election was stolen from him, and his legal team&rsquo;s attempts to overturn millions of Americans&rsquo; votes, has emboldened Republican state lawmakers across the US to do what Mr Trump and his attorneys could not, using &ldquo;election integrity&rdquo; or &ldquo;election safety&rdquo; to mask Mr Trump&rsquo;s claims at the heart of their objections.</p>
<p>Election officials across the country &ndash; as well as the former president&rsquo;s own attorneys, Justice Department and a federal elections commission, which he disbanded &ndash; have failed to produce any evidence that such widespread fraud exists.</p>
<p>&ldquo;Right now, I don&rsquo;t know how many, or if any, elections in the state of Texas in 2020 were altered because of voter fraud,&rdquo; Governor Abbott said on Monday.</p>
<p>A day earlier, the governor accused Democratic lawmakers in Congress of &ldquo;trying to institutionalise voter fraud&rdquo; in the US with the&nbsp;<a class="link rapid-noclick-resp" href="https://www.independent.co.uk/news/world/americas/us-politics/for-the-people-act-democrats-b1812180.html" target="_blank" rel="nofollow noopener" data-ylk="slk:passage of HR 1, or the For The People Act" data-rapid_p="12" data-v9y="1">passage of HR 1, or the For The People Act</a>, which would enshrine into federal law some voting access efforts already in place in several states, including automatic voter registration and same-day registration and expanded mail-in voting.</p>
<p>&ldquo;Everyone knows, including Democrats in Texas &hellip; that one of the easiest ways to cheat in elections is through these mail-in ballots,&rdquo; he said, without providing any evidence.</p>
<p>Texas Attorney General Ken Paxton&rsquo;s office has spent 22,000 hours looking for voter fraud and uncovered just 16 cases of voter registration forms that contained false addresses, according to&nbsp;<em>The Houston Chronicle</em>. Texas &ndash; the second-most populous state in the US &ndash; has more than 16 million registered voters. The office has discovered 100 voter fraud cases since 2005.</p>
<p>GOP-sponsored bills in Texas would purge voter rolls, add more layers to voter ID laws, shrink mail-in voting periods, and shutter early voting and mail-in voting sites.</p>
<p>One proposal would eliminate the use of tents and other structures for drive-through early voting, which was used in several large Texas counties to accommodate mail-in ballot drop-offs to ensure ballots were delivered on time amid a pandemic with a beleaguered US Postal Service that saw widespread delays and service cuts.</p>
<p>Harris County, one of the largest counties in the US, had 12 satellite offices, covering the greater Houston area. The county covers more than 1,700 square miles, with more than 2.4 million registered voters.</p>
<div class="twitter-tweet-wrapper">
<blockquote class="twitter-tweet caas-loaded" data-theme="light">
<div class="caas-card-loader small fixed-height">&nbsp;</div>
<p>Voter suppression has a nefarious and dark history in Texas, one that shouldn't be seen as clearly in our election laws as it is today.<br /><br />We are more than overdue for common sense reforms like enacting online voter registration in Texas. Let's make it happen this session.&nbsp;<a class="link rapid-noclick-resp" href="https://twitter.com/hashtag/txlege?src=hash&amp;ref_src=twsrc%5Etfw" target="_blank" rel="nofollow noopener" data-ylk="slk:#txlege" data-rapid_p="13" data-v9y="1">#txlege</a>&nbsp;<a class="link rapid-noclick-resp" href="https://t.co/PdYbh7NjDc" target="_blank" rel="nofollow noopener" data-ylk="slk:https://t.co/PdYbh7NjDc" data-rapid_p="14" data-v9y="1">https://t.co/PdYbh7NjDc</a></p>
<p>&mdash; Rep. Eddie Rodriguez (@EddieforTexas)&nbsp;<a class="link rapid-noclick-resp" href="https://twitter.com/EddieforTexas/status/1371558707054710789?ref_src=twsrc%5Etfw" target="_blank" rel="nofollow noopener" data-ylk="slk:March 15, 2021" data-rapid_p="15" data-v9y="1">March 15, 2021</a></p>
</blockquote>
</div>
<p>In Travis County, which holds the state&rsquo;s capital of Austin, officials had opened four satellite locations for voters to hand-deliver their mail-in ballots. The county of 1.2 million people includes more than 800,000 registered voters, all within a county that&rsquo;s more than 1,000 square miles.</p>
<p>Last year, Republicans&nbsp;<a class="link rapid-noclick-resp" href="https://www.independent.co.uk/news/world/americas/us-election/texas-ballot-dropoff-boxes-lawsuit-2020-election-b750186.html" target="_blank" rel="nofollow noopener" data-ylk="slk:repeatedly targeted early voting sites in lawsuits and in an executive order" data-rapid_p="16" data-v9y="1">repeatedly targeted early voting sites in lawsuits and in an executive order</a>&nbsp;from the governor&rsquo;s office. On Monday, the governor called it an &ldquo;unauthorised expansion&rdquo; of mail-in voting.</p>
<p>Texas Democrats and voting rights groups in the state have slammed the governor&rsquo;s agenda and GOP-backed legislation.</p>
<p>&ldquo;If Governor Abbot wants to talk about election integrity, he can start with this: when the voters have spoken, respect the results,&rdquo; said Chris Turner, chair of the Texas House Democratic Caucus.</p>
<p>&ldquo;Voting rights are human rights,&rdquo; said Texas State Representative Nicole Collier. &ldquo;All citizens of this state deserve to have their voices heard and to legally access the ballot box without fear.&rdquo;</p>
</div>`,
          filename: '',
          type: '6001011',
          authorstr: 'Alex Woodward',
          relevantnews: [
            {
              id: '2035',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '11',
              happendate: '2021-03-07 14:57:48',
              status: '1001002',
              pic: '',
              authorstr: '',
              html:
                '<p style="text-indent: 2em;">经过四年的努力实践，江苏交控在数字化发展的道路上领军前行，信息化发展“脱胎换骨”，信息化成果“深入人心”，“六朵云”华彩绽放，引领行业治理体系和服务模式发生深远变革，提前布局新基建，开启数字化转型通道，为企业高质量发展奠定坚实基础。</p><p><br/></p><p style="text-indent: 2em;">7月31日，江苏交通控股有限公司数字转型通达未来——“六朵云”阶段性成果发布会在南京召开，会议展示了“十三五”以来江苏交控在信息化建设、数字化转型、支撑企业高质量发展和推进“交通强省”战略的实践成果。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“党建云”统领全局促发展</strong></span></p><p><br/></p><p>精准把握时代动向和政治方向，顺应传媒变革趋势，为党建工作引入“信息流”，聚力构建“智云党建”工程，匠心打造交控党建云矩阵，全面筑牢多载体、多层次的党建主阵地。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“内控云”改变了治理模式</strong></span></p><p><br/></p><p>建立横向到边、纵向到底的数字化管控体系，渗透组织末端，覆盖全体员工。数十个流程，上百种应用，稳定运行超过 1000天，极大提高办公效率和管理效益，变人工治理为流程治理、数据治理，支撑江苏交控数字化转型。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“收费云”改变了业务能力</strong></span></p><p><br/></p><p>坚持实时、在线、扁平化的研究方向，攻克车牌AI识别、海量数据处理、缺失路径还原多项核心技术，车牌云识别准确率处于行业顶级水平。对多维抓拍数据进行智能分析，对“特定车辆”进行 识别、定位、跟踪和预警，为收费稽查提供有力支撑。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“资管云”改变了管理形态</strong></span></p><p><br/></p><p>利用专项工具，支撑全系统固定资产数字化清查；通过项目跟踪，实现资本性支出项目动态管理；未来，将打造成资产、资源、资本的统一管理平台。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“调度云”改变了行业格局</strong></span></p><p><br/></p><p>开创了中国高速公路“云”&nbsp; 纪元，开启了路网指挥调度新应用、新场景、新时代，“江苏 技术”跨越省域，引领全国视频云联网；“江苏模式”跨越行业，引领一路多方协同变革；开放、合作、共赢的智慧交通云生态正在形成。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“服务云”改变了用户体验</strong></span></p><p><br/></p><p>C端服务以“江苏高速”微信公众号为入口，为驾乘人员提供伴随式信息服务，3年收获粉丝150万，单日最高访问量超3500万；B端服务以数据服务中台为入口，秉持“共享”理念， 标准接口，云端交付，打造数据价值最大化的新服务体系。</p><p><br/></p><p>来自交通运输部路网中心、江苏省政府、江苏省国资委、发改委、交通运输厅、公安厅，以及省内外交通行业单位、高校、科研单位等相关单位代表共400余人参加了发布会。</p><p><br/></p><p>江苏省综合交通运输学会理事长、省人民政府原副省长史和平，江苏省国资委主任、党委书记兼省委组织部副部长徐郭平，江苏省交通运输厅厅长、党组书记兼省铁路办主任陆永泉、江苏省公安厅副厅长裴军等出席会议并致辞。交通运输部路网中心副主任王刚对“六朵云”成果进行点评。江苏交控党委副书记、总经理顾德军致欢迎词。</p><p><br/></p><p>江苏交控董事长蔡任杰对江苏交控的数字化转型做深刻总结时强调，第一，江苏交控为什么要加快数字化转型，是科技变革带来数字化转型大势趋，是行业变革引领数字化转型新方向，是企业变革激发数字化转型内动力。第二，江苏交控靠什么推动数字化转型，靠的是是创新突破的基因，靠的是开放融合的态度，靠的是埋头苦干的精神，靠的是协同发展的机制。第三，江苏交控要怎样迈入数字化转型的新时代，必须要在战略谋划上争取领先、在体系支撑上敢为人先、在核心能力上一马当先、在转型成果上奋勇争先，通过优化组织机制、优化科研机制、优化人才激励机制、优化考核机制，加快发展数字科技，加快推进数字基建，加快完善数字治理，加快完善数字贸易，以具有核心竞争力的数字创新产品，不断创造市场价值。</p><p><br/></p><p>交通运输部路网中心王刚副主任进行了专家点评。王刚认为，江苏交控发布的“六朵云”，集中展现了江苏智慧交通发展的新成果和高水平，也改变了交通路网运营管理和社会服务的格局与面貌。数字化转型是推进交通高质量发展的必由之路，要前瞻预见到新兴技术给交通行业带来的颠覆性变革，瞄准发展前沿，把握发展趋势，聚焦重点领域，研究新应用新业态。交通运输部路网中心也将一如既往地坚持为江苏交通发展提供全面支持，并与江苏共同推广六朵云平台在全国的拓展应用。</p><p><br/></p><p><br/></p>',
              content:
                'Election officials across the country &ndash; as well as the former president&rsquo;s own attorneys, Justice Department and a federal elections commission, which he disbanded &ndash; have failed to produce any evidence that such widespread fraud exists.'
            },
            {
              id: '2033',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '22',
              happendate: '2021-03-07 14:57:48',
              status: '1001002',
              pic: '',
              authorstr: '',
              html:
                '<p style="text-indent: 2em;">经过四年的努力实践，江苏交控在数字化发展的道路上领军前行，信息化发展“脱胎换骨”，信息化成果“深入人心”，“六朵云”华彩绽放，引领行业治理体系和服务模式发生深远变革，提前布局新基建，开启数字化转型通道，为企业高质量发展奠定坚实基础。</p><p><br/></p><p style="text-indent: 2em;">7月31日，江苏交通控股有限公司数字转型通达未来——“六朵云”阶段性成果发布会在南京召开，会议展示了“十三五”以来江苏交控在信息化建设、数字化转型、支撑企业高质量发展和推进“交通强省”战略的实践成果。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“党建云”统领全局促发展</strong></span></p><p><br/></p><p>精准把握时代动向和政治方向，顺应传媒变革趋势，为党建工作引入“信息流”，聚力构建“智云党建”工程，匠心打造交控党建云矩阵，全面筑牢多载体、多层次的党建主阵地。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“内控云”改变了治理模式</strong></span></p><p><br/></p><p>建立横向到边、纵向到底的数字化管控体系，渗透组织末端，覆盖全体员工。数十个流程，上百种应用，稳定运行超过 1000天，极大提高办公效率和管理效益，变人工治理为流程治理、数据治理，支撑江苏交控数字化转型。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“收费云”改变了业务能力</strong></span></p><p><br/></p><p>坚持实时、在线、扁平化的研究方向，攻克车牌AI识别、海量数据处理、缺失路径还原多项核心技术，车牌云识别准确率处于行业顶级水平。对多维抓拍数据进行智能分析，对“特定车辆”进行 识别、定位、跟踪和预警，为收费稽查提供有力支撑。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“资管云”改变了管理形态</strong></span></p><p><br/></p><p>利用专项工具，支撑全系统固定资产数字化清查；通过项目跟踪，实现资本性支出项目动态管理；未来，将打造成资产、资源、资本的统一管理平台。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“调度云”改变了行业格局</strong></span></p><p><br/></p><p>开创了中国高速公路“云”&nbsp; 纪元，开启了路网指挥调度新应用、新场景、新时代，“江苏 技术”跨越省域，引领全国视频云联网；“江苏模式”跨越行业，引领一路多方协同变革；开放、合作、共赢的智慧交通云生态正在形成。</p><p><br/></p><p style="text-align: center;"><span style="font-size: 18px;"><strong>“服务云”改变了用户体验</strong></span></p><p><br/></p><p>C端服务以“江苏高速”微信公众号为入口，为驾乘人员提供伴随式信息服务，3年收获粉丝150万，单日最高访问量超3500万；B端服务以数据服务中台为入口，秉持“共享”理念， 标准接口，云端交付，打造数据价值最大化的新服务体系。</p><p><br/></p><p>来自交通运输部路网中心、江苏省政府、江苏省国资委、发改委、交通运输厅、公安厅，以及省内外交通行业单位、高校、科研单位等相关单位代表共400余人参加了发布会。</p><p><br/></p><p>江苏省综合交通运输学会理事长、省人民政府原副省长史和平，江苏省国资委主任、党委书记兼省委组织部副部长徐郭平，江苏省交通运输厅厅长、党组书记兼省铁路办主任陆永泉、江苏省公安厅副厅长裴军等出席会议并致辞。交通运输部路网中心副主任王刚对“六朵云”成果进行点评。江苏交控党委副书记、总经理顾德军致欢迎词。</p><p><br/></p><p>江苏交控董事长蔡任杰对江苏交控的数字化转型做深刻总结时强调，第一，江苏交控为什么要加快数字化转型，是科技变革带来数字化转型大势趋，是行业变革引领数字化转型新方向，是企业变革激发数字化转型内动力。第二，江苏交控靠什么推动数字化转型，靠的是是创新突破的基因，靠的是开放融合的态度，靠的是埋头苦干的精神，靠的是协同发展的机制。第三，江苏交控要怎样迈入数字化转型的新时代，必须要在战略谋划上争取领先、在体系支撑上敢为人先、在核心能力上一马当先、在转型成果上奋勇争先，通过优化组织机制、优化科研机制、优化人才激励机制、优化考核机制，加快发展数字科技，加快推进数字基建，加快完善数字治理，加快完善数字贸易，以具有核心竞争力的数字创新产品，不断创造市场价值。</p><p><br/></p><p>交通运输部路网中心王刚副主任进行了专家点评。王刚认为，江苏交控发布的“六朵云”，集中展现了江苏智慧交通发展的新成果和高水平，也改变了交通路网运营管理和社会服务的格局与面貌。数字化转型是推进交通高质量发展的必由之路，要前瞻预见到新兴技术给交通行业带来的颠覆性变革，瞄准发展前沿，把握发展趋势，聚焦重点领域，研究新应用新业态。交通运输部路网中心也将一如既往地坚持为江苏交通发展提供全面支持，并与江苏共同推广六朵云平台在全国的拓展应用。</p><p><br/></p><p><br/></p>',
              content:
                'Election officials across the country &ndash; as well as the former president&rsquo;s own attorneys, Justice Department and a federal elections commission, which he disbanded &ndash; have failed to produce any evidence that such widespread fraud exists.'
            },
          ]
        },
        msg: '成功',
        code: 200
      }
      const vdata = res.data
      this.detailData = vdata
      this.loading = false
    },
    backToPrev() {
      this.$router.back()
    },
    toOtherDetail(id) {
      this.$router.push(`/article/ArticleDetail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  position: relative;
  min-width: 1300px;
  // padding-top: 54px;
}
.article-content {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
.article-detail {
  display: flex;
  justify-content: space-between;
}
.article-detail-left {
  width: 780px;
  margin: 0 60px 0 0;
}
.article-detail-left > .title {
  font-size: 26px;
  color: rgba(38, 38, 38, 1);
  font-weight: bold;
}
.article-detail-left > .publish {
  margin-top: 30px;
  color: rgba(168, 168, 168, 0.7);
  font-size: 14px;
  font-weight: bold;
}
.article-detail-left > .publish > .magazine {
  margin-left: 20px;
}
.article-detail-left > .publish > .publisher {
  margin-left: 10px;
}
.article-detail-left > .line {
  border-bottom: 1px solid rgba(216, 216, 216, 0.5);
  margin-top: 20px;
}
.article-detail-left > .content {
  width: 100%;
  margin-top: 30px;
}
.article-detail-left > .content > .content-img {
  width: 780px;
}
.article-detail-left > .content > .content-img > img {
  width: 100%;
}
.article-detail-left > .content > .img-info {
  color: rgba(51, 51, 51, 0.5);
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
.article-detail-left > .content > .content-text {
  width: 100%;
  margin-top: 20px;
  color: rgba(51, 51, 51, 1);
  font-size: 15px;
  text-indent: 20px;
  line-height: 30px;
}
.article-detail-left > .content > .content-text > div {
  margin-bottom: 30px;
}

.article-detail-left > .back-to-prev-page {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.article-detail-left > .back-to-prev-page > img {
  height: 15px;
}
.article-detail-left > .back-to-prev-page > span {
  color: rgba(175, 144, 92, 1);
  font-size: 15px;
  margin-left: 5px;
  cursor: pointer;
}

.item-header {
  height: 51px;
  position: relative;
}
.item-header .line {
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.item-title {
  width: 105px;
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  color: rgba(51, 51, 51, 1);
  font-weight: 600;
  border-top: 3px solid rgba(175, 144, 92, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.related-articles-item {
  height: 180px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.related-articles-item > .item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.related-articles-item > .item-info > .title {
  color: rgba(38, 38, 38, 1);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.related-articles-item > .item-info > .brief {
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
}
.related-articles-item > .item-info > .date {
  color: rgba(168, 168, 168, 1);
  font-size: 12px;
}
.related-articles-item > .item-img {
  width: 270px;
  margin-left: 10px;
}

.related-articles-item > .item-img > img {
  width: 100%;
  height: 100%;
}

.article-detail-right {
  flex: 1;
}
.content-text >>> table {
  width: 780px !important;
}
.content-text >>> h1 {
  margin: 20px 0;
} 

.content-text >>> .caas-img-container img{
  width: 100%;
}
</style>
