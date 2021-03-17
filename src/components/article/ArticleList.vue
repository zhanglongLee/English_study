<template>
  <div class="articles-list">
    <div class="articles-list-header">
      <typeList :type-list="typeList" @typeBtnClick="typeBtnClick" />
    </div>
    <div class="articles-list-content contentAear content-mb">
      <div
        v-if="curList.length > 0"
        v-loading="loading"
        class="articles-list-content-left"
      >
        <ContentList :cur-list="curList" @navToDetail="navToDetail" />
        <Pagination :size="size" :total="total" @currentChange="currentChange" />
      </div>
      <div v-else v-loading="loading" class="articles-list-content-left">
        <div class="no-result">暂时没有内容/(ㄒoㄒ)/~~</div>
      </div>
      <div class="articles-list-content-right">
        <hot-recommend />
      </div>
    </div>
  </div>
</template>

<script>
import HotRecommend from '../common/HotRecommend'
import ContentList from '../common/ContentList'
import Pagination from '../common/Pagination'
import typeList from '../common/typeList'
export default {
  name: 'ArticlesList',
  components: {
    HotRecommend,
    ContentList,
    Pagination,
    typeList
  },
  data() {
    return {
      typeList: [
        {
          id: 1,
          name: '全部'
        },
        {
          id: 2,
          name: '体育'
        },
        {
          id: 3,
          name: '科技'
        },
        {
          id: 4,
          name: '音乐'
        }
      ],
      curType: {},
      curList: [], // 根据条件获取的当前新闻列表
      curCode: '', // 当前新闻类型码
      dictList: [],
      index: 1,
      size: 5,
      total: 0,
      loading: true
    }
  },
  watch: {

  },
  created() {
    this.getNewsList()
  },
  methods: {
    navToDetail(id) {
      this.$router.push(`/article/ArticleDetail/${id}`)
    },
    // 获取新闻列表
    getNewsList() {
      // this.loading = true
      // const keyword = this.$route.query.keyword || ''
      // if (this.curCode == '6001010') {
      //   this.curCode = '6001011,6001012'
      // }
      // let postObj = { index: this.index, size: this.size, keyword: keyword, type: this.curCode }

      // this.$Post('News/NewsData/getNewsList', {data: postObj},
      //   (res) => {
      //     console.log(JSON.stringify(res))
      //     let vdata = res.data
      //     this.curList = vdata.data // 当前新闻列表
      //     this.total = vdata.page_data.totalCount
      //     this.loading = false
      //   },
      //   (err) => {
      //     this.$alertShow(err.msg)
      //   },
      // true)
      const res = {
        status: true,
        data: {
          page_data: {
            totalCount: 314,
            totalPage: 63
          },
          data: [
            {
              id: '2039',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            },
            {
              id: '2040',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            },
            {
              id: '2041',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            },
            {
              id: '2049',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            },
            {
              id: '2050',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            },
            {
              id: '2060',
              title: 'Texas governor demands ‘emergency’ election reform as state GOP unveils two dozen bills aimed at voting rights',
              views: '99',
              istop: '1',
              isexcellent: '0',
              istopic: '0',
              happendate: 'Tue., March 16, 2021, 5:15 a.m',
              typename: '政治',
              status: '1001002',
              statusname: '发布中',
              authorstr: 'Alex Woodward',
              pic:
                'https://s.yimg.com/uu/api/res/1.2/50RTvzqEwFM286vGSc9zjA--~B/Zmk9c3RyaW07aD0xNDI7cT05NTt3PTI2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/cnT2feWvTp2DbGSurn5DwQ--~B/aD0zMDc7dz00NjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_independent_635/58e3ad408ebaa7c0e14c6deb315eb6a0.cf.webp',
              content:
                `Among the items on Texas governor Greg Abbott’s list of emergency priorities in 2021: “election integrity”.The phrase has emerged among Republican lawmakers in state legislatures across the US, as states consider dozens of GOP-backed bills to restrict voting access in the wake of the 2020 elections that saw unprecedented voter turnout and expanded vote-by-mail options during the coronavirus pandemic.`,
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
                </div>`
            }
          ]
        },
        msg: '成功',
        code: 200
      }
      const vdata = res.data
      this.curList = vdata.data // 当前新闻列表
      this.total = vdata.page_data.totalCount
      this.loading = false
    },
    currentChange(newV) {
      this.index = newV
      this.getNewsList()
      this.scrollToTop()
    },
    typeBtnClick(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
/* .articles-list-bg {
  height: 300px;
  width: 100%;
  background: url(../../assets/images/articles/follow-bg.png) no-repeat;
  background-size: cover;
  position: relative;
} */

.articles-list-content {
  display: flex;
  justify-content: space-between;
}
.articles-list-content-left {
  width: 780px;
  margin: 0 60px 0 0;
}
.articles-list-content-right {
  flex: 1;
}

.articles-list-content-left > .no-result {
  text-align: center;
  font-size: 18px;
}

</style>
