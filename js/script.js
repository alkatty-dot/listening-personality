document.addEventListener("DOMContentLoaded", () => {
  /*** 漢堡選單控制 ***/
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  /*** Timeline ***/
const nodes = document.querySelectorAll('.time-node');
const yearEl = document.getElementById('timeline-year');
const descEl = document.getElementById('timeline-desc');

if (nodes && yearEl && descEl) {
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      // 文字顯示為「2023｜標題」
      yearEl.textContent = `${node.dataset.year}｜${node.dataset.title}`;
      descEl.textContent = node.dataset.desc;

      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
    });
  });

  // 預設顯示最後一筆
  const lastNode = nodes[nodes.length - 1];
  lastNode.classList.add('active');
  yearEl.textContent = `${lastNode.dataset.year}｜${lastNode.dataset.title}`;
  descEl.textContent = lastNode.dataset.desc;
}


// === 題目設定 ===
  const quizData = [
  {
    question: "早上起床的第一個聲音，你最想聽到什麼？",
    options: [
      { text: "一段充滿轉折的故事或懸疑廣播劇", type: "偵探型" },
      { text: "活力滿滿的晨間笑談或脫口秀", type: "歡樂派" },
      { text: "溫柔的音樂，像有人輕聲叫你起床", type: "貓系" },
      { text: "簡短知識或新聞重點", type: "學霸型" }
    ]
  },
  {
    question: "周末宅家時，你會讓什麼聲音陪你？",
    options: [
      { text: "背景裡有點廚房料理聲、生活談話", type: "生活派" },
      { text: "深度對談或心靈故事，讓自己沉澱", type: "哲學系" },
      { text: "放鬆療癒的輕音樂或雨聲", type: "貓系" },
      { text: "和人聊天或聽朋友說故事", type: "陪伴型" }
    ]
  },
  {
    question: "在心情低落的時候，你會想要聽什麼來調整？",
    options: [
      { text: "激發腦力的推理或懸疑內容", type: "偵探型" },
      { text: "滑稽有趣的笑聲，幫自己轉換心情", type: "歡樂派" },
      { text: "溫暖陪伴感的聲音或小故事", type: "陪伴型" },
      { text: "冥想音樂、白噪音，讓腦袋安靜下來", type: "調頻型" }
    ]
  },
  {
    question: "當你需要專注做一件事時，你最想聽到什麼聲音來幫助自己進入狀態？",
    options: [
      { text: "輕鬆的背景氛圍音或咖啡廳聲音", type: "生活派" },
      { text: "能讓腦袋充實的知識型講解", type: "學霸型" },
      { text: "引發深度思考的哲理或散文朗讀", type: "哲學系" },
      { text: "節奏平穩的純音樂或自然聲", type: "調頻型" }
    ]
  },
  {
    question: "晚上睡覺前，你最想聽到什麼聲音？",
    options: [
      { text: "一段輕鬆的喜劇或歡樂聊天", type: "歡樂派" },
      { text: "平靜的ASMR或白噪音，幫助入睡", type: "調頻型" },
      { text: "慢速朗讀或療癒文字", type: "貓系" },
      { text: "有溫度的人聲故事", type: "陪伴型" }
    ]
  },
  {
    question: "如果有一整天的假期，你會怎麼讓耳朵放鬆？",
    options: [
      { text: "聽旅遊經驗談或日常有趣小故事", type: "生活派" },
      { text: "翻開一本有聲書學點新東西", type: "學霸型" },
      { text: "聽帶哲理的散文、讓自己思考人生", type: "哲學系" },
      { text: "用懸疑或推理劇填滿一天", type: "偵探型" }
    ]
  },
  {
    question: "哪句話最貼近你的聽覺習慣？",
    options: [
      { text: "沒有轉折我不聽！", type: "偵探型" },
      { text: "聲音在，我就不孤單。", type: "陪伴型" },
      { text: "我聽的是大腦的養分。", type: "學霸型" },
      { text: "我需要每天笑三回！", type: "歡樂派" },
      { text: "聲音是我內心的開關。", type: "調頻型" },
      { text: "耳朵不能閒，一邊做事一邊聽才順。", type: "生活派" },
      { text: "那聲音，好柔好遠好暖好想睡……", type: "貓系" },
      { text: "我不是在聽，是在跟自己對話。", type: "哲學系" }
    ]
  }
];

// === 結果設定 ===
  const resultData = {
  "偵探型": {
    desc: "你是懸疑感滿滿的偵探型耳朵！你的耳朵像雷達，專門捕捉轉折和伏筆，跟聽丸一樣，愛找線索到停不下來！",
    recommend: [
      { title: "13‧67", img: "images/cover/1-1.jpg", link: "#" },
      { title: "請把門鎖好", img: "images/cover/1-2.jpg", link: "#" },
      { title: "笭菁禁忌系列有聲劇", img: "images/cover/1-3.jpg", link: "#" },
      { title: "妖怪藥局", img: "images/cover/1-4.jpg", link: "#" },
      { title: "佐伙來聽囡仔古", img: "images/cover/1-5.jpg", link: "#" },
      { title: "巫者", img: "images/cover/1-6.jpg", link: "#" },
      { title: "妖怪臺灣地圖", img: "images/cover/1-7.jpg", link: "#" },
      { title: "西遊記", img: "images/cover/1-8.jpg", link: "#" },
      { title: "乩童醫生", img: "images/cover/1-9.jpg", link: "#" },
      { title: "杏花渡傳說", img: "images/cover/1-10.jpg", link: "#" }
    ]
  },
  "歡樂派": {
    desc: "你是陽光開朗的歡樂派耳朵！總能從聲音中捕捉快樂能量，讓自己和別人都開心！",
    recommend: [
      { title: "笑感動天", img: "images/cover/2-1.jpg", link: "#" },
      { title: "一代風流-笑聲滿人間", img: "images/cover/2-2.jpg", link: "#" },
      { title: "秋.逗", img: "images/cover/2-3.jpg", link: "#" },
      { title: "笑神來了", img: "images/cover/2-4.jpg", link: "#" },
      { title: "我不要演癩蛤蟆", img: "images/cover/2-5.jpg", link: "#" },
      { title: "三十三", img: "images/cover/2-6.jpg", link: "#" },
      { title: "快書竹板林文彬", img: "images/cover/2-7.jpg", link: "#" },
      { title: "藝曲趣教遊之對口相聲", img: "images/cover/2-8.jpg", link: "#" },
      { title: "京聲賤笑（上）", img: "images/cover/2-9.jpg", link: "#" },
      { title: "吳間道", img: "images/cover/2-10.jpg", link: "#" }
    ]
  },
  "貓系": {
    desc: "你是療癒系的貓系耳朵！喜歡安靜柔和的聲音，讓自己放鬆下來。",
    recommend: [
      { title: "腦內鋼琴", img: "images/cover/3-1.jpg", link: "#" },
      { title: "所有溫柔都是你的隱喻", img: "images/cover/3-2.jpg", link: "#" },
      { title: "剛剛好的優雅", img: "images/cover/3-3.jpg", link: "#" },
      { title: "白噪音深層睡眠", img: "images/cover/3-4.jpg", link: "#" },
      { title: "夢的翅膀.翱翔於古典的夢", img: "images/cover/3-5.jpg", link: "#" },
      { title: "給台灣的情書", img: "images/cover/3-6.jpg", link: "#" },
      { title: "心靈療癒Piano．寧靜森林", img: "images/cover/3-7.jpg", link: "#" },
      { title: "阿得姊姊說蘭格童話", img: "images/cover/3-8.jpg", link: "#" },
      { title: "銀河鐵道之夜", img: "images/cover/3-9.jpg", link: "#" },
      { title: "穿越撒哈拉", img: "images/cover/3-10.jpg", link: "#" }
    ]
  },
  "調頻型": {
    desc: "你是冷靜沉穩的調頻型耳朵！總能用聲音找到情緒的平衡點。",
    recommend: [
      { title: "靜心．淨心", img: "images/cover/4-1.jpg", link: "#" },
      { title: "我的簡單生活練習", img: "images/cover/4-2.jpg", link: "#" },
      { title: "莫札特靜心鋼琴曲", img: "images/cover/4-3.jpg", link: "#" },
      { title: "ASMR西藏頌缽", img: "images/cover/4-4.jpg", link: "#" },
      { title: "絲國蘭鋼琴系列", img: "images/cover/4-5.jpg", link: "#" },
      { title: "ASMR空靈頌缽", img: "images/cover/4-6.jpg", link: "#" },
      { title: "上班族的香氛療癒課", img: "images/cover/4-7.jpg", link: "#" },
      { title: "曾宇謙小提琴專輯", img: "images/cover/4-8.jpg", link: "#" },
      { title: "抗癌自癒力：正念減壓8堂課", img: "images/cover/4-9.jpg", link: "#" },
      { title: "鋼琴森林詩篇ASMR樂章", img: "images/cover/4-10.jpg", link: "#" }
    ]
  },
  "學霸型": {
    desc: "你是知識型的學霸耳朵！喜歡在聲音中學習新知識。",
    recommend: [
      { title: "徐薇英文系列", img: "images/cover/5-1.jpg", link: "#" },
      { title: "世界是怎麼長成現在的樣子？", img: "images/cover/5-2.jpg", link: "#" },
      { title: "台灣風土系列", img: "images/cover/5-3.jpg", link: "#" },
      { title: "今天好想藥", img: "images/cover/5-4.jpg", link: "#" },
      { title: "劉亮佐有藝思", img: "images/cover/5-5.jpg", link: "#" },
      { title: "徐佳馨房產學院", img: "images/cover/5-6.jpg", link: "#" },
      { title: "趙小僑的塔羅筆記", img: "images/cover/5-7.jpg", link: "#" },
      { title: "江大成電商創業筆記", img: "images/cover/5-8.jpg", link: "#" },
      { title: "打造動人表達力的15堂課", img: "images/cover/5-9.jpg", link: "#" },
      { title: "超級房仲成交的12堂課", img: "images/cover/5-10.jpg", link: "#" }
    ]
  },
  "哲學系": {
    desc: "你是深思熟慮的哲學系耳朵！喜歡用聲音探索人生。",
    recommend: [
      { title: "三毛典藏系列有聲書", img: "images/cover/6-1.jpg", link: "#" },
      { title: "劉梓潔列有聲書", img: "images/cover/6-2.jpg", link: "#" },
      { title: "張愛玲系列有聲書", img: "images/cover/6-3.jpg", link: "#" },
      { title: "小王子", img: "images/cover/6-4.jpg", link: "#" },
      { title: "麻醉醫師靈魂所在的地方", img: "images/cover/6-5.jpg", link: "#" },
      { title: "妮說BOOK，我說可", img: "images/cover/6-6.jpg", link: "#" },
      { title: "慢讀金剛經", img: "images/cover/6-7.jpg", link: "#" },
      { title: "自卑與超越", img: "images/cover/6-8.jpg", link: "#" },
      { title: "巴奈回家：凱道", img: "images/cover/6-9.jpg", link: "#" },
      { title: "許皓宜56則情緒陰影", img: "images/cover/6-10.jpg", link: "#" }
    ]
  },
  "生活派": {
    desc: "你是隨和輕鬆的生活派耳朵！喜歡日常的溫度與親切的陪伴感。",
    recommend: [
      { title: "趙小僑很有事", img: "images/cover/7-1.jpg", link: "#" },
      { title: "12星座想怎樣", img: "images/cover/7-2.jpg", link: "#" },
      { title: "快速入門！臺灣人不可忽視的百大病症", img: "images/cover/7-3.jpg", link: "#" },
      { title: "用耳朵看展覽", img: "images/cover/7-4.jpg", link: "#" },
      { title: "黃惠如-慢老的10堂課", img: "images/cover/7-5.jpg", link: "#" },
      { title: "餃子與味噌：流動的日本味", img: "images/cover/7-6.jpg", link: "#" },
      { title: "10分鐘早報新聞", img: "images/cover/7-7.jpg", link: "#" },
      { title: "東京歷史迷走", img: "images/cover/7-8.jpg", link: "#" },
      { title: "杜丞蕓—24節氣養生：飲食、經絡保健", img: "images/cover/7-9.jpg", link: "#" },
      { title: "Oh My God！我的天公伯啊～", img: "images/cover/7-10.jpg", link: "#" }
    ]
  },
  "陪伴型": {
    desc: "你是溫暖貼心的陪伴型耳朵！喜歡聲音給你溫度與陪伴。",
    recommend: [
      { title: "花甲男孩（有聲劇）", img: "images/cover/8-1.jpg", link: "#" },
      { title: "黑潔明-小肥肥的猛男日記", img: "images/cover/8-2.jpg", link: "#" },
      { title: "母語：為阿嬤做傻事", img: "images/cover/8-3.jpg", link: "#" },
      { title: "尼奧媽的單身派對", img: "images/cover/8-4.jpg", link: "#" },
      { title: "內向力", img: "images/cover/8-5.jpg", link: "#" },
      { title: "宮西達也霸王龍系列有聲書", img: "images/cover/8-6.jpg", link: "#" },
      { title: "廚房裡的偽魚販", img: "images/cover/8-7.jpg", link: "#" },
      { title: "我不要完美，只要完整", img: "images/cover/8-8.jpg", link: "#" },
      { title: "盧俊義牧師講箴言", img: "images/cover/8-9.jpg", link: "#" },
      { title: "人生有所謂，決斷無所畏", img: "images/cover/8-10.jpg", link: "#" }
    ]
  }
};

  let currentQuestionIndex = 0;
  let scores = {
    "偵探型": 0, "歡樂派": 0, "貓系": 0, "調頻型": 0,
    "學霸型": 0, "哲學系": 0, "生活派": 0, "陪伴型": 0
  };
  let radarChart;
  let finalResultType = "";

  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const resultType = document.getElementById("resultType");
  const resultDesc = document.getElementById("resultDesc");
  const recommendSection = document.getElementById("recommendSection");

  function loadQuestion(index) {
    const q = quizData[index];
    quizContainer.innerHTML = `
      <div class="question-box">
        <h3>Q${index + 1}. ${q.question}</h3>
        <div class="options">
          ${q.options.map(opt => `<button class="option-btn" data-type="${opt.type}">${opt.text}</button>`).join("")}
        </div>
      </div>
    `;
    document.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        scores[type]++;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
          loadQuestion(currentQuestionIndex);
        } else {
          showResult();
        }
      });
    });
  }

  function getImageFilename(type) {
  const mapping = {
    "偵探型": "1_detective.jpg",
    "歡樂派": "2_funny.jpg",
    "貓系": "3_cat.jpg",
    "調頻型": "4_balance.jpg",
    "學霸型": "5_study.jpg",
    "哲學系": "6_thinker.jpg",
    "生活派": "7_daily.jpg",
    "陪伴型": "8_warm.jpg"
  };
  return mapping[type];
}

  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.scrollIntoView({ behavior: 'smooth' });

    const maxScore = Math.max(...Object.values(scores));
    const topTypes = Object.keys(scores).filter(key => scores[key] === maxScore);
    const resultTypeName = topTypes[0];
    finalResultType = resultTypeName;

    resultDesc.innerText = resultData[resultTypeName].desc;

    // 取得原始推薦陣列
    const allRecommends = resultData[resultTypeName].recommend;

    // 隨機挑選三本推薦書
    const shuffled = allRecommends.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    // 顯示推薦書
    recommendSection.innerHTML = '';
    selected.forEach(item => {
      const card = document.createElement('div');
      card.className = 'recommend-card';
      card.innerHTML = `<a href="${item.link}" target="_blank">
                          <img src="${item.img}" alt="${item.title}">
                          <span>${item.title}</span>
                        </a>`;
      recommendSection.appendChild(card);
    });

    document.getElementById("resultImage").src = `images/mascot/${getImageFilename(resultTypeName)}`;

    drawRadarChart();
  }

  function drawRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: Object.keys(scores),
        datasets: [{
          label: '性格分佈',
          data: Object.values(scores),
          backgroundColor: 'rgba(108, 145, 242, 0.3)',
          borderColor: '#6c91f2',
          borderWidth: 3,
          pointBackgroundColor: '#6c91f2',
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBorderWidth: 2
        }]
      },
      options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#333',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        }
      },
      scales: {
        r: {
          angleLines: {
            color: '#ccc' // 雷達輻射線顏色
          },
          grid: {
            color: '#ddd' // 圓圈網格顏色
          },
          pointLabels: {
            font: {
              size: 16
            },
            color: '#000'
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            max: 5,
            color: '#666',
            backdropColor: 'transparent',
            font: {
              size: 12
            }
          }
        }
      }
    }
  });
  }

  document.getElementById("startBtn")?.addEventListener("click", () => {
    document.getElementById("startPage").style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    for (let key in scores) scores[key] = 0;
    loadQuestion(currentQuestionIndex);
  });

  document.getElementById("restartBtn")?.addEventListener("click", () => {
    currentQuestionIndex = 0;
    for (let key in scores) scores[key] = 0;
    resultContainer.style.display = "none";
    document.getElementById("startPage").style.display = "block";
  });

document.getElementById("shareImageBtn")?.addEventListener("click", async () => {
  const resultCard = document.getElementById("resultCard");
  const shareUrl = "https://ilisten.tw/5th//quiz.html";
  const resultType = finalResultType || "未知類型";
  const shareText = `我的耳朵性格是「${resultType}」，來看看你是哪一型耳朵吧 👉`;

  try {
    const canvas = await html2canvas(resultCard, {
      useCORS: true,
      backgroundColor: "#ffffff",
      scale: 2
    });

    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    if (!blob) {
      alert("無法產生圖片");
      return;
    }

    const file = new File([blob], "result.png", { type: "image/png" });
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    const supportWebShareFiles = navigator.canShare?.({ files: [file], url: shareUrl }) === true;

    // ✅ 1. 手機裝置 + 完整支援 Web Share API
    if (isMobile && navigator.share && supportWebShareFiles) {
      await navigator.share({
        title: "我的耳朵性格測驗結果",
        text: shareText,
        url: shareUrl,
        files: [file]
      });
      return;
    }

    // ✅ 2. 桌機環境 → 自動下載圖片
    if (!isMobile) {
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "result.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      return;
    }

    // ✅ 3. fallback：LINE / FB / 其他手機內建瀏覽器
    const imageURL = URL.createObjectURL(blob);

    document.getElementById("imagePreview")?.remove();
    document.getElementById("manualTip")?.remove();
    document.getElementById("copyBtn")?.remove();
    document.getElementById("lineShareBtn")?.remove();

    const img = document.createElement("img");
    img.id = "imagePreview";
    img.src = imageURL;
    img.style.width = "100%";
    img.style.maxWidth = "500px";
    img.style.marginTop = "20px";
    img.style.border = "1px solid #ccc";
    img.style.borderRadius = "8px";

    const tip = document.createElement("p");
    tip.id = "manualTip";
    tip.innerHTML = `📌 長按圖片儲存，再把這個網址貼給朋友：<br><a href="${shareUrl}" target="_blank">${shareUrl}</a>`;
    tip.style.color = "#333";
    tip.style.fontSize = "14px";
    tip.style.marginTop = "10px";

    const copyBtn = document.createElement("button");
    copyBtn.id = "copyBtn";
    copyBtn.textContent = "複製網址";
    copyBtn.style.marginTop = "10px";
    copyBtn.style.padding = "6px 12px";
    copyBtn.style.fontSize = "14px";
    copyBtn.style.cursor = "pointer";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("已複製網址，可以貼給朋友囉！");
      });
    });

    const lineBtn = document.createElement("button");
    lineBtn.id = "lineShareBtn";
    lineBtn.textContent = "分享到 LINE";
    lineBtn.style.marginTop = "10px";
    lineBtn.style.marginLeft = "10px";
    lineBtn.style.padding = "6px 12px";
    lineBtn.style.fontSize = "14px";
    lineBtn.style.backgroundColor = "#06c755";
    lineBtn.style.color = "#fff";
    lineBtn.style.border = "none";
    lineBtn.style.borderRadius = "5px";
    lineBtn.style.cursor = "pointer";
    lineBtn.addEventListener("click", () => {
      const encodedURL = encodeURIComponent(shareUrl);
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodedURL}`, '_blank');
    });

    const container = document.getElementById("result");
    container.appendChild(img);
    container.appendChild(tip);
    container.appendChild(copyBtn);
    container.appendChild(lineBtn);

  } catch (error) {
    alert("分享失敗，請改用儲存圖片方式");
    console.error("分享錯誤：", error);
  }
});




  const resultForm = document.getElementById("resultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");

  // 顯示等待文字並禁用按鈕與欄位
  submitBtn.disabled = true;
  submitBtn.innerText = "送出中...請勿重複送出，請稍後";
  nameInput.disabled = true;
  emailInput.disabled = true;

  // ✅ 改成 x-www-form-urlencoded 格式傳送
  const data = new URLSearchParams();
  data.append("name", nameInput.value.trim());
  data.append("email", emailInput.value.trim());

  fetch(form.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  })
  .then(response => response.text())
  .then(text => {
    if (text === "DUPLICATE") {
      alert("此 Email 已領取過序號，請勿重複申請！");
    } else if (text === "NO_COUPON") {
      alert("目前序號已發完，請稍候再試！");
    } else if (text.startsWith("EMAIL_ERROR")) {
      alert("Email 發送失敗，請聯繫客服！");
    } else if (text === "OK") {
      alert("已成功送出，請至 Email 查看序號！");
    } else if (text === "MISSING_FIELDS") {
      alert("請填寫完整資料！");
    } else {
      alert("未知錯誤：" + text);
    }
    // 成功後不再可送出
    submitBtn.innerText = "已送出";
    submitBtn.style.backgroundColor = "#ccc";
  })
  .catch(err => {
    alert("送出失敗，請稍後再試");
    console.error(err);
    // 若失敗，恢復可點擊狀態
    submitBtn.disabled = false;
    submitBtn.innerText = "送出資料並領取序號";
    nameInput.disabled = false;
    emailInput.disabled = false;
  });
});
});


// 檢查是否在吉祥物頁
const mascotPage = document.querySelector('.mascot-cards');

if (mascotPage) {
  let selectedCard = null;

  document.querySelectorAll('.mascot-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.mascot-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedCard = card.getAttribute('data-img');
    });
  });

  document.getElementById('shareFB').onclick = () => {
    if (!selectedCard) return alert("請先選擇一張聽丸圖卡！");
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedCard)}`;
    window.open(fbUrl, '_blank');
  };

  document.getElementById('shareLINE').onclick = () => {
    if (!selectedCard) return alert("請先選擇一張聽丸圖卡！");
    const lineUrl = `https://line.me/R/msg/text/?我喜歡這張聽丸：${encodeURIComponent(selectedCard)}`;
    window.open(lineUrl, '_blank');
  };

  document.getElementById('downloadCard').onclick = () => {
    if (!selectedCard) return alert("請先選擇一張聽丸圖卡！");
    const a = document.createElement('a');
    a.href = selectedCard;
    a.download = "聽丸.jpg";
    a.click();
  };
}



// 動態縮小字體
document.querySelectorAll('.celebrity-title').forEach(title => {
  const containerWidth = title.parentElement.offsetWidth;
  let fontSize = 16;

  title.style.fontSize = fontSize + 'px';

  while (title.scrollWidth > containerWidth && fontSize > 10) {
    fontSize -= 1;
    title.style.fontSize = fontSize + 'px';
  }
});

let currentAudio = null;
let currentPlayBtn = null;

function revealCard(card) {
  const img = card.querySelector('.celebrity-photo');
  const extra = card.querySelector('.extra-info');
  const player = card.querySelector('.custom-audio-player');
  const playBtn = player.querySelector('.play-btn');
  const audioSrc = player.dataset.audio;

  // 若卡片已解鎖，不再執行顯示邏輯
  if (!img.classList.contains('blurred')) return;

  img.classList.remove('blurred');
  extra.classList.remove('hidden');
  player.classList.remove('hidden');

  handleAudio(audioSrc, playBtn);
}

function handleAudio(audioSrc, playBtn) {
  // 停止目前音檔
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentPlayBtn) currentPlayBtn.textContent = '▶';
  }

  // 播放新音檔
  const audio = new Audio(audioSrc);
  currentAudio = audio;
  currentPlayBtn = playBtn;

  audio.play();
  playBtn.textContent = '❚❚';

  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
  });

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    if (audio.paused) {
      handleAudio(audioSrc, playBtn); // 重新播放
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });
}
