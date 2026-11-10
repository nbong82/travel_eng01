// ============================================================================
// 여행영어 실전 대사집 데이터 파일 (data.js) - 1번 ~ 50번 전체 원문 완벽 수록
// ============================================================================

const situationsData = [
  {
    id: 1,
    title: "조식은 몇 시부터예요?",
    category: "호텔",
    page: "p.09-10",
    tip: "What time does ~ start / end / open / close? 패턴 하나로 호텔의 모든 시간 질문이 해결됩니다. 대답은 at 뒤에 나오는 시간만 잡으면 돼요.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "조식은 몇 시부터예요?", en: "What time does breakfast start?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "조식은 6시 반에 시작해요.", en: "Breakfast starts at six thirty.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "조금 일찍 가도 돼요?", en: "Can I come a little earlier?", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "6시 반에 문을 열어요.", en: "The doors open at six thirty.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 감사합니다.", en: "Okay, thank you.", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "좋은 아침이에요. 딱 맞춰 오셨네요.", en: "Good morning. Right on time.", note: "" }
    ],
    extras: [
      { kr: "조식은 몇 시까지예요?", en: "What time does breakfast end?" },
      { kr: "조식은 어디서 먹어요?", en: "Where is breakfast served?" },
      { kr: "조식 포함인가요?", en: "Is breakfast included?" },
      { kr: "조식은 무료인가요?", en: "Is breakfast complimentary?" },
      { kr: "수영장은 몇 시에 열어요?", en: "What time does the pool open?" },
      { kr: "헬스장은 몇 시에 닫아요?", en: "What time does the gym close?" },
      { kr: "주말에도 조식 나와요?", en: "Do you serve breakfast on weekends too?" },
      { kr: "조식을 포장해 갈 수 있나요?", en: "Can I get breakfast to go?" }
    ]
  },
  {
    id: 2,
    title: "가장 큰 사이즈로 주시겠어요?",
    category: "카페",
    page: "p.11-12",
    tip: "미국 카페는 주문 후 이름을 물어봅니다. 당황하지 말고 이름만 말하면 끝! 음료 나올 때 이름을 불러줘요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "가장 큰 사이즈로 주시겠어요?", en: "Can I get the largest size?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요. 뭐 드릴까요?", en: "Good morning. What can I get you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아이스 아메리카노 주세요.", en: "An iced Americano, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "사이즈는요?", en: "What size?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "제일 큰 거요? 정말요?", en: "The largest? Are you sure?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 확실해요.", en: "Yes, please. I'm sure.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "더 필요한 거 있으세요?", en: "Anything else?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 그게 다예요.", en: "No, that's it.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "주문자 이름 알려주시겠어요?", en: "Can I get a name for the order?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다. 금방 나올 거예요.", en: "Got it. That'll be right up.", note: "" }
    ],
    extras: [
      { kr: "제일 작은 사이즈로 주시겠어요?", en: "Can I get the smallest size?" },
      { kr: "중간 사이즈로 주세요.", en: "Can I get a medium?" },
      { kr: "사이즈는 어떤 게 있어요?", en: "What sizes do you have?" },
      { kr: "그거 귀리 우유로 바꿔주시겠어요?", en: "Can I get that with oat milk?" },
      { kr: "얼음 적게 주세요.", en: "Less ice, please." },
      { kr: "샷 추가할 수 있을까요?", en: "Can I get an extra shot?" },
      { kr: "드시고 가세요, 포장이세요?", en: "For here or to go?" },
      { kr: "먹고 갈게요. / 포장이요.", en: "For here, please. / To go, please." }
    ]
  },
  {
    id: 3,
    title: "포장해주시겠어요?",
    category: "식당",
    page: "p.13-14",
    tip: "미국에선 포장을 take-out보다 to go라고 훨씬 많이 씁니다. 양이 많아 남은 음식 포장은 아주 흔한 일이니 창피해하지 마세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "이거 포장해주시겠어요?", en: "Can I get this to go?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "음식 어떠셨어요?", en: "How was everything?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "맛있었는데 너무 배불러요.", en: "It was delicious, but I'm so full.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "그거 포장 박스 드릴까요?", en: "Would you like a box for that?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁드려요.", en: "Yes, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 박스 가져다드릴게요.", en: "Of course. I'll bring you a box.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "계산서도 드릴까요?", en: "Would you like the check as well?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "서두르지 마세요. 천천히 하세요.", en: "No rush. Take your time.", note: "" }
    ],
    extras: [
      { kr: "포장 박스 하나 주시겠어요?", en: "Can I get a to-go box?" },
      { kr: "이거 싸주시겠어요?", en: "Could you wrap this up for me?" },
      { kr: "남은 거 포장해 주시겠어요?", en: "Can I get the rest to go?" },
      { kr: "계산서 주시겠어요?", en: "Can I get the check, please?" },
      { kr: "계산 나눠서 할 수 있을까요?", en: "Can we split the check?" },
      { kr: "카드 되나요?", en: "Do you take credit cards?" },
      { kr: "팁이 포함된 건가요?", en: "Is the tip included?" },
      { kr: "거스름돈은 됐어요.", en: "Keep the change." }
    ]
  },
  {
    id: 4,
    title: "예약 없이 숙박 가능한가요?",
    category: "호텔",
    page: "p.15-16",
    tip: "walk-in은 예약 없이 온 손님이라는 뜻으로, 호텔뿐 아니라 식당·미용실·병원에서도 똑같이 씁니다. tax included (세금 포함) / plus tax (세금 별도)를 꼭 확인하세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "예약 없이 숙박 가능한가요?", en: "Do you take walk-ins?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "네, 가능해요. 몇 박이세요?", en: "Yes, we do. How many nights?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "하룻밤이요.", en: "Just one night.", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "빈방 확인해 볼게요.", en: "Let me check availability.", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "침대 두 개짜리 방이 있어요.", en: "We have a room with two beds available.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "1박에 얼마예요?", en: "How much is it per night?", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "160달러, 세금 포함이요.", en: "One hundred and sixty dollars, tax included.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그걸로 할게요.", en: "We'll take it.", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "좋아요. 신분증 보여주시겠어요?", en: "Wonderful. May I see your ID?", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "512호예요. 엘리베이터는 왼쪽이에요.", en: "Room 512. Elevators are to your left.", note: "" },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "즐거운 시간 되세요.", en: "Enjoy your stay.", note: "" }
    ],
    extras: [
      { kr: "오늘 밤 빈방 있나요?", en: "Do you have any rooms available tonight?" },
      { kr: "체크인하려고요.", en: "I'd like to check in, please." },
      { kr: "김으로 예약했어요.", en: "I have a reservation under Kim." },
      { kr: "그 가격은 세금 별도인가요?", en: "Is that price plus tax?" },
      { kr: "조식 포함인가요?", en: "Does that include breakfast?" },
      { kr: "전망 좋은 방으로 받을 수 있을까요?", en: "Can I get a room with a view?" },
      { kr: "체크아웃은 몇 시예요?", en: "What time is checkout?" },
      { kr: "체크아웃을 늦출 수 있을까요?", en: "Can I get a late checkout?" }
    ]
  },
  {
    id: 5,
    title: "휴지가 다 떨어졌어요.",
    category: "호텔",
    page: "p.17-18",
    tip: "We're out of ~ 패턴 하나로 '~가 다 떨어졌어요'를 전부 말할 수 있어요. 프런트에 전화할 땐 This is room ~으로 방 번호부터 말하면 대화가 훨씬 빨라집니다.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "휴지가 다 떨어졌어요.", en: "We're out of toilet paper.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (투숙객)", kr: "안녕하세요, 512호인데요.", en: "Hi, this is room 512.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "좀 올려보내 주시겠어요?", en: "Could you send some up?", note: "" },
      { role: "B", roleLabel: "B (프런트)", kr: "물론이죠. 바로 사람 보내드릴게요.", en: "Of course. I'll send someone right away.", note: "" },
      { role: "B", roleLabel: "B (프런트)", kr: "더 필요한 거 있으세요?", en: "Is there anything else you need?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "아니요, 그게 다예요. 감사합니다.", en: "No, that's all. Thank you.", note: "" },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "하우스키핑입니다. 여기요.", en: "Housekeeping. Here you go.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "완벽해요, 정말 감사합니다.", en: "Perfect, thank you so much.", note: "" }
    ],
    extras: [
      { kr: "수건이 다 떨어졌어요.", en: "We're out of towels." },
      { kr: "샴푸가 다 떨어졌어요.", en: "We're out of shampoo." },
      { kr: "커피 캡슐이 다 떨어졌어요.", en: "We're out of coffee pods." },
      { kr: "베개 좀 더 받을 수 있을까요?", en: "Could I get some extra pillows?" },
      { kr: "담요 하나 더 주시겠어요?", en: "Could I get an extra blanket?" },
      { kr: "방 청소가 아직 안 됐어요.", en: "The room hasn't been cleaned yet." },
      { kr: "에어컨이 안 돼요.", en: "The air conditioning isn't working." },
      { kr: "누가 와서 봐주실 수 있을까요?", en: "Could you send someone to take a look?" }
    ]
  },
  {
    id: 6,
    title: "비슷한 디자인으로 다른 거 있나요?",
    category: "옷가게",
    page: "p.19-20",
    tip: "사이즈나 색상을 말할 땐 꼭 in을 넣으세요 (in a medium, in black). I'm afraid so는 '아쉽지만 그렇다'는 뜻으로 점원이 자주 쓰는 대답이에요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "비슷한 디자인으로 다른 거 있나요?", en: "Do you have anything similar?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "저 꽃무늬 원피스, 마지막이었어요?", en: "That floral dress, was that the last one?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "아쉽지만 그래요. 그게 마지막이었어요.", en: "I'm afraid so. That was the last one.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "몇 가지 보여드릴게요.", en: "Let me show you a few options.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "이건 방금 들어온 거예요.", en: "This one just came in.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "같은 스타일, 다른 무늬예요.", en: "Same style, different print.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "미디엄 사이즈 있어요?", en: "Do you have it in a medium?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "입어봐도 돼요?", en: "Can I try it on?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "탈의실은 뒤쪽 왼편이에요.", en: "The fitting rooms are in the back, on your left.", note: "" }
    ],
    extras: [
      { kr: "이거 작은 사이즈 있나요?", en: "Do you have this in a smaller size?" },
      { kr: "이거 큰 사이즈 있나요?", en: "Do you have this in a bigger size?" },
      { kr: "이거 다른 색 있나요?", en: "Do you have this in a different color?" },
      { kr: "탈의실이 어디예요?", en: "Where's the fitting room?" },
      { kr: "그냥 구경해도 될까요?", en: "Can I just look around?" },
      { kr: "그냥 둘러보는 중이에요, 감사해요.", en: "I'm just looking, thanks." },
      { kr: "이거 세일 중인가요?", en: "Is this on sale?" },
      { kr: "이걸로 할게요.", en: "I'll take this one." }
    ]
  },
  {
    id: 7,
    title: "이거면 충분해요 (will do 패턴)",
    category: "패턴",
    page: "p.21-22",
    tip: "OK만 하던 분들은 will do로 여유 있게 대답해 보세요. '아무거나 괜찮다'는 뉘앙스가 자연스럽게 전달됩니다.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "~면 됩니다 / ~면 충분해요.", en: "will do.", note: "핵심 표현" },
      { role: "B", roleLabel: "B", kr: "어디에 앉으시겠어요?", en: "Where would you like to sit?", note: "" },
      { role: "A", roleLabel: "A", kr: "아무 자리나 돼요.", en: "Any seat will do.", note: "" },
      { role: "B", roleLabel: "B", kr: "원하시는 테이블 있으세요?", en: "Any preference for a table?", note: "" },
      { role: "A", roleLabel: "A", kr: "아무 테이블이나 돼요.", en: "Any table will do.", note: "" },
      { role: "B", roleLabel: "B", kr: "사이즈는요?", en: "What size?", note: "" },
      { role: "A", roleLabel: "A", kr: "작은 거면 돼요.", en: "A small one will do.", note: "" },
      { role: "B", roleLabel: "B", kr: "다른 날도 괜찮으세요?", en: "Is another day okay?", note: "" },
      { role: "A", roleLabel: "A", kr: "내일이면 돼요.", en: "Tomorrow will do.", note: "" },
      { role: "B", roleLabel: "B", kr: "모닝콜 몇 시로 해드릴까요?", en: "What time should we set your wake-up call?", note: "" },
      { role: "A", roleLabel: "A", kr: "3시면 돼요.", en: "Three o'clock will do.", note: "" },
      { role: "B", roleLabel: "B", kr: "피자, 아니면 초밥?", en: "Pizza or sushi?", note: "" },
      { role: "A", roleLabel: "A", kr: "아무거나 돼요.", en: "Anything will do.", note: "" }
    ],
    extras: [
      { kr: "이거면 돼요. / 그거면 됐어요.", en: "This will do. / That'll do." },
      { kr: "보통 사이즈면 돼요.", en: "A regular size will do." },
      { kr: "현금이면 돼요.", en: "Cash will do." },
      { kr: "둘 중 아무거나 돼요.", en: "Either one will do." },
      { kr: "창가 자리면 돼요.", en: "A window seat will do." },
      { kr: "제일 편한 걸로 하면 돼요.", en: "Whatever's easiest will do." },
      { kr: "일단 그거면 됐어요.", en: "That will do for now." }
    ]
  },
  {
    id: 8,
    title: "숙박을 하루 더 연장해 주시겠어요?",
    category: "호텔",
    page: "p.23-24",
    tip: "연장 절차는 방 번호 -> 빈방 확인 -> 요금 확인 -> 결제 순서로 진행돼요. card on file은 체크인 때 등록해 둔 카드라는 뜻이에요.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "숙박을 하루 더 연장해 주시겠어요?", en: "Could you extend my stay for one more night?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (친구)", kr: "어서, 체크아웃 11시야!", en: "Come on, checkout is at eleven!", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠. 방 번호가 어떻게 되세요?", en: "Of course. What's your room number?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "1204호요.", en: "Room 1204.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "빈방 확인해 볼게요.", en: "Let me check availability.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋은 소식이에요, 같은 방이 가능해요.", en: "Good news, the same room is available.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "요금은 동일해요.", en: "It'll be the same rate.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "등록된 카드로 결제할까요?", en: "Should I charge the card on file?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 부탁드려요!", en: "Yes, please!", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "다 됐습니다. 체크아웃은 내일 11시예요.", en: "You're all set. Checkout is at eleven tomorrow.", note: "" }
    ],
    extras: [
      { kr: "이틀 더 연장하고 싶어요.", en: "I'd like to extend my stay by two nights." },
      { kr: "같은 방에 계속 있을 수 있나요?", en: "Can I stay in the same room?" },
      { kr: "추가 숙박도 요금이 같나요?", en: "Is it the same rate for the extra night?" },
      { kr: "하루 일찍 체크아웃하고 싶어요.", en: "I'd like to check out a day early." },
      { kr: "체크아웃을 늦출 수 있을까요?", en: "Can I get a late checkout?" },
      { kr: "체크아웃 후에 짐을 맡길 수 있나요?", en: "Could you hold my luggage after checkout?" },
      { kr: "영수증 한 부 받을 수 있을까요?", en: "Can I get a copy of the receipt?" },
      { kr: "체크아웃할게요.", en: "I'd like to check out, please." }
    ]
  },
  {
    id: 9,
    title: "조식은 몇 시까지예요?",
    category: "호텔",
    page: "p.25-26",
    tip: "1번(start)과 짝을 이루는 표현이에요. start와 end만 바꾸면 되니 두 문장을 세트로 외워두세요.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "조식은 몇 시까지예요?", en: "What time does breakfast end?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "조식은 10시 반에 끝나요.", en: "Breakfast ends at ten thirty.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "어디서 먹어요?", en: "Where is it served?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "2층, 엘리베이터 바로 지나서요.", en: "On the second floor, just past the elevators.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "10시 20분이야. 조식 10시 반에 끝나.", en: "It's ten twenty. Breakfast ends at ten thirty.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "오셨네요. 10시 29분이에요.", en: "You made it. Ten twenty-nine.", note: "" }
    ],
    extras: [
      { kr: "6시 반부터 10시 반까지예요.", en: "It's served from six thirty to ten thirty." },
      { kr: "조식은 몇 시까지인가요?", en: "Until what time is breakfast?" },
      { kr: "조식 먹기엔 너무 늦었나요?", en: "Is it too late for breakfast?" },
      { kr: "아직 조식 하고 있나요?", en: "Are you still serving breakfast?" },
      { kr: "식당은 몇 시에 닫아요?", en: "What time does the restaurant close?" },
      { kr: "바는 몇 시에 닫아요?", en: "What time does the bar close?" },
      { kr: "룸서비스는 24시간 되나요?", en: "Is room service available 24 hours?" },
      { kr: "프런트는 몇 시까지 해요?", en: "What time does the front desk close?" }
    ]
  },
  {
    id: 10,
    title: "아무리 늦어도 3시까지 도착할게요.",
    category: "전화",
    page: "p.27-28",
    tip: "by와 until은 둘 다 '~까지'지만 뜻이 달라요. by 3 = 3시 전에 도착(마감), until 3 = 3시까지 계속(지속). 도착 약속엔 무조건 by를 쓰세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "아무리 늦어도 3시까지 도착할게요.", en: "I'll be there by three at the latest.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (가이드)", kr: "투어는 3시에 출발해요. 몇 시에 오실 수 있어요?", en: "Our tour leaves at three. What time can you get here?", note: "" },
      { role: "B", roleLabel: "B (가이드)", kr: "좋아요. 그때 봬요.", en: "Perfect. See you then.", note: "" },
      { role: "B", roleLabel: "B (가이드)", kr: "지금 어디예요?", en: "Where are you now?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "가는 중이에요.", en: "I'm on my way.", note: "" },
      { role: "B", roleLabel: "B (가이드)", kr: "서두르지 마세요. 천천히 오세요.", en: "No rush. Take your time.", note: "" },
      { role: "B", roleLabel: "B (가이드)", kr: "2시 59분. 딱 맞춰 오셨네요.", en: "Two fifty-nine. Right on time.", note: "" }
    ],
    extras: [
      { kr: "10분 뒤에 도착해요.", en: "I'll be there in ten minutes." },
      { kr: "조금 늦을 것 같아요.", en: "I'm running a little late." },
      { kr: "차가 막혀서요.", en: "I'm stuck in traffic." },
      { kr: "최대한 빨리 갈게요.", en: "I'll be there as soon as I can." },
      { kr: "몇 분만 더 기다려 주실 수 있어요?", en: "Can you wait a few more minutes?" },
      { kr: "거의 다 왔어요.", en: "I'm almost there." },
      { kr: "바로 앞에 있어요.", en: "I'm right outside." },
      { kr: "기다리게 해서 죄송해요.", en: "Sorry to keep you waiting." }
    ]
  },
  {
    id: 11,
    title: "청소는 필요없어요.",
    category: "호텔",
    page: "p.29-30",
    tip: "청소는 거절하고 수건만 받는 조합이 실전에서 제일 많이 쓰여요. 반대로 청소를 원하면 Could you make up the room? 이라고 하면 됩니다.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "오늘은 청소 필요없어요.", en: "I don't need housekeeping today.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "하우스키핑입니다.", en: "Housekeeping.", note: "" },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "정말요? 번거롭지 않아요.", en: "Are you sure? It's no trouble.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 괜찮아요. 그런데 새 수건을 받을 수 있을까요?", en: "I'm sure, thank you. But could I get some fresh towels?", note: "" },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "더 필요한 거 있으세요?", en: "Do you need anything else?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "아니요, 그게 다예요. 정말 감사합니다.", en: "No, that's all. Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "문에 팻말만 걸어두세요.", en: "Just hang the sign on the door.", note: "" }
    ],
    extras: [
      { kr: "방 청소해 주시겠어요?", en: "Could you make up the room, please?" },
      { kr: "나중에 다시 와주시겠어요?", en: "Could you come back later?" },
      { kr: "저희 나가 있는 동안 청소해 주시겠어요?", en: "Could you clean the room while we're out?" },
      { kr: "수건만 부탁드려요.", en: "Just the towels, please." },
      { kr: "시트 갈아주시겠어요?", en: "Could you change the sheets?" },
      { kr: "쓰레기통 비워주시겠어요?", en: "Could you empty the trash?" },
      { kr: "오늘 체크아웃이에요.", en: "We're checking out today." },
      { kr: "정오까지는 방해하지 말아 주세요.", en: "Please don't disturb us until noon." }
    ]
  },
  {
    id: 12,
    title: "분실물 들어온 거 있나요?",
    category: "호텔",
    page: "p.31-32",
    tip: "turn in은 '제출하다'라는 뜻이라 Has anything been turned in? 은 '들어온 게 있나요?'가 돼요. 분실물 대화는 뭘 잃어버렸나 -> 생김새 -> 마지막 위치 순서로 진행됩니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "분실물 들어온 거 있나요?", en: "Has anything been turned in?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "확인해 볼게요. 뭘 잃어버리셨어요?", en: "Let me check. What did you lose?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "제 선글라스요.", en: "My sunglasses.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "어떻게 생겼는지 설명해 주시겠어요?", en: "Can you describe them?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "검정색 동그란 테요.", en: "Black, round frames.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "마지막으로 어디서 보셨어요?", en: "Where did you last have them?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "수영장에서요, 아마.", en: "By the pool, I think.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "죄송하지만 그런 건 안 들어왔어요.", en: "I'm sorry, nothing like that has been turned in.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 그래도 감사합니다.", en: "Okay. Thank you anyway.", note: "" }
    ],
    extras: [
      { kr: "방에 폰을 두고 온 것 같아요.", en: "I think I left my phone in the room." },
      { kr: "지갑을 잃어버렸어요.", en: "I lost my wallet." },
      { kr: "분실물 보관소가 있나요?", en: "Do you have a lost and found?" },
      { kr: "분실물 보관소 확인해 주시겠어요?", en: "Could you check the lost and found?" },
      { kr: "검정 가죽 지갑이에요.", en: "It's a black leather wallet." },
      { kr: "찾으면 연락 주시겠어요?", en: "Could you call me if it turns up?" },
      { kr: "여기 제 번호예요.", en: "Here's my number." },
      { kr: "로비에서 이걸 주웠어요.", en: "I found this in the lobby." }
    ]
  },
  {
    id: 13,
    title: "반으로 잘라주시겠어요?",
    category: "식당",
    page: "p.33-34",
    tip: "We're going to share this.를 먼저 말하면 서버가 알아서 접시를 챙겨줘요. 미국 식당은 1인분이 커서 나눠 먹는 게 아주 흔합니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "이거 반으로 잘라주시겠어요?", en: "Could you cut this in half?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 이거 나눠 먹을 거예요.", en: "Excuse me. We're going to share this.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "그럼요. 접시 하나 더 드릴까요?", en: "Absolutely. Would you like an extra plate?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁드려요.", en: "Yes, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "더 필요한 거 있으세요?", en: "Anything else I can get you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 그게 다예요. 감사합니다.", en: "No, that's all. Thank you.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "금방 올게요.", en: "I'll be right back.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "여기요. 맛있게 드세요.", en: "Here you go. Enjoy.", note: "" }
    ],
    extras: [
      { kr: "이거 4등분해 주시겠어요?", en: "Could you cut this into four?" },
      { kr: "접시 두 개 주시겠어요?", en: "Could we get two plates?" },
      { kr: "디저트 하나 나눠 먹어도 될까요?", en: "Can we share one dessert?" },
      { kr: "이거 두 개로 나눠서 주시겠어요?", en: "Could you split this into two orders?" },
      { kr: "포크 하나 더 주시겠어요?", en: "Can I get an extra fork?" },
      { kr: "냅킨 좀 더 주시겠어요?", en: "Can I get some extra napkins?" },
      { kr: "아이용 작은 양으로 받을 수 있을까요?", en: "Could we get a kids' portion?" },
      { kr: "이거 두 명이 먹기에 충분한가요?", en: "Is this enough for two people?" }
    ]
  },
  {
    id: 14,
    title: "사람이 별로 없을 때가 언제예요?",
    category: "카페·관광지",
    page: "p.35-36",
    tip: "crowded 대신 busy를 써도 같은 뜻이에요. How long is the wait? (대기 얼마나 해요?)와 세트로 외워두면 인기 맛집 앞에서 바로 씁니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "사람이 별로 없을 때가 언제예요?", en: "When is it less crowded?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 지금 대기가 얼마나 돼요?", en: "Excuse me. How long is the wait right now?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "1시간 반 정도요.", en: "About an hour and a half.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "평일 아침, 8시 문 열자마자요.", en: "Weekday mornings, right when we open at eight.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "내일 몇 시에 열어요?", en: "What time do you open tomorrow?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 내일 아침에 다시 올게요.", en: "Okay. We'll come back tomorrow morning.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요. 그때 봬요.", en: "Sounds good. See you then.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "오셨네요. 들어오세요.", en: "You made it. Come on in.", note: "" }
    ],
    extras: [
      { kr: "언제 덜 붐비나요?", en: "When is it less busy?" },
      { kr: "보통 이렇게 붐비나요?", en: "Is it usually this crowded?" },
      { kr: "언제 오는 게 제일 좋아요?", en: "What's the best time to come?" },
      { kr: "대기 명단에 이름 올릴 수 있을까요?", en: "Can I put my name on the list?" },
      { kr: "예약 받으시나요?", en: "Do you take reservations?" },
      { kr: "2명 테이블은 얼마나 기다려야 해요?", en: "How long is the wait for a table for two?" },
      { kr: "바에서 기다려도 될까요?", en: "Can we wait at the bar?" },
      { kr: "줄이 있나요?", en: "Is there a line?" }
    ]
  },
  {
    id: 15,
    title: "세탁하면 줄어드나요?",
    category: "옷가게",
    page: "p.37-38",
    tip: "미국 옷 라벨에는 machine wash / tumble dry low / cold water / dry clean only 같은 단어가 그대로 적혀 있어요. 사기 전에 return policy (환불 규정)는 꼭 확인하세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "세탁하면 줄어드나요?", en: "Will this shrink in the wash?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "미리 줄여놓은 거라 괜찮을 거예요.", en: "It's pre-shrunk, so it should be fine.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "세탁기에 돌려도 돼요?", en: "Can I machine wash it?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네. 찬물 세탁, 건조기는 약하게요.", en: "Yes. Cold water, and tumble dry on low.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "소재가 뭐예요?", en: "What's it made of?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "100% 면이에요.", en: "One hundred percent cotton.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "환불 규정이 어떻게 돼요?", en: "What's your return policy?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "영수증 있으면 30일이요.", en: "Thirty days, with the receipt.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 이걸로 할게요.", en: "Okay. I'll take it.", note: "" }
    ],
    extras: [
      { kr: "이거 드라이클리닝만 해야 하나요?", en: "Is this dry clean only?" },
      { kr: "건조기에 넣어도 돼요?", en: "Can I put it in the dryer?" },
      { kr: "물 빠지나요?", en: "Does the color bleed?" },
      { kr: "구김이 안 가는 소재인가요?", en: "Is it wrinkle-free?" },
      { kr: "안 맞으면 환불 되나요?", en: "Can I return this if it doesn't fit?" },
      { kr: "다른 사이즈로 교환할 수 있나요?", en: "Can I exchange it for a different size?" },
      { kr: "환불하려면 영수증이 필요한가요?", en: "Do I need the receipt to return it?" },
      { kr: "선물용 영수증 받을 수 있을까요?", en: "Can I get a gift receipt?" }
    ]
  },
  {
    id: 16,
    title: "미지근한 물 주시겠어요?",
    category: "식당",
    page: "p.39",
    tip: "warm water라고 하면 뜨거운 물이 나올 수 있어요. 미지근한 물은 room-temperature water! 미국 식당은 기본이 얼음물이라 No ice, please.가 아주 유용합니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "미지근한 물 주시겠어요?", en: "Can I get some room-temperature water?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "영어 하세요?", en: "Do you speak English?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠, 얼음 없이요!", en: "Of course, no ice!", note: "" }
    ],
    extras: [
      { kr: "얼음 빼주세요.", en: "No ice, please." },
      { kr: "얼음 넣어주세요.", en: "With ice, please." },
      { kr: "뜨거운 물 주시겠어요?", en: "Can I get some hot water?" },
      { kr: "생수요, 탄산수요?", en: "Still or sparkling?" },
      { kr: "생수요. / 탄산수요.", en: "Still, please. / Sparkling, please." },
      { kr: "그냥 수돗물이면 돼요.", en: "Just tap water is fine." },
      { kr: "리필해 주시겠어요?", en: "Can I get a refill?" },
      { kr: "물 좀 더 주시겠어요?", en: "Could I get some more water?" }
    ]
  },
  {
    id: 17,
    title: "방문 목적이 무엇인가요?",
    category: "입국심사",
    page: "p.40-41",
    tip: "질문은 visit/trip / visiting으로 바뀌어 나올 수 있지만 대답은 똑같아요. 다음 질문 How long are you staying? 까지 미리 준비해 두면 입국심사가 편해집니다.",
    dialogues: [
      { role: "B", roleLabel: "B (심사관)", kr: "방문 목적이 무엇인가요?", en: "What's the purpose of your visit?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (여행자)", kr: "휴가 왔어요.", en: "I'm here for vacation.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "이번 여행의 목적이 무엇인가요?", en: "What's the purpose of your trip?", note: "" },
      { role: "A", roleLabel: "A (여행자)", kr: "관광하러 왔어요.", en: "I'm here for sightseeing.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "미국에는 왜 방문하셨나요?", en: "Why are you visiting the U.S.?", note: "" },
      { role: "A", roleLabel: "A (여행자)", kr: "업무차 왔어요.", en: "I'm here on business.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "즐거운 시간 되세요.", en: "Enjoy your stay.", note: "" }
    ],
    extras: [
      { kr: "얼마나 머무르세요?", en: "How long are you staying?" },
      { kr: "일주일 정도요.", en: "About a week." },
      { kr: "어디에 머무세요?", en: "Where are you staying?" },
      { kr: "시내 힐튼 호텔에요.", en: "At the Hilton in downtown." },
      { kr: "미국은 처음이세요? 네, 처음이에요.", en: "Is this your first time in the U.S.? Yes, it's my first time." },
      { kr: "혼자 여행하세요? 친구랑 같이 왔어요.", en: "Are you traveling alone? I'm traveling with a friend." },
      { kr: "돌아가는 표 있으세요?", en: "Do you have a return ticket?" },
      { kr: "신고할 물건 있으세요? 아니요, 신고할 거 없어요.", en: "Do you have anything to declare? No, nothing to declare." }
    ]
  },
  {
    id: 18,
    title: "몇 층 가세요?",
    category: "엘리베이터",
    page: "p.42-43",
    tip: "짐 든 사람에게 층을 물어봐 주는 작은 친절 표현이에요. 대답은 숫자만 들으면 되니 5, 9, 12 같은 숫자 듣기 연습도 같이 됩니다.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "몇 층 가세요?", en: "Which floor are you going to?", note: "핵심 표현" },
      { role: "A", roleLabel: "A", kr: "영어 하세요?", en: "Do you speak English?", note: "" },
      { role: "B", roleLabel: "B", kr: "5층이요!", en: "Five, please!", note: "" },
      { role: "B", roleLabel: "B", kr: "9층이요!", en: "Nine!", note: "" },
      { role: "B", roleLabel: "B", kr: "12층이요! 죄송해요! 12층!", en: "Twelve! Sorry! Twelve!", note: "" },
      { role: "B", roleLabel: "B", kr: "같은 층이요!", en: "Same as you!", note: "" }
    ],
    extras: [
      { kr: "몇 층이요? (짧게)", en: "Which floor?" },
      { kr: "7층 좀 눌러주시겠어요?", en: "Could you press seven for me?" },
      { kr: "엘리베이터 좀 잡아주시겠어요?", en: "Could you hold the elevator?" },
      { kr: "올라가세요, 내려가세요?", en: "Going up or down?" },
      { kr: "올라가요. / 내려가요.", en: "Going up. / Going down." },
      { kr: "저 여기서 내려요.", en: "This is my floor." },
      { kr: "실례합니다, 지나갈게요.", en: "Excuse me, coming through." },
      { kr: "화장실은 몇 층에 있어요?", en: "Which floor is the restroom on?" },
      { kr: "헬스장은 몇 층에 있어요?", en: "Which floor is the gym on?" }
    ]
  },
  {
    id: 19,
    title: "화장실 몇 층에 있나요?",
    category: "호텔",
    page: "p.44",
    tip: "미국에선 toilet보다 restroom이 훨씬 자연스러워요. toilet은 변기 자체를 뜻해서 살짝 어색하게 들립니다. 문장 끝의 on을 빼먹지 마세요.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "화장실 몇 층에 있나요?", en: "Which floor is the restroom on?", note: "핵심 표현" },
      { role: "B", roleLabel: "B", kr: "영어 하세요?", en: "Do you speak English?", note: "" },
      { role: "B", roleLabel: "B", kr: "3층이요.", en: "The third floor.", note: "" },
      { role: "B", roleLabel: "B", kr: "3층이란다.", en: "The third floor, dear.", note: "" }
    ],
    extras: [
      { kr: "화장실이 어디예요?", en: "Where is the restroom?" },
      { kr: "이 층에 화장실이 있나요?", en: "Is there a restroom on this floor?" },
      { kr: "근처에 화장실이 있나요?", en: "Is there a restroom nearby?" },
      { kr: "화장실 좀 써도 될까요?", en: "Can I use your restroom?" },
      { kr: "화장실은 손님만 쓸 수 있나요?", en: "Is the restroom for customers only?" },
      { kr: "화장실 비밀번호가 필요한가요?", en: "Do I need a code for the restroom?" },
      { kr: "제일 가까운 화장실은 어디인가요?", en: "Where is the nearest restroom?" },
      { kr: "복도 끝 왼쪽인가요?", en: "Is it down the hall on the left?" }
    ]
  },
  {
    id: 20,
    title: "빨리 나오는 메뉴가 뭐예요?",
    category: "식당",
    page: "p.45-46",
    tip: "in a bit of a hurry는 '조금 급하다'는 뜻이에요. 메뉴 이름만 듣지 말고 How long does it take?로 걸리는 시간도 확인해 보세요. by seven은 '늦어도 7시까지'입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "빨리 나오는 메뉴가 뭐예요?", en: "What's something that comes out quickly?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요. 저희가 좀 급해요.", en: "Hi. We're in a bit of a hurry.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮아요.", en: "No problem.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "치킨 샌드위치가 빨라요. 10분 정도요.", en: "The chicken sandwich is fast, about ten minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "파스타는 얼마나 걸려요?", en: "How long does the pasta take?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "25분 정도요.", en: "About twenty-five minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "치킨 샌드위치 두 개로 할게요.", en: "We'll take two chicken sandwiches.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋은 선택이에요.", en: "Good choice.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그리고 계산서 바로 주시겠어요?", en: "And could we get the check right away?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠.", en: "Absolutely.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "좋아. 10분이야.", en: "Okay. Ten minutes.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "여기 있습니다. 공연 즐겁게 보세요.", en: "Here you go. Enjoy the show.", note: "" }
    ],
    extras: [
      { kr: "15분 안에 준비할 수 있는 메뉴가 뭐예요?", en: "What can you make in fifteen minutes?" },
      { kr: "어떤 요리가 시간이 가장 적게 걸리나요?", en: "Which dishes take the least time?" },
      { kr: "저희는 7시까지 나가야 해요.", en: "We need to leave by seven." },
      { kr: "수프는 바로 나올 수 있나요?", en: "Is the soup ready to serve?" },
      { kr: "빨리 나오는 걸로 주문할 수 있을까요?", en: "Could we order something quick?" },
      { kr: "음식이 나오기 전에 계산해도 될까요?", en: "Could we pay before the food arrives?" },
      { kr: "너무 오래 걸리면 포장해 주실 수 있나요?", en: "If it takes too long, could we get it to go?" },
      { kr: "저희는 30분밖에 없어요.", en: "We only have half an hour." }
    ]
  },
  {
    id: 21,
    title: "조용한 자리로 옮겨주시겠어요?",
    category: "식당",
    page: "p.47-48",
    tip: "somewhere quieter는 '좀 더 조용한 곳'이라는 뜻이에요. somewhere 뒤에 quieter를 붙여 장소의 특징을 말합니다. 옮긴 자리가 마음에 들면 Much better.라고 답해 보세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "좀 더 조용한 자리로 옮겨주시겠어요?", en: "Could you move us somewhere quieter?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "네? 뭐라고요?", en: "Sorry, what?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "음식 어떠냐고 했어.", en: "I said, how's your food?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮으세요?", en: "Is everything okay?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기, 좀 더 조용한 자리로 옮겨주실 수 있을까요?", en: "Actually, could you move us somewhere quieter?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠. 자리 확인해 볼게요.", en: "Of course. Let me see what we have.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "뒤쪽에 자리가 있어요. 괜찮으세요?", en: "There's a table in the back. Would that work?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 좋죠.", en: "That would be great.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "접시 옮겨드릴게요. 따라오세요.", en: "I'll bring your plates over. Follow me.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "이게 더 나으세요?", en: "Is this better?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "훨씬 좋아요. 감사합니다.", en: "Much better. Thank you.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "맛있게 드세요.", en: "Enjoy.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "음식 어때?", en: "How's your food?", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "맛있어.", en: "Good.", note: "" }
    ],
    extras: [
      { kr: "밖에 앉을 수 있을까요?", en: "Would it be possible to sit outside?" },
      { kr: "더 조용한 자리가 있나요?", en: "Is there a quieter table available?" },
      { kr: "스피커에서 좀 더 먼 곳에 앉을 수 있을까요?", en: "Could we sit farther from the speakers?" },
      { kr: "실내 자리가 더 좋겠어요.", en: "We'd prefer a table inside." },
      { kr: "주방에서 떨어진 자리가 있나요?", en: "Is there a table away from the kitchen?" },
      { kr: "더 조용한 자리가 날 때까지 기다려도 될까요?", en: "Could we wait for a quieter table?" },
      { kr: "이 자리가 훨씬 조용하네요.", en: "This spot is much quieter." },
      { kr: "자리를 옮겨주셔서 감사합니다.", en: "Thank you for moving us." }
    ]
  },
  {
    id: 22,
    title: "넓은 자리로 옮겨주시겠어요?",
    category: "식당",
    page: "p.49-50",
    tip: "move us to a bigger table은 '저희를 더 큰 테이블로 옮겨주다'예요. room은 이 대화에서 '방'이 아니라 '공간'이라는 뜻으로도 쓸 수 있어요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "넓은 자리로 옮겨주시겠어요?", en: "Could you move us to a bigger table?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮으세요?", en: "Is everything okay here?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기, 넓은 자리로 옮겨주실 수 있을까요?", en: "Actually, could you move us to a bigger table?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠. 빈자리 확인해 볼게요.", en: "Of course. Let me check what's available.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "창가에 하나 있어요. 괜찮으세요?", en: "There's one by the window. Is that okay?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 좋죠.", en: "That would be great.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요. 접시 옮겨드릴게요. 따라오세요.", en: "Perfect. I'll bring your plates over. Just follow me.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "음료도 가져가도 돼요?", en: "Can we take our drinks?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "제가 가져갈게요. 걱정 마세요.", en: "I've got them. Don't worry.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "이게 더 나으세요?", en: "Is this better?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "훨씬 좋아요. 정말 감사합니다.", en: "Much better. Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "맛있게 드세요.", en: "Enjoy your meal.", note: "" }
    ],
    extras: [
      { kr: "공간이 좀 더 넓은 자리가 있나요?", en: "Do you have a table with more space?" },
      { kr: "4인용 테이블로 받을 수 있을까요?", en: "Could we get a table for four?" },
      { kr: "접시를 다 놓을 공간이 부족해요.", en: "There isn't enough room for all the plates." },
      { kr: "이 테이블 두 개를 붙일 수 있을까요?", en: "Would it be possible to join these two tables?" },
      { kr: "저쪽 테이블에 앉아도 될까요?", en: "Could we sit at the table over there?" },
      { kr: "유모차를 놓을 공간이 필요해요.", en: "We need some space for a stroller." },
      { kr: "부스형 좌석이 더 좋겠어요.", en: "We'd prefer a booth." },
      { kr: "이 테이블이 딱 좋네요.", en: "This table is just right." }
    ]
  },
  {
    id: 23,
    title: "소스를 따로 주시겠어요?",
    category: "식당",
    page: "p.51-52",
    tip: "on the side는 소스나 드레싱을 음식에 붓지 않고 따로 달라는 뜻이에요. go easy on the cheese는 치즈를 '조금만 넣어 달라'는 요청입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "소스를 따로 주시겠어요?", en: "Can I get the sauce on the side?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "손님은 뭐로 드릴까요?", en: "And what can I get for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그릴드 치킨 샐러드로 할게요.", en: "I'll have the grilled chicken salad.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "드레싱은 뭐로 하시겠어요?", en: "What kind of dressing?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "랜치로요. 그리고 소스는 따로 주시겠어요?", en: "Ranch, please. And can I get the sauce on the side?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네, 드레싱 따로요.", en: "Sure, dressing on the side.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그리고 치즈는 조금만 넣어주시겠어요?", en: "And could you go easy on the cheese?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "문제없어요.", en: "Not a problem.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "빵도 같이 나와요?", en: "Does it come with bread?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네. 버터도 같이 드릴까요?", en: "It does. Would you like butter with that?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 그것도 따로 주세요.", en: "Yes, please. On the side too.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다.", en: "You got it.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "네 드레싱 좀 먹어도 돼?", en: "Can I have some of your dressing?", note: "" },
      { role: "B", roleLabel: "B (나)", kr: "네거 시켜.", en: "Get your own.", note: "" }
    ],
    extras: [
      { kr: "드레싱을 별도 용기에 담아주시겠어요?", en: "Can I get the dressing in a separate container?" },
      { kr: "소스는 뿌리지 말아주시겠어요?", en: "Could you leave the sauce off?" },
      { kr: "드레싱은 조금만 주세요.", en: "Just a little dressing, please." },
      { kr: "소스를 따로 조금 더 받고 싶어요.", en: "I'd like extra sauce on the side." },
      { kr: "버터를 따로 받을 수 있을까요?", en: "Could I have the butter separately?" },
      { kr: "소금은 조금만 넣어주시겠어요?", en: "Could you go easy on the salt?" },
      { kr: "찍어 먹는 소스가 같이 나오나요?", en: "Does this come with a dipping sauce?" },
      { kr: "소스를 먼저 조금 맛봐도 될까요?", en: "Could I try a little sauce first?" }
    ]
  },
  {
    id: 24,
    title: "택시 스몰토크",
    category: "택시",
    page: "p.53-55",
    tip: "drop us off는 '우리를 내려주다', pick us up은 '우리를 태우러 오다'예요. Keep the change.는 현금으로 계산하면서 거스름돈은 받지 않겠다고 말하는 표현입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (승객)", kr: "여기서 내려주시겠어요?", en: "Could you drop us off here?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (승객)", kr: "거스름돈은 됐어요.", en: "Keep the change.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (기사)", kr: "어디로 모실까요?", en: "Where to?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "센트럴파크요. 남쪽 입구로요.", en: "Central Park, please. The south entrance.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "알겠습니다.", en: "You got it.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "두 분은 어디서 오셨어요?", en: "So, where are you ladies from?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "저는 시카고에서 왔어요.", en: "I'm from Chicago.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "저는 한국에서 왔어요.", en: "I'm from Korea.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "북한이요, 남한이요?", en: "North or South?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "남한이요.", en: "South.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그냥 확인해 본 거예요! 뉴욕은 처음이세요?", en: "Just checking! Is this your first time in New York?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "네, 처음이에요.", en: "Yes, it's my first time.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "얼마나 머무세요?", en: "How long are you staying?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "일주일 정도요.", en: "About a week.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "지금까지 뭐 보셨어요?", en: "What have you seen so far?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "타임스퀘어만요. 어제 도착했어요.", en: "Just Times Square. We got here yesterday.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "정말 좋아하실 거예요. 할 게 정말 많거든요.", en: "Oh, you're gonna love it. There's so much to do.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "배고프세요? 제가 이 도시 최고의 피자집을 알거든요.", en: "Hey, are you hungry? Because I know the best pizza place in the city.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "거기가 어디예요?", en: "Where is it?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "5번가에 있는 토니스예요. 뉴욕 최고의 피자죠.", en: "It's called Tony's, on Fifth Street. Best slice in New York.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "센트럴파크에서 멀어요?", en: "Is it far from Central Park?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "걸어서 10분이요. 금방이에요.", en: "Ten minutes walking. Easy.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "오늘 차가 많이 막히네요. 죄송해요.", en: "Traffic's bad today. Sorry about that.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "괜찮아요. 저희 안 급해요.", en: "That's okay. We're not in a hurry.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "얼마나 더 걸려요?", en: "How much longer?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "5분 정도요.", en: "About five minutes.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "여기서 내려주시겠어요?", en: "Could you drop us off here?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그럼요.", en: "Sure thing.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "얼마예요?", en: "How much is it?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "23달러 50센트요.", en: "Twenty-three fifty.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "거스름돈은 됐어요.", en: "Keep the change.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "고마워요! 토니한테 샐이 보냈다고 전해주세요. 제 사촌이거든요.", en: "Thanks! And hey, tell Tony that Sal sent you. He's my cousin.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "역시 그럴 줄 알았어요.", en: "Of course he is.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "정말 감사해요. 좋은 하루 보내세요.", en: "Thank you so much. Have a great day.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "피자 먼저?", en: "Pizza first?", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "피자 먼저.", en: "Pizza first.", note: "" }
    ],
    extras: [
      { kr: "저희를 이 주소로 데려다주시겠어요?", en: "Could you take us to this address?" },
      { kr: "다음 모퉁이에서 내려주시겠어요?", en: "Could you drop us off at the next corner?" },
      { kr: "제가 가방을 꺼내는 동안 기다려주시겠어요?", en: "Could you wait while I get my bag?" },
      { kr: "가는 길에 한 군데 들러도 될까요?", en: "Can we make one stop on the way?" },
      { kr: "음악 소리를 조금 줄여주시겠어요?", en: "Could you turn the music down a little?" },
      { kr: "요금이 미터기에 표시되나요?", en: "Is the fare shown on the meter?" },
      { kr: "영수증 좀 받을 수 있을까요?", en: "Could I get a receipt, please?" },
      { kr: "트렁크를 열어주시겠어요?", en: "Could you open the trunk, please?" }
    ]
  },
  {
    id: 25,
    title: "입국심사 예상 질문",
    category: "공항 입국심사",
    page: "p.56-58",
    tip: "for five days는 '5일 동안', on the tenth는 '10일에'예요. 답변을 연습할 때는 자신의 실제 여행 목적과 일정에 맞게 바꿔 말해 보세요.",
    dialogues: [
      { role: "A", roleLabel: "A (심사관)", kr: "방문 목적이 무엇인가요?", en: "What's the purpose of your visit?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (여행자)", kr: "휴가 왔어요.", en: "I'm here for vacation.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "나는 저쪽으로 가야 해. 밖에서 기다릴게.", en: "I have to go that way. I'll wait for you outside.", note: "" },
      { role: "A", roleLabel: "A (나)", kr: "잘할 거야.", en: "You'll be fine.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "방문 목적이 무엇인가요?", en: "What's the purpose of your visit?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "휴가 왔어요.", en: "I'm here for vacation.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "얼마나 머무세요?", en: "How long are you staying?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "5년이요.", en: "Five years.", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "아니, 아니요! 5일이요!", en: "No, no! Five days!", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "어디서 지내세요?", en: "Where are you staying?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "시내 호텔에서요.", en: "At a hotel downtown.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "미국은 처음이세요?", en: "Is this your first time in the U.S.?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "네, 처음이에요.", en: "Yes, it's my first time.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "혼자 여행하세요?", en: "Are you traveling alone?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "아니요, 친구랑요.", en: "No, with a friend.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "네. 카메라 봐주세요.", en: "Okay. Look at the camera, please.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "긴장 푸세요. 문제 있는 거 아니에요.", en: "You can relax. You're not in trouble.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "돌아가는 표 있으세요?", en: "Do you have a return ticket?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "네. 10일에 돌아가요.", en: "Yes. I fly back on the tenth.", note: "" },
      { role: "A", roleLabel: "A (심사관)", kr: "미국에 오신 걸 환영합니다. 즐거운 시간 되세요.", en: "Welcome to the United States. Enjoy your stay.", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "정말 감사합니다.", en: "Thank you so much.", note: "" },
      { role: "A", roleLabel: "A (세관원)", kr: "신고할 물건 있으세요?", en: "Do you have anything to declare?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "과자 조금이요.", en: "Just some snacks.", note: "" },
      { role: "A", roleLabel: "A (세관원)", kr: "고기나 과일 있어요?", en: "Any meat or fruit?", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "아니요, 과자만요.", en: "No, only snacks.", note: "" },
      { role: "A", roleLabel: "A (세관원)", kr: "가방 좀 열어주시겠어요? 과자가 정말 많네요.", en: "Can you open your bag, please? That's a lot of snacks.", note: "" },
      { role: "B", roleLabel: "B (여행자)", kr: "선물이에요. 뭐, 일부는요.", en: "They're gifts. Well, some of them.", note: "" },
      { role: "A", roleLabel: "A (세관원)", kr: "가셔도 됩니다.", en: "You're good to go.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "어떻게 됐어?", en: "How did it go?", note: "" },
      { role: "B", roleLabel: "B (나)", kr: "나 5년이라고 했어.", en: "I said five years.", note: "" }
    ],
    extras: [
      { kr: "친구들을 만나러 왔어요.", en: "I'm visiting friends." },
      { kr: "여기서 열흘 머물 예정이에요.", en: "I'll be here for ten days." },
      { kr: "친구 집에서 지낼 거예요.", en: "I'm staying with a friend." },
      { kr: "여기 호텔 예약 내역입니다.", en: "Here's my hotel reservation." },
      { kr: "돌아가는 비행기는 금요일이에요.", en: "My return flight is on Friday." },
      { kr: "저는 영어 강사로 일하고 있어요.", en: "I work as an English teacher." },
      { kr: "질문을 다시 말씀해 주시겠어요?", en: "Could you repeat the question, please?" },
      { kr: "조금 더 천천히 말씀해 주시겠어요?", en: "Could you speak a little more slowly?" }
    ]
  },
  {
    id: 26,
    title: "탑승 수속 - 짐 무게 초과",
    category: "공항·탑승 수속",
    page: "p.59-61",
    tip: "overweight는 '무게 초과인', under the limit은 '제한 이하인'이라는 뜻이에요. boarding은 '탑승'이므로 출발 시간과 구분해서 질문을 듣고 답해 보세요.",
    dialogues: [
      { role: "A", roleLabel: "A (직원)", kr: "짐이 무게 초과예요.", en: "Your bag is overweight.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (승객)", kr: "수수료가 얼마예요?", en: "How much is the fee?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (직원)", kr: "안녕하세요! 오늘 어디로 가세요?", en: "Hi! Where are you flying today?", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "로스앤젤레스요.", en: "Los Angeles.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "여권 보여주시겠어요?", en: "May I see your passport, please?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "원하시는 좌석 있으세요?", en: "Do you have a seat preference?", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "창가 자리로 주세요.", en: "Window seat, please.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "짐을 저울에 올려주세요.", en: "Please put your bag on the scale.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "죄송해요. 짐이 무게 초과예요.", en: "I'm sorry. Your bag is overweight.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "수수료가 얼마냐고 물어봐.", en: "Ask, how much is the fee?", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "수수료가 얼마예요?", en: "How much is the fee?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "100달러예요.", en: "It's one hundred dollars.", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "100달러요?", en: "One hundred dollars?", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "짐 좀 빼도 될까요?", en: "Can I take some things out?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "그럼요. 저쪽에서 다시 싸시면 돼요.", en: "Sure. You can repack over there.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "좋아요. 이제 기준 이하예요.", en: "Okay. Now you're under the limit.", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "좋아요!", en: "Great!", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "탑승권 여기 있습니다. 탑승구는 B12예요.", en: "Here's your boarding pass. Your gate is B twelve.", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "탑승은 몇 시에 시작해요?", en: "What time does boarding start?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "탑승은 2시 40분에 시작해요. 30분 전까지 탑승구로 가주세요.", en: "Boarding starts at two forty. Please be at the gate thirty minutes early.", note: "" },
      { role: "B", roleLabel: "B (승객)", kr: "정말 감사합니다.", en: "Thank you so much.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "잘 가요.", en: "Stay cool.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "괜찮아?", en: "Are you okay?", note: "" },
      { role: "B", roleLabel: "B (나)", kr: "괜찮아. 완전 괜찮아.", en: "I'm fine. I'm totally fine.", note: "" }
    ],
    extras: [
      { kr: "제 가방이 제한 무게를 얼마나 초과했나요?", en: "How much over the limit is my bag?" },
      { kr: "이 가방의 무게 제한은 얼마인가요?", en: "What's the weight limit for this bag?" },
      { kr: "물건 몇 개를 기내 가방으로 옮겨도 될까요?", en: "Can I move some items into my carry-on?" },
      { kr: "제 항공권에 위탁 수하물이 포함되어 있나요?", en: "Is a checked bag included in my ticket?" },
      { kr: "가방 하나를 추가로 부치면 얼마인가요?", en: "How much is an extra checked bag?" },
      { kr: "무게를 다시 재도 될까요?", en: "Could I weigh it again?" },
      { kr: "수하물 요금은 어디서 내나요?", en: "Where can I pay the baggage fee?" },
      { kr: "이 가방을 위탁 수하물로 부쳐야 하나요?", en: "Do I need to check this bag?" }
    ]
  },
  {
    id: 27,
    title: "가장 작은 사이즈로 주시겠어요?",
    category: "아이스크림 가게",
    page: "p.62-63",
    tip: "the smallest size는 '가장 작은 사이즈'예요. small보다 더 작은 크기를 찾는 a smaller size와 구분해 보세요. Cup or cone?에는 A cup, please.처럼 짧게 답하면 됩니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "가장 작은 사이즈로 주시겠어요?", en: "Could I get the smallest size?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요! 뭐 드릴까요?", en: "Hi there! What can I get for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "딸기 맛 맛보기 해도 될까요?", en: "Can I try a sample of the strawberry?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠!", en: "Of course!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 맛있다.", en: "That's so good.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "가장 작은 사이즈로 주시겠어요?", en: "Could I get the smallest size?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "가장 작은 사이즈로 주시겠어요?", en: "Could I get the smallest size, please?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네, 스몰 하나요. 컵이요, 콘이요?", en: "Sure, one small. Cup or cone?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "컵으로 주세요.", en: "A cup, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "토핑 하시겠어요? 스프링클, 초코칩, 견과류 있어요.", en: "Any toppings? We have sprinkles, chocolate chips, and nuts.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "스프링클만 조금 주세요.", en: "Just some sprinkles, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "손님은요?", en: "And for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "초콜릿, 라지 콘으로 주세요.", en: "Chocolate, a large cone, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "바로 드릴게요.", en: "Coming right up.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "9달러 50센트입니다.", en: "That'll be nine fifty.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "카드 돼요?", en: "Can I pay by card?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네. 여기 대주세요.", en: "Sure. Just tap it here.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "냅킨 좀 주시겠어요?", en: "Could I get some napkins?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "여기요. 맛있게 드세요!", en: "Here you go. Enjoy!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다!", en: "Thank you!", note: "" }
    ],
    extras: [
      { kr: "여기서 제일 작은 사이즈가 뭐예요?", en: "What's the smallest size you have?" },
      { kr: "한 스쿱만 주세요.", en: "Just one scoop, please." },
      { kr: "작은 컵으로 주시겠어요?", en: "Could I have a small cup?" },
      { kr: "한 컵에 두 가지 맛을 담아주시겠어요?", en: "Can I have two flavors in one cup?" },
      { kr: "바닐라 맛을 맛봐도 될까요?", en: "Could I try the vanilla?" },
      { kr: "토핑은 빼주세요.", en: "No toppings, please." },
      { kr: "이 컵 뚜껑을 받을 수 있을까요?", en: "Could I have a lid for this?" },
      { kr: "숟가락 하나 더 주시겠어요?", en: "Could I get an extra spoon?" }
    ]
  },
  {
    id: 28,
    title: "조금만 더 보고 주문할게요",
    category: "식당",
    page: "p.64-65",
    tip: "Could we have a few more minutes?는 '몇 분만 더 주시겠어요?'라는 정중한 요청이에요. 직원이 Take your time.이라고 하면 '천천히 고르세요'라는 뜻입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "조금만 더 보고 주문할게요.", en: "Could we have a few more minutes?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요! 주문하시겠어요?", en: "Hi there! Are you ready to order?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "조금만 더 보고 주문할게요.", en: "Could we have a few more minutes?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠, 천천히 보세요!", en: "Of course, take your time!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "조금만 더 보고 주문할게요.", en: "Could we have a few more minutes?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "음료부터 드릴까요?", en: "Can I get you started with some drinks?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "조금만 더 시간 주시겠어요?", en: "Could we have a few more minutes?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮아요!", en: "No problem!", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "메뉴 궁금한 거 있으세요?", en: "Any questions about the menu?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "조금만 더 보고 주문할게요.", en: "Could we have a few more minutes?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다! 그럼, 주문하시겠어요?", en: "You got it! So, are you ready to order?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네! 파스타로 할게요.", en: "Yes! I'll have the pasta, please.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저는 스테이크로 할게요.", en: "And I'll have the steak.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋은 선택이에요! 바로 준비해 드릴게요.", en: "Great choices! Coming right up.", note: "" }
    ],
    extras: [
      { kr: "아직 고르는 중이에요.", en: "We're still deciding." },
      { kr: "몇 분 뒤에 다시 와주시겠어요?", en: "Could you come back in a few minutes?" },
      { kr: "일행 한 명을 더 기다리고 있어요.", en: "We're waiting for one more person." },
      { kr: "음료부터 주문해도 될까요?", en: "Could we order our drinks first?" },
      { kr: "두 사람이 먹을 만한 메뉴로 뭘 추천하세요?", en: "What would you recommend for two people?" },
      { kr: "이 요리에 무엇이 들어가는지 알려주시겠어요?", en: "Could you tell me what's in this dish?" },
      { kr: "파스타와 치킨 중에 고르고 있어요.", en: "I'm deciding between the pasta and the chicken." },
      { kr: "이제 주문할게요. 감사합니다.", en: "We're ready now, thank you." }
    ]
  },
  {
    id: 29,
    title: "스테이크 주문하기",
    category: "식당",
    page: "p.66-69",
    tip: "How would you like that cooked?는 고기의 굽기를 묻는 질문이에요. Medium rare, please.처럼 답하세요. Enjoy your meal.에는 Thank you.라고 답하면 됩니다.",
    dialogues: [
      { role: "B", roleLabel: "B (서버)", kr: "굽기는 어떻게 해드릴까요?", en: "How would you like that cooked?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "미디엄 레어로 주세요.", en: "Medium rare, please.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "안녕하세요. 음료부터 드릴까요?", en: "Good evening, ladies. Can I start you off with something to drink?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저는 물이면 돼요.", en: "Just water for me, please.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저는 레모네이드 주세요.", en: "I'll have a lemonade.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "좋아요. 주문하시겠어요, 아니면 좀 더 보시겠어요?", en: "Great. Are you ready to order, or do you need a minute?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "주문할게요.", en: "I think we're ready.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "립아이로 할게요.", en: "I'll have the ribeye, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "네. 굽기는 어떻게 해드릴까요?", en: "Sure. How would you like that cooked?", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "레어는 안이 빨갛고, 미디엄은 분홍빛이고, 웰던은 완전히 익힌 거야.", en: "Rare is red inside. Medium is pink. Well-done is cooked all the way.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "미디엄 레어로 주세요.", en: "Medium rare, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "좋은 선택이에요.", en: "Perfect choice.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "사이드가 두 개 나와요. 으깬 감자, 감자튀김, 구운 채소 중에서요.", en: "It comes with two sides. Mashed potatoes, fries, or grilled vegetables?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "으깬 감자랑 구운 채소로 주세요.", en: "Mashed potatoes and grilled vegetables, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "수프, 샐러드 중에 뭐로 시작하시겠어요?", en: "Soup or salad to start?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "샐러드로 주세요.", en: "Salad, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "드레싱은 뭐로 하시겠어요?", en: "What kind of dressing?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "랜치로, 따로 주세요.", en: "Ranch, on the side.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "알겠습니다.", en: "You got it.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저도 같은 스테이크로, 웰던으로요.", en: "Same steak for me, but well-done.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "바로 주문 넣을게요.", en: "I'll put that in right away.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "미디엄 레어 립아이 나왔습니다. 그리고 이건 웰던이요.", en: "Here's your ribeye, medium rare. And the well-done for you.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "맛있게 드세요.", en: "Enjoy your meal.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "맛있게 드세요! (실수)", en: "You too!", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "음식 괜찮으세요? 굽기는 원하시는 대로 됐나요?", en: "How is everything? Is the steak cooked the way you like?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "완벽해요. 감사합니다. 스테이크 소스 좀 주시겠어요?", en: "It's perfect. Thank you. Could I get some steak sauce?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠, 잠시만요.", en: "Of course, one moment.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "디저트 하시겠어요?", en: "Can I interest you in some dessert?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 괜찮아요. 너무 배불러요. 계산서 주시겠어요?", en: "No, thank you. I'm so full. Could we get the check, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "같이 계산하세요, 따로 하세요?", en: "Together or separate?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "같이요.", en: "Together, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "금방 가져다드릴게요. 정말 감사합니다. 좋은 밤 보내세요.", en: "I'll be right back with that. Thank you so much. Have a great night.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다. 좋은 밤 보내세요.", en: "Thank you. You too.", note: "" }
    ],
    extras: [
      { kr: "미디엄으로 구워주시겠어요?", en: "Could you cook it medium, please?" },
      { kr: "어떤 사이드 메뉴 중에서 고를 수 있나요?", en: "What sides can I choose from?" },
      { kr: "감자튀김 대신 밥으로 받을 수 있나요?", en: "Can I get rice instead of fries?" },
      { kr: "드레싱을 따로 주시겠어요?", en: "Could I have the dressing on the side?" },
      { kr: "이거 미디엄 레어로 주문했어요.", en: "I ordered this medium rare." },
      { kr: "조금 더 익혀주시겠어요?", en: "Could you cook it a little more?" },
      { kr: "디저트 메뉴를 볼 수 있을까요?", en: "Could we see the dessert menu?" },
      { kr: "이 접시들을 치워주시겠어요?", en: "Could you clear these plates, please?" }
    ]
  },
  {
    id: 30,
    title: "고속도로가 꽉 막혀 있어요 (추석 특집)",
    category: "교통",
    page: "p.70-71",
    tip: "be backed up은 차량이 빠져나가지 못하고 밀려 있는 상태를 말해요. bumper to bumper는 차들이 앞뒤로 바짝 붙어 있는 모습이고, stretch my legs는 잠깐 다리를 푼다는 뜻입니다.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "고속도로가 꽉 막혀 있어요.", en: "The highway is backed up.", note: "핵심 표현" },
      { role: "A", roleLabel: "A", kr: "고속도로가 꽉 막혀 있어.", en: "The highway is backed up.", note: "" },
      { role: "A", roleLabel: "A", kr: "고속도로가 꽉 막혀 있어.", en: "The highway is backed up.", note: "" },
      { role: "B", roleLabel: "B", kr: "도착까지 얼마나 걸려?", en: "How long will it take to get there?", note: "" },
      { role: "A", roleLabel: "A", kr: "3시간 더 걸린대.", en: "It says three more hours.", note: "" },
      { role: "B", roleLabel: "B", kr: "다른 길은 없어?", en: "Is there another way?", note: "" },
      { role: "A", roleLabel: "A", kr: "다들 명절이라 고향에 가는 거야. 모든 길이 다 이래.", en: "Everyone is going home for the holiday. Every road is like this.", note: "" },
      { role: "B", roleLabel: "B", kr: "움직이기는 하는 거야?", en: "Are we even moving?", note: "" },
      { role: "A", roleLabel: "A", kr: "전혀. 차가 꼬리에 꼬리를 물었어.", en: "Not at all. It's bumper to bumper.", note: "" },
      { role: "B", roleLabel: "B", kr: "휴게소에 들를 수 있어? 다리 좀 펴야겠어.", en: "Can we stop at a rest area? I need to stretch my legs.", note: "" },
      { role: "A", roleLabel: "A", kr: "좋은 생각이야. 다음 출구에 하나 있어.", en: "Good idea. There's one at the next exit.", note: "" },
      { role: "B", roleLabel: "B", kr: "음식 맛있어?", en: "Do they have good food?", note: "" },
      { role: "A", roleLabel: "A", kr: "최고야. 가보면 알아.", en: "The best. You'll see.", note: "" },
      { role: "A", roleLabel: "A", kr: "도착했다!", en: "We made it!", note: "" },
      { role: "B", roleLabel: "B", kr: "겨우 4시간 늦었을 뿐이야.", en: "Only four hours late.", note: "" }
    ],
    extras: [
      { kr: "거의 움직이지 못하고 있어요.", en: "We're barely moving." },
      { kr: "교통체증에 갇혀 있어요.", en: "We're stuck in a traffic jam." },
      { kr: "휴대폰으로 교통 상황 좀 확인해 줄래?", en: "Can you check the traffic on your phone?" },
      { kr: "더 빠른 경로가 있나요?", en: "Is there a faster route?" },
      { kr: "고속도로는 피해서 가자.", en: "Let's avoid the highway." },
      { kr: "늦을 수도 있겠어요.", en: "We might be late." },
      { kr: "거의 도착하면 알려드릴게요.", en: "I'll let you know when we're close." },
      { kr: "다음 휴게소에서 잠깐 쉬자.", en: "Let's take a break at the next rest area." }
    ]
  },
  {id: 31,
    title: "기념품샵 할인 행사",
    category: "기념품샵",
    page: "p.72-74",
    tip: "on sale은 '세일 중인', twenty percent off는 '20% 할인'이에요. 할인 표시를 확인하는 Is this on sale too?와 결제에 반영됐는지 묻는 Did the discount apply?를 함께 연습해 보세요.",
    dialogues: [
      { role: "B", roleLabel: "B (점원)", kr: "어서 오세요! 오늘 할인 행사 중이에요. 머그컵이랑 티셔츠는 두 개 사면 하나 공짜예요.", en: "Welcome! We're having a sale today. Buy two, get one free on all mugs and T-shirts.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이것도 세일이에요?", en: "Is this on sale too?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (점원)", kr: "죄송해요, 스노볼은 제외예요. 대신 열쇠고리는 20% 할인이에요.", en: "Sorry, snow globes aren't included. But keychains are twenty percent off.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아, 그렇군요!", en: "Oh, okay!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 이 머그컵 두 개 사면 티셔츠가 공짜인 거예요?", en: "So if I buy these two mugs, is the T-shirt free?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "머그컵이랑 티셔츠는 같이 계산돼서 맞아요. 제일 싼 게 공짜예요.", en: "Mugs and T-shirts count together, so yes. The cheapest one is free.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "완벽해요!", en: "Perfect!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이거 미디엄 사이즈 있어요?", en: "Do you have this in a medium?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "여기 미디엄이요.", en: "Here's a medium.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "파란색도 있어요?", en: "Do you have it in blue?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "흰색이랑 회색만 있어요, 죄송해요.", en: "Only in white and gray, sorry.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "회색도 괜찮아요.", en: "Gray is fine.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "이거 다 누구 거야?", en: "Who are all these for?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "엄마, 아빠, 언니, 이모, 사장님...", en: "Mom, Dad, my sister, my aunt, my boss...", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "총 84달러입니다.", en: "Your total is eighty-four dollars.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "두 개 사면 하나 공짜, 적용됐나요?", en: "Did the buy two, get one free apply?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (점원)", kr: "아, 맞네요. 적용이 안 됐어요. 바로 고쳐드릴게요.", en: "Oh, you're right. It didn't go through. Let me fix that.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "네. 할인 적용해서 62달러예요.", en: "Okay. With the discount, it's sixty-two dollars.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다!", en: "Thank you!", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "현금이요, 카드요?", en: "Cash or card?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "카드요.", en: "Card, please.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "영수증 드릴까요?", en: "Would you like your receipt?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 주세요.", en: "Yes, please.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이거 선물 포장해주시겠어요?", en: "Could you gift wrap these?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "그럼요. 따로 포장해 드릴까요, 같이 해드릴까요?", en: "Sure. Would you like them wrapped separately or together?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "따로 해주세요. 각각 다른 사람 거라서요.", en: "Separately, please. They're for different people.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "물론이죠. 5분 정도 걸려요.", en: "Of course. It'll take about five minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요. 천천히 하세요.", en: "No problem. Take your time.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "여기 있습니다. 이용해 주셔서 감사해요!", en: "Here you go. Thanks for shopping with us!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사합니다. 좋은 하루 보내세요!", en: "Thank you so much. Have a great day!", note: "" }
    ],
    extras: [
      { kr: "이 상품에도 이 할인이 적용되나요?", en: "Does this discount apply to this item?" },
      { kr: "색상을 섞어서 골라도 되나요?", en: "Can I mix and match the colors?" },
      { kr: "이미 할인이 반영된 건가요?", en: "Is the discount already included?" },
      { kr: "할인 후에는 얼마인가요?", en: "How much is it after the discount?" },
      { kr: "총금액을 다시 확인해 주시겠어요?", en: "Could you check the total again?" },
      { kr: "안내문에는 20% 할인이라고 되어 있어요.", en: "The sign says twenty percent off." },
      { kr: "이 혜택을 받으려면 쿠폰이 필요한가요?", en: "Do I need a coupon for this offer?" },
      { kr: "세일 상품도 반품할 수 있나요?", en: "Can I return sale items?" }
    ]
  },
  {
    id: 32,
    title: "선물 포장해주시겠어요?",
    category: "선물 포장",
    page: "p.75-77",
    tip: "gift wrap은 '선물 포장하다', take the price tag off는 '가격표를 떼다'예요. 하나면 this, 여러 개면 these를 써서 Could you gift wrap this / these?로 요청해 보세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "이거 선물 포장해주시겠어요?", en: "Could you gift wrap this?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요. 이거 선물 포장해주시겠어요?", en: "Hi. Could you gift wrap this, please?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "물론이죠. 특별한 분께 드리는 선물인가요?", en: "Of course. Is it a gift for someone special?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "엄마 선물이에요.", en: "It's for my mom.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "정말 좋네요.", en: "How lovely.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "선물 포장비가 있나요?", en: "Is there a charge for gift wrapping?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "아니요, 무료예요.", en: "No, it's complimentary.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "포장지는 뭐로 하시겠어요? 금색, 빨간색, 흰색이 있어요.", en: "Which paper would you like? We have gold, red, and white.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "흰색으로 주세요.", en: "White, please.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "리본은요?", en: "And a ribbon?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "분홍 리본으로 주세요. 스카프랑 맞추려고요.", en: "A pink ribbon, please. To match the scarf.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "좋은 선택이에요.", en: "Great choice.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아, 가격표 좀 떼주시겠어요?", en: "Oh, could you take the price tag off?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "이미 뗐어요.", en: "Already done.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그리고 혹시 모르니 교환 영수증도 주시겠어요?", en: "And could I get a gift receipt, just in case?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "그럼요, 쇼핑백에 넣어드릴게요.", en: "Sure, I'll put it in the bag.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "여기 있습니다. 어머님이 좋아하시길 바라요.", en: "Here you go. I hope your mom loves it.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "그거 정말 엄마 거 맞아?", en: "Are you sure that's for your mom?", note: "" },
      { role: "B", roleLabel: "B (나)", kr: "하나 더 살까 봐.", en: "Maybe I'll buy two.", note: "" }
    ],
    extras: [
      { kr: "물건마다 따로 포장해주시겠어요?", en: "Could you wrap each item separately?" },
      { kr: "가격은 표시하지 말아주시겠어요?", en: "Could you leave the price off?" },
      { kr: "다른 리본을 골라도 될까요?", en: "Can I choose a different ribbon?" },
      { kr: "이것을 선물용 쇼핑백에 넣어주시겠어요?", en: "Could you put this in a gift bag?" },
      { kr: "작은 카드를 함께 넣어도 될까요?", en: "Could I include a small card?" },
      { kr: "영수증은 선물 안에 넣지 말아주세요.", en: "Please don't put the receipt inside the gift." },
      { kr: "선물 받는 사람이 교환할 수 있나요?", en: "Can the recipient exchange it?" },
      { kr: "선물 포장은 얼마나 걸리나요?", en: "How long will the gift wrapping take?" }
    ]
  },
  {
    id: 33,
    title: "음식을 주문했는데 안 나왔을 때",
    category: "식당·주문 누락",
    page: "p.78-80",
    tip: "'We ordered about minutes ago.'를 먼저 말하면 직원이 상황을 바로 이해해요. on us와 on the house는 둘 다 '가게가 낼게요 = 무료예요'라는 뜻으로, 실수를 사과할 때 미국 식당에서 자주 들려요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "저희 주문 좀 확인해 주시겠어요?", en: "Could you check on our order?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "주문하시겠어요?", en: "Are you ready to order?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "치킨 파스타로 할게요.", en: "I'll have the chicken pasta, please.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저는 치즈버거로 할게요.", en: "And I'll have the cheeseburger.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "좋은 선택이에요. 15분 정도 걸려요.", en: "Great choice. It'll be about fifteen minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례합니다. 40분 전쯤 주문했는데요. 주문 좀 확인해 주시겠어요?", en: "Excuse me. We ordered about forty minutes ago. Could you check on our order?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어머, 정말 죄송해요. 바로 주방에 확인해 볼게요.", en: "Oh, I'm so sorry. Let me check with the kitchen right away.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "정말 죄송해요. 주문이 주방에 안 들어갔던 것 같아요.", en: "I'm so sorry. It looks like your order never went through to the kitchen.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이런. 얼마나 걸려요?", en: "Oh no. How long will it take?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "10분 정도요. 빨리 해달라고 할게요.", en: "About ten minutes. I'll put a rush on it.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "기다리는 동안 빵 좀 더 주시겠어요?", en: "Could we get some more bread while we wait?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 그리고 오늘 음료는 저희가 살게요.", en: "Of course. And your drinks are on us today.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사해요, 정말 친절하시네요.", en: "Thank you, that's very kind.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "치킨 파스타와 치즈버거 나왔습니다. 다시 한번 기다리게 해서 죄송해요.", en: "Here's the chicken pasta, and the cheeseburger. Again, sorry for the wait.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요. 정말 맛있어 보여요.", en: "No worries. It looks amazing.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "음식은 괜찮으세요?", en: "How is everything?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "기다린 보람이 있네요!", en: "Worth the wait!", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "그리고 디저트는 서비스예요.", en: "And dessert is on the house.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 디저트도 확인해 주실래요?", en: "Then could you check on our dessert, too?", note: "" }
    ],
    extras: [
      { kr: "꽤 오래 기다렸어요.", en: "We've been waiting for a while." },
      { kr: "저희 음식 거의 다 됐나요?", en: "Is our food almost ready?" },
      { kr: "주문이 누락된 것 같아요.", en: "I think our order got lost." },
      { kr: "음식 하나가 아직 안 나왔어요.", en: "We're missing one dish." },
      { kr: "얼마나 더 걸릴까요?", en: "How much longer will it be?" },
      { kr: "저희가 좀 급해서요.", en: "We're in a bit of a hurry." },
      { kr: "그 음식은 취소할 수 있을까요?", en: "Could we cancel that dish?" },
      { kr: "계산서 좀 주시겠어요?", en: "Could we get the check, please?" }
    ]
  },
  {
    id: 34,
    title: "새치기 당했을 때 대처법",
    category: "빵집·줄 서기",
    page: "p.81-83",
    tip: "I think로 시작하면 따지는 말이 아니라 부드럽게 알려주는 말투가 돼요. cut in (line)은 '새치기하다', Go ahead는 '먼저 하세요'예요. 새치기를 지적하는 말과, 반대로 내가 줄 서 있는지 확인하는 말(Are you in line?)을 같이 익혀두세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "실례지만, 줄은 저기서부터예요.", en: "Excuse me, I think the line starts back there.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "우리 20분째 기다리고 있어.", en: "We've been waiting for twenty minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "크루아상 냄새가 벌써 나는 것 같아.", en: "I can almost smell the croissants.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요.", en: "Excuse me.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요! 줄은 저기서부터예요.", en: "Excuse me! I think the line starts back there.", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "아, 죄송해요. 뭐라고 하셨어요?", en: "Oh, sorry. What was that?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "줄은 저기서부터예요. 저희가 먼저 왔어요.", en: "The line starts back there. We were here first.", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "이런, 줄을 전혀 못 봤어요. 정말 죄송해요.", en: "Oh no, I didn't see the line at all. I'm so sorry.", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "여기가 픽업 카운터인 줄 알았어요.", en: "I thought this was the pickup counter.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "헷갈릴 만해요. 픽업 카운터는 저쪽이에요.", en: "Easy mistake. The pickup counter is over there.", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "고마워요. 제 실수예요.", en: "Thank you. My bad.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "생각보다 쉬웠어.", en: "That was easier than I thought.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "봤지? 정중하지만 분명하게 말하면 돼.", en: "See? Just be polite but clear.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "다음 분이요!", en: "Next, please!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요. 크루아상 두 개랑 라떼 두 잔 주세요.", en: "Hi. Two croissants and two lattes, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "바로 준비해 드릴게요.", en: "Coming right up.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례지만, 줄 서신 거예요?", en: "Excuse me, are you in line?", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "아니요, 저희는 이미 주문했어요. 먼저 하세요.", en: "No, we already ordered. Go ahead.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "고마워요.", en: "Thank you, dear.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "크루아상 두 개, 라떼 두 잔 나왔습니다!", en: "Two croissants and two lattes!", note: "" },
      { role: "B", roleLabel: "B (행인)", kr: "이 쿠키 드세요. 새치기해서 다시 한번 죄송해요.", en: "These cookies are for you. Sorry again for cutting in.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "어머, 고마워요! 정말 친절하시네요.", en: "Aww, thank you! That's so sweet.", note: "" }
    ],
    extras: [
      { kr: "여기가 줄 끝인가요?", en: "Is this the end of the line?" },
      { kr: "이거 화장실 줄인가요?", en: "Is this the line for the restroom?" },
      { kr: "줄이 어디서부터예요?", en: "Where does the line start?" },
      { kr: "죄송해요, 먼저 오셨어요?", en: "Sorry, were you here first?" },
      { kr: "저희 여기서 기다리고 있었어요.", en: "We've been waiting here." },
      { kr: "제 자리 좀 맡아주시겠어요?", en: "Could you save my spot?" },
      { kr: "금방 올게요.", en: "I'll be right back." },
      { kr: "제 앞으로 먼저 가셔도 돼요.", en: "You can go ahead of me." }
    ]
  },
  {
    id: 35,
    title: "처음 보는 사람 셔츠에 커피를 쏟았을 때",
    category: "카페·사과하기",
    page: "p.84-86",
    tip: "spill (쏟다)의 과거형은 spilled예요. 뒤에 on you를 붙이면 '당신에게 쏟았어요'가 돼요. 상대가 Accidents happen. (그럴 수도 있죠)이나 Don't worry about it. (신경 쓰지 마세요)이라고 하면 괜찮다는 뜻이에요.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "정말 죄송해요, 커피를 쏟았어요.", en: "I'm so sorry, I spilled my coffee.", note: "핵심 표현" },
      { role: "B", roleLabel: "B", kr: "어이쿠!", en: "Whoa!", note: "" },
      { role: "A", roleLabel: "A", kr: "정말 죄송해요! 커피를 쏟았어요.", en: "I'm so sorry! I spilled my coffee on you.", note: "" },
      { role: "B", roleLabel: "B", kr: "괜찮아요. 조금 묻었을 뿐이에요.", en: "It's okay. It's just a little.", note: "" },
      { role: "A", roleLabel: "A", kr: "괜찮으세요? 걱정 마세요, 뜨거운 게 아니라 아이스예요.", en: "Are you okay? Don't worry, it's iced, not hot.", note: "" },
      { role: "B", roleLabel: "B", kr: "네, 괜찮아요. 신경 쓰지 마세요.", en: "Yeah, I'm fine. Don't worry about it.", note: "" },
      { role: "A", roleLabel: "A", kr: "냅킨 갖다드릴게요.", en: "Let me get you some napkins.", note: "" },
      { role: "A", roleLabel: "A", kr: "실례지만, 수건 좀 주시겠어요? 커피를 쏟아서요.", en: "Excuse me, could we get a towel? We spilled some coffee.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮아요. 바로 갈게요.", en: "No problem. I'll be right there.", note: "" },
      { role: "B", roleLabel: "B", kr: "고마워요. 소매에만 묻어서 다행이에요.", en: "Thanks. Good thing it's only on my sleeve.", note: "" },
      { role: "A", roleLabel: "A", kr: "세탁비는 제가 낼게요.", en: "Please let me pay for your dry cleaning.", note: "" },
      { role: "B", roleLabel: "B", kr: "아니에요, 정말 괜찮아요. 그럴 수도 있죠. 신경 쓰지 마세요.", en: "No, really. It's fine. Accidents happen. Don't worry about it.", note: "" },
      { role: "A", roleLabel: "A", kr: "어질러서 정말 죄송해요.", en: "I'm so sorry about the mess.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "전혀 문제없어요. 새로 하나 만들어 드릴게요, 무료로요.", en: "It's no trouble at all. Let me make you a new one, on the house.", note: "" },
      { role: "A", roleLabel: "A", kr: "정말요? 정말 감사해요.", en: "Really? Thank you so much.", note: "" },
      { role: "B", roleLabel: "B", kr: "그런데 저 10분 뒤에 면접이 있어요.", en: "Well, I have a job interview in ten minutes.", note: "" },
      { role: "A", roleLabel: "A", kr: "이런! 그 셔츠로요?", en: "Oh no! In that shirt?", note: "" },
      { role: "B", roleLabel: "B", kr: "해결됐어요. 이제 일할 준비된 사람 같죠.", en: "Problem solved. Now I look ready to work.", note: "" },
      { role: "A", roleLabel: "A", kr: "멋져요. 행운을 빌어요!", en: "You look great. Good luck!", note: "" },
      { role: "B", roleLabel: "B", kr: "고마워요. 새 커피 맛있게 드세요. 조심해서요!", en: "Thanks. And enjoy your new coffee. Carefully!", note: "" }
    ],
    extras: [
      { kr: "제 잘못이에요.", en: "It was my fault." },
      { kr: "앞을 제대로 안 봤어요.", en: "I wasn't looking where I was going." },
      { kr: "다치셨어요?", en: "Are you hurt?" },
      { kr: "가방에도 묻었어요?", en: "Did it get on your bag?" },
      { kr: "치우는 거 도와드릴게요.", en: "Let me help you clean up." },
      { kr: "여기, 이거 쓰세요.", en: "Here, use this." },
      { kr: "새로 하나 받을 수 있을까요?", en: "Could I get a new one?" },
      { kr: "더 조심할게요.", en: "I'll be more careful." }
    ]
  },
  {
    id: 36,
    title: "접시 좀 치워주시겠어요?",
    category: "식당·디저트 놓을 자리가 없을 때",
    page: "p.87-88",
    tip: "접시가 여러 개면 these plates, 하나면 this plate예요. 서버가 Are you all done (with these)? 라고 물으면, 다 먹었을 땐 Yes, we're done. 아직이면 I'm still working on it. 이라고 대답하면 돼요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "이 접시들 좀 치워주시겠어요?", en: "Could you clear these plates, please?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "주문하신 초코 라바 케이크 나왔습니다!", en: "Here's your chocolate lava cake!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "죄송해요! 이 접시들 좀 치워주시겠어요?", en: "Sorry! Could you clear these plates, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 이거 다 드신 거죠?", en: "Of course. Are you all done with these?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 다 먹었어요. 전부 맛있었어요.", en: "Yes, we're done. Everything was delicious.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "잠깐만요. 이건 말고요.", en: "Wait. Not this one.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "더 필요한 거 있으세요? 커피나 차는요?", en: "Can I get you anything else? Coffee or tea?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "커피 두 잔 주세요.", en: "Two coffees, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "바로 갖다드릴게요.", en: "Coming right up.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이 접시도 치워주시겠어요?", en: "Could you clear this plate too, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "진짜 빨리 드셨네요!", en: "That was fast!", note: "" }
    ],
    extras: [
      { kr: "이것 좀 가져가 주시겠어요?", en: "Could you take these away?" },
      { kr: "저희 다 먹었어요.", en: "We're all done." },
      { kr: "아직 먹고 있어요.", en: "I'm still working on it." },
      { kr: "깨끗한 접시 좀 주시겠어요?", en: "Could we get some clean plates?" },
      { kr: "테이블 좀 닦아주시겠어요?", en: "Could you wipe the table?" },
      { kr: "디저트 메뉴 볼 수 있을까요?", en: "Could we see the dessert menu?" },
      { kr: "이거 포장 용기 좀 주시겠어요?", en: "Could I get a box for this?" },
      { kr: "계산서 좀 주시겠어요?", en: "Could we get the check, please?" }
    ]
  },
  {
    id: 37,
    title: "대프리카 (사계절이 뚜렷해요)",
    category: "버스·외국인과 스몰토크",
    page: "p.89-91",
    tip: "distinct는 '뚜렷한, 확실히 구분되는'이라는 뜻이에요. four seasons만 말해도 되지만 distinct를 붙이면 계절마다 확실히 다르다는 느낌이 살아요. 스몰토크는 Is this seat taken? 으로 열고 It was so nice talking to you.로 닫으면 자연스러워요.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "한국은 사계절이 뚜렷해요.", en: "We have four distinct seasons.", note: "핵심 표현" },
      { role: "B", roleLabel: "B", kr: "이 자리 주인 있나요?", en: "Is this seat taken?", note: "" },
      { role: "A", roleLabel: "A", kr: "아니요, 앉으세요.", en: "No, go ahead.", note: "" },
      { role: "B", roleLabel: "B", kr: "고마워요. 여행 오셨어요?", en: "Thanks. Are you visiting?", note: "" },
      { role: "A", roleLabel: "A", kr: "네, 한국에서 왔어요.", en: "Yes, I'm from Korea.", note: "" },
      { role: "B", roleLabel: "B", kr: "한국이요! 제 딸이 내년 봄에 서울에 가요. 거기 봄은 어때요?", en: "Korea! My daughter is going to Seoul next spring. What's it like there in spring?", note: "" },
      { role: "A", roleLabel: "A", kr: "정말 예뻐요. 곳곳에 벚꽃이 펴요.", en: "It's beautiful. There are cherry blossoms everywhere.", note: "" },
      { role: "B", roleLabel: "B", kr: "여름이랑 겨울은요?", en: "What about summer and winter?", note: "" },
      { role: "A", roleLabel: "A", kr: "한국은 사계절이 뚜렷해요. 여름은 정말 덥고, 겨울은 정말 추워요.", en: "We have four distinct seasons. Summer is really hot, and winter is really cold.", note: "" },
      { role: "B", roleLabel: "B", kr: "시카고 같네요!", en: "Sounds like Chicago!", note: "" },
      { role: "A", roleLabel: "A", kr: "그리고 제 고향 대구는 한국에서 제일 더운 도시예요.", en: "And my hometown, Daegu, is the hottest city in Korea.", note: "" },
      { role: "B", roleLabel: "B", kr: "여기보다 더 더워요?", en: "Hotter than here?", note: "" },
      { role: "A", roleLabel: "A", kr: "훨씬 더워요. 사람들이 대프리카라고 불러요.", en: "Much hotter. People call it Daefrica.", note: "" },
      { role: "B", roleLabel: "B", kr: "대프리카! 그거 마음에 드네요.", en: "Daefrica! I love that.", note: "" },
      { role: "A", roleLabel: "A", kr: "농담 아니에요.", en: "She's not joking.", note: "" },
      { role: "B", roleLabel: "B", kr: "제 딸은 무슨 음식을 먹어봐야 할까요?", en: "What food should my daughter try?", note: "" },
      { role: "A", roleLabel: "A", kr: "한국식 바비큐랑 비빔밥이요. 그리고 치킨이요. 최고예요.", en: "She should try Korean barbecue and bibimbap. And fried chicken. It's the best.", note: "" },
      { role: "B", roleLabel: "B", kr: "음식이 많이 매워요?", en: "Is the food very spicy?", note: "" },
      { role: "A", roleLabel: "A", kr: "어떤 건요. '너무 맵지 않게 해주세요'라고 하면 돼요.", en: "Some of it. Just say, not too spicy, please.", note: "" },
      { role: "B", roleLabel: "B", kr: "한국어 못해도 다니기 쉬워요?", en: "Is it easy to get around without speaking Korean?", note: "" },
      { role: "A", roleLabel: "A", kr: "네, 지하철이 정말 쉬워요. 표지판도 대부분 영어로 돼 있어요.", en: "Yes, the subway is very easy. Most signs are in English, too.", note: "" },
      { role: "B", roleLabel: "B", kr: "좋은 정보네요.", en: "That's good to know.", note: "" },
      { role: "A", roleLabel: "A", kr: "저 여기서 내려요. 얘기 나눠서 정말 즐거웠어요.", en: "This is my stop. It was so nice talking to you.", note: "" },
      { role: "B", roleLabel: "B", kr: "저도 즐거웠어요. 따님이 한국을 좋아하면 좋겠네요!", en: "Nice talking to you, too. I hope your daughter loves Korea!", note: "" },
      { role: "B", roleLabel: "B", kr: "딸한테 대구에 가보라고 할게요. 겨울에요!", en: "I'll tell her to visit Daegu. In winter!", note: "" }
    ],
    extras: [
      { kr: "여름엔 정말 습해요.", en: "It gets really humid in summer." },
      { kr: "겨울엔 눈이 많이 와요.", en: "It snows a lot in winter." },
      { kr: "봄이랑 가을이 제일 좋은 계절이에요.", en: "Spring and fall are the best seasons." },
      { kr: "가을에 가는 게 제일 좋아요.", en: "The best time to visit is in the fall." },
      { kr: "한국에 가보신 적 있어요?", en: "Have you ever been to Korea?" },
      { kr: "부산도 꼭 가보세요.", en: "You should visit Busan, too." },
      { kr: "어디 가시는 길이에요?", en: "Where are you headed?" },
      { kr: "남은 하루 즐겁게 보내세요!", en: "Enjoy the rest of your day!" }
    ]
  },
  {
    id: 38,
    title: "10분에서 15분 늦을 것 같아요",
    category: "식당 예약·늦을 때 전화하기",
    page: "p.92-93",
    tip: "'~분 정도 늦을 것 같아요'는 I think I'll be about minutes late.로 말해요. 범위는 ten to fifteen처럼 to로 이어요. 식당에 늦을 땐 예약 시간과 이름(a reservation at seven under Hana)을 먼저 말하면 바로 찾아줘요.",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "10분에서 15분 정도 늦을 것 같아요.", en: "I think I'll be about ten to fifteen minutes late.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "네, 벨라 쿠치나입니다.", en: "Hello, Bella Cucina.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요, 7시에 하나 이름으로 예약했는데요. 10분에서 15분 정도 늦을 것 같아요.", en: "Hi, I have a reservation at seven under Hana. I think I'll be about ten to fifteen minutes late.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "괜찮습니다. 자리는 15분까지 잡아둘 수 있어요.", en: "No problem. We can hold your table for fifteen minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사합니다!", en: "Thank you so much!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "10시까지 안 돌아오면 나 빼고 시작해.", en: "If I'm not back by ten, start without me.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "너 저녁 먹으러 가는 거잖아.", en: "You're going to dinner.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요. 하나 이름으로 예약했어요. 늦어서 죄송해요.", en: "Hi. Reservation for Hana. Sorry I'm late.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "딱 맞춰 오셨어요. 말씀하신 대로 14분 늦으셨네요.", en: "You're right on time. Fourteen minutes late, just like you said.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그런데 친구분은 아직 안 오셨어요.", en: "Your friend isn't here yet, though.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아직 안 왔어요?", en: "She's not here?", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "죄송해요! 10분에서 15분 정도 늦을 것 같아요!", en: "Sorry! I think I'll be about ten to fifteen minutes late!", note: "" }
    ],
    extras: [
      { kr: "조금 늦을 것 같아요.", en: "I'm running a little late." },
      { kr: "가는 중이에요.", en: "I'm on my way." },
      { kr: "5분 뒤에 도착해요.", en: "I'll be there in five minutes." },
      { kr: "자리 좀 잡아두실 수 있을까요?", en: "Could you hold my table?" },
      { kr: "자리를 얼마나 잡아두실 수 있어요?", en: "How long can you hold the table?" },
      { kr: "차가 막혀서 못 가고 있어요.", en: "I'm stuck in traffic." },
      { kr: "7시 반으로 미룰 수 있을까요?", en: "Could we push it back to seven thirty?" },
      { kr: "기다리게 해서 죄송해요.", en: "Sorry to keep you waiting." }
    ]
  },
  {
    id: 39,
    title: "피클을 빼달라고 했는데",
    category: "버거집ㆍ주문 실수",
    page: "p.94-97",
    tip: "'with no ~'나 'hold the ~'는 '~빼주세요'라는 뜻이에요. 잘못 나왔을 땐 I asked for no pickles. 처럼 '제가 이렇게 요청했어요'라고 사실만 말하면 따지는 느낌 없이 정중해요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "피클 빼달라고 했는데요.", en: "I asked for no pickles.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "안녕하세요, 저는 제이크예요. 오늘 담당 서버입니다. 뭐로 드릴까요?", en: "Hi, I'm Jake. I'll be taking care of you today. What can I get for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "치즈버거 피클 빼고 주시겠어요?", en: "Can I get a cheeseburger with no pickles, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "네. 굽기는 어떻게 해드릴까요?", en: "Sure. How would you like it cooked?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "미디엄으로 주세요.", en: "Medium, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "치즈버거, 미디엄, 피클 빼고. 알겠습니다. 손님은요?", en: "Cheeseburger, medium, no pickles. Got it. And for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "같은 걸로요. 대신 피클 많이 주세요.", en: "Same thing, but extra pickles, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "하나는 피클 빼고, 하나는 피클 추가. 음료는요?", en: "One with no pickles, one with extra pickles. Anything to drink?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아이스티 두 잔 주세요.", en: "Two iced teas, please.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "바로 갖다드릴게요. 나왔습니다. 맛있게 드세요!", en: "Coming right up. Here you go. Enjoy!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다!", en: "Thank you!", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "괜찮으세요?", en: "Is everything okay?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 피클 빼달라고 했는데요.", en: "Excuse me. I asked for no pickles.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이런, 정말 죄송해요! 제 실수예요. 피클만 빼드릴까요, 아니면 새로 만들어 드릴까요?", en: "Oh no, I'm so sorry! That's my mistake. Would you like me to take them off, or get you a new one?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "새로 하나 주시겠어요?", en: "Could I get a new one, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 5분 정도 걸려요.", en: "Absolutely. It'll be about five minutes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요. 천천히 하세요.", en: "No problem. Take your time.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "피클은 남겨드릴까요?", en: "Do you want to keep the pickles?", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "네, 주세요! 제가 먹을게요!", en: "Yes, please! I'll take them!", note: "" },
      { role: "B", roleLabel: "B (나)", kr: "진심이야? 나 피클 엄청 좋아해. 그걸 어떻게 그렇게 많이 먹어? 피클이 곧 인생이야.", en: "Are you serious? I love pickles. How do you eat so many? Pickles are life.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이번엔 피클 없어요. 두 번 확인했어요.", en: "No pickles this time. I double-checked.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "완벽해요. 정말 감사해요.", en: "Perfect. Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "더 필요한 거 있으세요?", en: "Is there anything else I can get you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "케첩 좀 더 주시겠어요? / 물론이죠.", en: "Could I get some extra ketchup? / Of course.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "주문 착오 다시 한번 죄송해요. 오늘 디저트는 저희가 드릴게요.", en: "Sorry again for the mix-up. Dessert is on us today.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말요? 너무 친절하시네요!", en: "Really? That's so nice of you!", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이 정도는 당연하죠. 맛있게 드세요. / 고마워요, 제이크!", en: "It's the least I can do. Enjoy your meal. / Thanks, Jake!", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "피클 먹은 사람은 케이크 없어. / 그런 게 어딨어!", en: "No pickles, no cake. / That's not fair!", note: "" }
    ],
    extras: [
      { kr: "피클은 빼주세요.", en: "Hold the pickles, please." },
      { kr: "양파 빼고 주시겠어요?", en: "Could I get it without onions?" },
      { kr: "그것만 빼주시겠어요?", en: "Could you take them off?" },
      { kr: "제가 주문한 게 아니에요.", en: "This isn't what I ordered." },
      { kr: "주문이 뭔가 착오가 있었던 것 같아요.", en: "I think there's been a mix-up." },
      { kr: "감자튀김 대신 샐러드로 바꿀 수 있나요?", en: "Can I swap the fries for a salad?" },
      { kr: "소스는 따로 주시겠어요?", en: "Could I get the sauce on the side?" },
      { kr: "리필 좀 해주시겠어요?", en: "Could I get a refill, please?" }
    ]
  },
  {
    id: 40,
    title: "계산 잘못했을 때",
    category: "식당·옆 테이블 계산서",
    page: "p.98-100",
    tip: "미국 식당에서는 계산서를 check라고 해요. 다른 테이블 것을 계산했을 땐 I think I paid for the wrong table. 이라고 사실만 말하면 돼요. We insist.는 '사양하지 말고 꼭 받아주세요'라는 뜻이에요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "다른 테이블 걸 계산한 것 같아요.", en: "I think I paid for the wrong table.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 계산서 좀 주시겠어요?", en: "Excuse me. Could we get the check, please?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "네, 바로 갈게요. 여기 있습니다. 천천히 하세요.", en: "Sure, I'll be right with you. Here you go. Take your time.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이번엔 내가 낼게. 지난번에 네가 냈잖아.", en: "I'll get this one. You paid last time.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "정말? / 당연하지.", en: "Are you sure? / Totally.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "결제됐습니다. 감사합니다!", en: "All set. Thank you!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "잠깐. 왜 이렇게 비싸지? 얼마 나왔는데? 186달러. 우리 랍스터 시켰어?", en: "Wait. Why is it so expensive? How much was it? One hundred eighty-six dollars. Did we order lobster?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "무슨 문제 있으세요?", en: "Is everything okay?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례지만, 제가 다른 테이블 걸 계산한 것 같아요.", en: "Excuse me. I think I paid for the wrong table.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어머, 맞네요! 제가 계산서를 바꿔 드렸어요. 정말 죄송해요. 바로 환불해 드릴게요.", en: "Oh no, you're right! I mixed up the checks. I'm so sorry. I'll refund it right away.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "환불은 얼마나 걸려요?", en: "How long will the refund take?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "카드에 반영되기까지 며칠 걸릴 수 있어요.", en: "It may take a few days to show up on your card.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요. 감사해요.", en: "That's okay. Thank you.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "다 됐습니다. 환불 처리됐어요.", en: "All done. It's been refunded.", note: "" },
      { role: "B", roleLabel: "B (옆손님)", kr: "아가씨, 저녁 잘 먹었어요! 걱정 말아요. 번거롭게 했으니 우리가 두 사람 커피 살게요.", en: "Thank you for dinner, young lady! Don't worry, dear. Let us buy you two a coffee for the trouble.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "어머, 안 그러셔도 돼요! / 꼭 사고 싶어서 그래요.", en: "Oh, you don't have to! / We insist.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "손님 계산서예요. 이건 확실히 손님 거예요.", en: "Here's your check. This one is definitely yours.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "항목 좀 다시 확인해도 될까요?", en: "Could I double-check the items?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 파스타 두 개랑 아이스티 두 잔이에요.", en: "Of course. Two pastas and two iced teas.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "맞아요. 카드 여기 있어요.", en: "That's right. Here's my card.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "결제됐습니다! 옆 테이블 분들이 보내신 거예요.", en: "All set! These are from your neighbors.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사합니다! 다음엔 우리가 계산서를 잘 볼게요.", en: "Thank you so much! Next time, we'll check the bill.", note: "" }
    ],
    extras: [
      { kr: "계산서에 착오가 있는 것 같아요.", en: "I think there's a mistake on the bill." },
      { kr: "이건 저희 계산서가 아니에요.", en: "This isn't our check." },
      { kr: "저희 이거 안 시켰어요.", en: "We didn't order this." },
      { kr: "두 번 결제된 것 같아요.", en: "I think I was charged twice." },
      { kr: "결제 취소해 주시겠어요?", en: "Could you cancel the charge?" },
      { kr: "따로 계산할 수 있을까요?", en: "Could we split the check?" },
      { kr: "영수증 주시겠어요?", en: "Could I get a receipt?" },
      { kr: "팁이 포함되어 있나요?", en: "Is the tip included?" }
    ]
  },
  {
    id: 41,
    title: "열쇠 두고 나왔는데 문이 잠겼을 때",
    category: "호텔 · 객실 문 잠김",
    page: "p.101-102",
    tip: "lock myself out은 '열쇠를 안에 두고 나와서 못 들어가요'라는 뜻이에요. 방 번호는 숫자를 하나씩 읽어서 805호는 eight oh five라고 해요(0은 oh).",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "열쇠를 안에 두고 나와서 문이 잠겼어요.", en: "I locked myself out.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (투숙객)", kr: "내가 얼음 가져올게.", en: "I'll get the ice.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "프런트에 가야 해.", en: "We need to go to the front desk.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "무엇을 도와드릴까요?", en: "How can I help you?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "열쇠를 안에 두고 나와서 문이 잠겼어요.", en: "I locked myself out.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "방 번호가 어떻게 되세요?", en: "What's your room number?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "805호요.", en: "Eight oh five.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "신분증 좀 보여주시겠어요?", en: "Can I see your ID, please?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "방 안에 있어요.", en: "It's in the room.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "성함이 어떻게 되세요?", en: "Can I have your name?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "김하나요.", en: "Hana Kim.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "새 키 여기 있습니다. 좋은 밤 되세요.", en: "Here's a new key. Have a good night.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "정말 감사합니다.", en: "Thank you so much.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "좋아. 이제 얼음 가져올게. 키 챙겼어?", en: "Okay. Now I'll get the ice. Did you take the key?", note: "" }
    ],
    extras: [
      { kr: "카드키를 방에 두고 나왔어요.", en: "I left my key card in the room." },
      { kr: "카드키가 안 돼요.", en: "My key card isn't working." },
      { kr: "문 좀 열어주시겠어요?", en: "Could you open the door for me?" },
      { kr: "여분 키 하나 받을 수 있을까요?", en: "Could I get a spare key?" },
      { kr: "방 키를 잃어버렸어요.", en: "I lost my room key." },
      { kr: "사람 좀 올려 보내주시겠어요?", en: "Could you send someone up?" },
      { kr: "제빙기는 어디 있어요?", en: "Where's the ice machine?" },
      { kr: "제 방 번호는 805호예요.", en: "My room number is eight oh five." }
    ]
  },
  {
    id: 42,
    title: "아직 영업중인가요?",
    category: "도넛 가게 · 마감 직전 주문",
    page: "p.103-104",
    tip: "still은 '아직', left는 '남아 있는'이라는 뜻입니다. Are you still open?으로 영업 여부를, Are you still taking orders?로 주문 가능 여부를 물어보세요. Born ready.는 '언제든 준비됐어'라는 자신감 있는 구어 표현입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "아직 영업하세요?", en: "Are you still open?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "목표 지점이 5분 뒤에 문을 닫아.", en: "The target closes in five minutes.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "준비됐어?", en: "Ready?", note: "" },
      { role: "A", roleLabel: "A (나)", kr: "언제든지.", en: "Born ready.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례합니다. 아직 영업하세요?", en: "Excuse me. Are you still open?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "음… 이제 영업하는 걸로 하죠, 뭐.", en: "Well... I guess we are now.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "도넛 남은 거 있어요?", en: "Do you have any donuts left?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "두 개뿐이에요. 글레이즈드요.", en: "Just two. The glazed ones.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "둘 다 주세요.", en: "We’ll take both, please.", note: "" }
    ],
    extras: [
      { kr: "몇 시에 문을 닫나요?", en: "What time do you close?" },
      { kr: "지금 주문하기에는 너무 늦었나요?", en: "Is it too late to order?" },
      { kr: "아직 주문을 받고 있나요?", en: "Are you still taking orders?" },
      { kr: "뭐 좀 포장해서 살 수 있을까요?", en: "Can I get something to go?" },
      { kr: "어떤 것이 남아 있나요?", en: "What do you have left?" },
      { kr: "갓 만든 도넛이 있나요?", en: "Do you have any fresh donuts?" },
      { kr: "남은 건 이것들뿐인가요?", en: "Are these the only ones left?" },
      { kr: "남아 있는 것으로 주세요.", en: "I'll take whatever you have left." },
      { kr: "내일 몇 시에 문을 여나요?", en: "What time do you open tomorrow?" },
      { kr: "괜찮아요. 내일 다시 올게요.", en: "No problem. I'll come back tomorrow." }
    ]
  },
  {
    id: 43,
    title: "날짜를 잘못 예약했어요 (호텔)",
    category: "호텔 · 예약 날짜 변경",
    page: "p.105-107",
    tip: "book과 make a reservation은 '예약하다'입니다. I booked the wrong date.로 실수를 설명하고 Is there any way I could…?로 가능한 방법을 정중하게 물어보세요. change는 변경, cancel은 취소입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "날짜를 잘못 예약했어요.", en: "I booked the wrong date.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (투숙객)", kr: "오늘 밤 체크인할 방법이 있을까요?", en: "Is there any way I could check in tonight?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "모두가 오늘 밤 잘 곳이 필요한 세상.", en: "In a world where everyone needs a bed tonight.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "그만해. 그냥 자고 싶어.", en: "Stop it. I just want to sleep.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "안녕하세요, 김하나 이름으로 예약했어요.", en: "Hi, we have a reservation under Hana Kim.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "어서 오세요. 확인해 드릴게요.", en: "Welcome. Let me check for you.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "죄송하지만 손님, 예약이 내일 밤으로 되어 있어요.", en: "I’m sorry, Ms. Kim. Your reservation is for tomorrow night.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "잘못된 날짜 하나. 길고 긴 밤.", en: "One wrong date. One long night.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "정말 죄송해요. 날짜를 잘못 예약했어요. 오늘 밤 체크인할 방법이 있을까요?", en: "I’m so sorry. I booked the wrong date. Is there any way I could check in tonight?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "방법을 찾아볼게요. 내일 밤 예약도 그대로 두시겠어요?", en: "Let me see what I can do. Do you want to keep tomorrow night, too?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 오늘이랑 내일이요.", en: "Yes, please. Tonight and tomorrow.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋은 소식이에요. 오늘 밤 방이 하나 있어요.", en: "Good news. We have one room available tonight.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "예약을 오늘부터로 옮길 수 있을까요?", en: "Can I move my reservation to start tonight?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠. 변경 수수료는 없어요.", en: "Of course. There’s no fee for the change.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "내일이랑 가격이 같아요?", en: "Is it the same price as tomorrow?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "오늘 방은 조금 더 비싸요. 50달러 추가돼요.", en: "Tonight’s room is a little more. It’s an extra fifty dollars.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "조식 포함인가요?", en: "Is breakfast included?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네, 이틀 다 조식 포함이에요.", en: "Yes, breakfast is included for both nights.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "어떤 방이에요?", en: "What kind of room is it?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "저희 신혼부부 스위트룸이에요.", en: "It’s our honeymoon suite.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "두 친구. 하나의 신혼부부 스위트룸.", en: "Two friends. One honeymoon suite.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "그걸로 할게요.", en: "We’ll take it.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "여기 열쇠요. 체크아웃은 11시예요.", en: "Here are your keys. Checkout is at eleven.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "정말 감사해요. 덕분에 살았어요.", en: "Thank you so much. You saved us.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "즐거운 시간 보내세요. 그리고 축하드려요.", en: "Enjoy your stay. And congratulations.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "저희 결혼한 거 아니에요!", en: "We’re not married!", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "올여름 개봉.", en: "Coming this summer.", note: "" }
    ],
    extras: [
      { kr: "예약할 때 실수한 것 같아요.", en: "I think I made a mistake with my booking." },
      { kr: "제 예약 날짜를 확인해 주시겠어요?", en: "Could you check the dates on my reservation?" },
      { kr: "김하나 이름으로 예약되어 있어요.", en: "My reservation is under Hana Kim." },
      { kr: "오늘 밤으로 예약하려고 했어요.", en: "I meant to book for tonight." },
      { kr: "오늘 밤에 빈방이 있나요?", en: "Do you have any rooms available tonight?" },
      { kr: "체크인 날짜를 바꿔 주시겠어요?", en: "Could you change my check-in date?" },
      { kr: "이틀 동안 같은 방을 쓸 수 있나요?", en: "Can I keep the same room for both nights?" },
      { kr: "예약을 변경하면 수수료가 있나요?", en: "Is there a fee to change the reservation?" },
      { kr: "하룻밤 추가하면 얼마인가요?", en: "How much would the extra night cost?" },
      { kr: "변경된 예약 확인서를 보내 주시겠어요?", en: "Could you send me an updated confirmation?" }
    ]
  },
  {
    id: 44,
    title: "옆방이 시끄러워요 (호텔)",
    category: "호텔 · 객실 소음과 정중한 요청",
    page: "p.108-109",
    tip: "next door는 '바로 옆에', the room next door는 '옆방'입니다. keep it down은 목소리나 소음을 낮춰 달라는 말이에요. Could you ...?에 a little을 덧붙이면 '조금만'이라고 부드럽게 요청할 수 있습니다.",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "옆방이 너무 시끄러워요.", en: "The room next door is really loud.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (투숙객)", kr: "조금만 조용히 해주시겠어요?", en: "Could you keep it down a little?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "프런트입니다. 무엇을 도와드릴까요?", en: "Front desk. How can I help you?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "안녕하세요. 옆방이 너무 시끄러워요.", en: "Hi. The room next door is really loud.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "정말 죄송합니다. 바로 사람 올려보낼게요.", en: "I’m so sorry. We’ll send someone up right away.", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "감사합니다.", en: "Thank you.", note: "" },
      { role: "B", roleLabel: "B (이웃손님)", kr: "어머, 우리가 너무 시끄러웠어요?", en: "Oh dear. Are we too loud?", note: "" },
      { role: "A", roleLabel: "A (투숙객)", kr: "조금요. 조금만 조용히 해주시겠어요?", en: "Just a little. Could you keep it down a little?", note: "" },
      { role: "B", roleLabel: "B (이웃손님)", kr: "물론이죠, 아가씨. 오늘 제 80번째 생일이거든요. 케이크 좀 드실래요?", en: "Of course, sweetheart. It’s my eightieth birthday. Would you like some cake?", note: "" }
    ],
    extras: [
      { kr: "옆방에서 소음이 많이 나요.", en: "There's a lot of noise coming from next door." },
      { kr: "음악 소리가 너무 커요.", en: "The music is too loud." },
      { kr: "벽 너머로 사람들이 말하는 소리가 들려요.", en: "I can hear people talking through the wall." },
      { kr: "소음 때문에 잠을 잘 수가 없어요.", en: "I can't sleep because of the noise." },
      { kr: "음악 소리를 줄여 달라고 말씀해 주시겠어요?", en: "Could you ask them to turn the music down?" },
      { kr: "확인할 사람을 올려보내 주시겠어요?", en: "Could you send someone up to check?" },
      { kr: "옆방이 아직도 시끄러워요.", en: "It's still noisy next door." },
      { kr: "더 조용한 방으로 옮길 수 있을까요?", en: "Would it be possible to move to a quieter room?" },
      { kr: "저희가 잠을 좀 자려고 해서요.", en: "We're trying to get some sleep." },
      { kr: "조용히 해주셔서 감사합니다.", en: "Thank you for keeping it down." }
    ]
  },
  {
    id: 45,
    title: "미국에서 가격 깎기",
    category: "시장 · 가격 흥정",
    page: "p.110-112",
    tip: "Can you do any better?는 흥정 상황에서 '가격을 조금 더 낮춰 주실 수 있나요?'라는 뜻입니다. Would you take + 금액?으로 원하는 가격을 제안할 수 있어요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "할인해 주실 수 있나요?", en: "Could you give me a discount?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "좀 더 깎아 주실 수 있나요?", en: "Can you do any better?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "와, 이거 너무 좋다!", en: "Oh, I love this one!", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "보는 눈이 있네요! 진짜 빈티지예요.", en: "Good eye! That’s a real vintage piece.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "얼마예요?", en: "How much is it?", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "60달러요.", en: "Sixty dollars.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "60달러? 비싸다.", en: "Sixty? That’s a lot.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "조금만 할인해 주실 수 있나요?", en: "Could you give me a little discount?", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "음. 손님한테는 55달러.", en: "Hmm. For you, fifty-five.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "좀 더 깎아 주실 수 있나요?", en: "Can you do any better?", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "오, 이 손님 만만치 않네.", en: "Ooh, she’s a tough one.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "두 개 사면요? 이 재킷이랑 이 스카프요.", en: "What if I buy two? This jacket and this scarf.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "둘 다요? 좋아요… 둘 다 해서 70달러.", en: "Both? Okay... seventy for both.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "둘 다 해서 60달러에 안 될까요?", en: "Would you take sixty for both?", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "60달러요? 제일 좋은 재킷인데!", en: "Sixty? That’s my best jacket!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그게 제일 싼 가격이에요?", en: "Is that your best price?", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "알았어요, 알았어. 65달러, 이게 마지막 제안이에요.", en: "Alright, alright. Sixty-five, and that’s my final offer.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "좋아요!", en: "Deal!", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "있잖아요, 오늘 본 사람 중에 흥정 제일 잘하시네요.", en: "You know what? You’re the best negotiator I’ve seen all day.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "한국 시장에서 배웠대요.", en: "She learned it at Korean markets.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "여기, 이것도 가져가요. 서비스예요.", en: "Here, take this too. It’s on the house.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말요? 정말 감사해요!", en: "Really? Thank you so much!", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "대신 내일은 다시 오지 마요!", en: "Just promise not to come back tomorrow!", note: "" }
    ],
    extras: [
      { kr: "가격을 조정할 수 있나요?", en: "Is the price negotiable?" },
      { kr: "이거 50달러에 주실 수 있나요?", en: "Would you take fifty dollars for it?" },
      { kr: "가격을 조금 낮춰 주실 수 있나요?", en: "Could you lower the price a little?" },
      { kr: "제 예산을 조금 넘네요.", en: "That's a little over my budget." },
      { kr: "제 예산은 50달러예요.", en: "My budget is fifty dollars." },
      { kr: "이 두 개를 같이 사면 얼마인가요?", en: "How much for these two together?" },
      { kr: "현금으로 내면 할인되나요?", en: "Is there a discount if I pay in cash?" },
      { kr: "그 가격에 이 스카프도 포함해 주실 수 있나요?", en: "Could you include this scarf for that price?" },
      { kr: "그 가격이면 좋아요. 살게요.", en: "That works for me. I'll take it." },
      { kr: "감사하지만 사지 않을게요.", en: "Thanks, but I'll pass." }
    ]
  },
  {
    id: 46,
    title: "저 애 아니거든요?",
    category: "식당 · 어린이 메뉴와 가족 식사",
    page: "p.113-115",
    tip: "come with는 메뉴에 무엇이 함께 나오는지 말할 때 씁니다. Does it come with a drink?처럼 바꿔 보세요. a bite of yours는 '네 것 한 입'입니다. grown-up은 여기서 '어른' 또는 '어른용'을 뜻합니다.",
    dialogues: [
      { role: "A", roleLabel: "A (아이)", kr: "저 애 아니에요.", en: "I’m not a kid.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "안녕하세요! 두 분 뭐 드릴까요?", en: "Hi there! What can I get for you two?", note: "" },
      { role: "A", roleLabel: "A (이모)", kr: "치즈버거 하나 주세요. 이 아이는 어린이 메뉴로요.", en: "Can I get a cheeseburger? And a kids’ meal for him.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "저기요. 저 애 아니거든요.", en: "Excuse me. I’m not a kid.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어머, 미안해요! 몇 살이에요?", en: "Oh, I’m sorry! How old are you?", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "여섯 살이요. 그리고 반.", en: "I’m six. And a half.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어린이 메뉴에는 치킨너겟이랑 감자튀김, 장난감이 나와요.", en: "Well, the kids’ meal comes with chicken nuggets, fries, and a toy.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "어른 버거에도 장난감 나와요?", en: "Does the grown-up burger come with a toy?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "아니요, 안 나와요.", en: "No, it doesn’t.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "그럼 어린이 메뉴로 할게요. 대신 음료는 어른 걸로 주실래요?", en: "Then I’ll have the kids’ meal. But can I get a grown-up drink?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "뭐로요?", en: "Like what?", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "커피요. 블랙으로.", en: "Coffee. Black.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "초코우유는 어때요? 멋진 어른들은 다 그거 마셔요.", en: "How about chocolate milk? It’s what all the cool grown-ups drink.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "좋아요.", en: "Deal.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "제 접시는 왜 이렇게 작아요?", en: "Why is my plate so small?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어린이 사이즈라서 그래요.", en: "It’s the kids’ size, sweetie.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "말했잖아요. 저 애 아니라고요. 더 큰 접시로 주실래요?", en: "I told you. I’m not a kid. Can I get a bigger plate, please?", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "훨씬 낫네요. 이모 거 한 입만 먹어 봐도 돼요?", en: "Much better. Can I try a bite of yours?", note: "" },
      { role: "A", roleLabel: "A (이모)", kr: "애 아니라며?", en: "I thought you weren’t a kid.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "어른들은 나눠 먹어요.", en: "Grown-ups share.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "음식은 괜찮으세요?", en: "How is everything?", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "훌륭해요. 요리사분께 칭찬 전해 주세요.", en: "Excellent. My compliments to the chef.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "그리고 여기 장난감이요.", en: "And here’s your toy.", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "와! 공룡이다!", en: "Yes! A dinosaur!", note: "" },
      { role: "A", roleLabel: "A (이모)", kr: "애 아니라며?", en: "Not a kid, huh?", note: "" },
      { role: "A", roleLabel: "A (아이)", kr: "음… 조금은 애일지도.", en: "Okay... maybe a little.", note: "" }
    ],
    extras: [
      { kr: "어린이 메뉴가 있나요?", en: "Do you have a kids’ menu?" },
      { kr: "어린이 메뉴에는 무엇이 함께 나오나요?", en: "What comes with the kids’ meal?" },
      { kr: "장난감만 따로 받을 수 있나요?", en: "Can we get the toy separately?" },
      { kr: "더 큰 접시를 받을 수 있나요?", en: "Could we get a bigger plate?" },
      { kr: "포크 하나 더 주시겠어요?", en: "Could we have an extra fork?" },
      { kr: "이것을 더 작게 잘라 주시겠어요?", en: "Could you cut this into smaller pieces?" },
      { kr: "탄산음료 대신 우유로 받을 수 있나요?", en: "Can we get milk instead of soda?" },
      { kr: "소스는 따로 받을 수 있나요?", en: "Could we get the sauce on the side?" },
      { kr: "버거 한 입만 먹어 봐도 될까요?", en: "Can I have a bite of your burger?" },
      { kr: "남은 음식을 포장해 주시겠어요?", en: "Could you pack up the rest?" }
    ]
  },
  {
    id: 47,
    title: "여기서 먹고 갈게요",
    category: "카페 · 매장 이용과 포장",
    page: "p.116-118",
    tip: "For here or to go?는 '매장에서 드실 건가요, 가져가실 건가요?'라는 선택 질문입니다. Yes.만 말하기보다 For here, please. 또는 To go, please.로 답하세요. warm up은 '데우다', pick up은 주문한 것을 받는 것입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "여기서 먹고 갈게요.", en: "For here, please.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요! 뭐 드릴까요?", en: "Hi! What can I get for you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "라테랑 크루아상 하나 주세요.", en: "Can I get a latte and a croissant?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네! 드시고 가세요, 가져가세요?", en: "Sure! For here or to go?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네.", en: "Yes.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "죄송한데, 드시고 가세요, 가져가세요?", en: "Sorry, for here or to go?", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "여기서 먹고 가냐고 묻는 거야. 'For here, please'라고 해.", en: "She’s asking if we’re eating here. Just say, for here, please.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "여기서 먹고 갈게요.", en: "For here, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "네, 드시고 가시는 걸로요. 크루아상 데워 드릴까요?", en: "Great. For here. Would you like your croissant warmed up?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁해요.", en: "Yes, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "주문하시는 분 이름이 어떻게 되세요?", en: "Can I get a name for the order?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "하나요.", en: "Hana.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다. 9달러 50센트입니다.", en: "Got it. That’ll be nine fifty.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "카드로 결제해도 되나요?", en: "Can I pay by card?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그럼요. 여기 대 주세요.", en: "Of course. Just tap right here.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아무 데나 앉아도 되나요?", en: "Can we sit anywhere?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "원하시는 곳 아무 데나요.", en: "Anywhere you like.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "봐, 해냈잖아.", en: "See? You did it.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "하나 님? 라테 하나랑 따뜻한 크루아상, 드시고 가시는 걸로요.", en: "Hana? One latte and a warm croissant, for here.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사해요!", en: "Thank you so much!", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "맛있게 드세요!", en: "Enjoy!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "여기서 먹고 갈게요. 절대 안 잊을 거야.", en: "For here, please. I’ll never forget that.", note: "" }
    ],
    extras: [
      { kr: "이건 여기서 먹고 갈게요.", en: "I'd like this for here, please." },
      { kr: "포장해 주세요.", en: "I'll have it to go, please." },
      { kr: "커피는 포장하고, 샌드위치는 여기서 먹을게요.", en: "The coffee is to go, but the sandwich is for here." },
      { kr: "머그잔에 담아 주시겠어요?", en: "Could you put it in a mug?" },
      { kr: "포장용 컵에 담아 주시겠어요?", en: "Could you put it in a takeaway cup?" },
      { kr: "이것을 데워 주시겠어요?", en: "Could you warm this up?" },
      { kr: "빈 테이블이 있나요?", en: "Is there a table available?" },
      { kr: "창가에 앉아도 되나요?", en: "Can I sit by the window?" },
      { kr: "주문한 것은 어디에서 받나요?", en: "Where do I pick up my order?" },
      { kr: "생각해 보니, 포장으로 바꿔 주시겠어요?", en: "Actually, could you make that to go?" }
    ]
  },
  {
    id: 48,
    title: "택시 스몰토크 2",
    category: "택시 · 여행 이야기 나누기",
    page: "p.119-121",
    tip: "How’s your day going?으로 가볍게 말을 걸고 How about you?로 질문을 돌려줄 수 있어요. heading home은 '집으로 돌아가는 중이거나 돌아가려는 것', gotta는 got to의 구어적 표현입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (승객)", kr: "오늘 하루 어떠세요?", en: "How’s your day going?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (기사)", kr: "어! 두 분 알아요!", en: "Hey! I know you two!", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "샐 아저씨!", en: "Sal!", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "오늘은 어디로 갈까요?", en: "Where to today?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "브루클린 브리지요.", en: "The Brooklyn Bridge, please.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "알겠습니다.", en: "You got it.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "오늘 하루 어떠세요?", en: "How’s your day going?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "좋아요! 물어봐 줘서 고마워요. 그쪽은요?", en: "Pretty good! Thanks for asking. How about you?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "좋아요, 감사해요.", en: "Great, thanks.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그래서, 토니네 가 봤어요?", en: "So, did you go to Tony’s?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "네! 뉴욕 최고의 피자였어요.", en: "Yes! Best slice in New York.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그렇다니까요! 또 뭐 했어요?", en: "Told you! What else did you do?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "어젯밤에 브로드웨이 공연 봤어요.", en: "We saw a Broadway show last night.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "좋네요! 재밌었어요?", en: "Nice! Did you like it?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "정말 좋았어요.", en: "I loved it.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그래서, 집에는 언제 돌아가요?", en: "So, when are you heading home?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "내일 아침이요.", en: "Tomorrow morning.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "벌써요? 시간 빨리 갔네요.", en: "Already? That went fast.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "그러니까요. 떠나기 싫어요.", en: "I know. I don’t want to leave.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그럼 꼭 다시 와야죠. 다 왔습니다.", en: "Well, you gotta come back. Here we are.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "얼마예요?", en: "How much is it?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "18달러요.", en: "Eighteen dollars.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "거스름돈은 됐어요.", en: "Keep the change.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "하! 이제 진짜 뉴요커네요.", en: "Ha! You’re a real New Yorker now.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그리고 이따 배고프면, 저기 제 사촌이 하는 베이글 가게가 있어요.", en: "Hey, if you get hungry later, my cousin has a bagel shop right over there.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "역시 그럴 줄 알았어요!", en: "Of course he does!", note: "" }
    ],
    extras: [
      { kr: "오늘 많이 바쁘셨어요?", en: "Has it been a busy day?" },
      { kr: "여기에서 오래 사셨어요?", en: "Have you lived here long?" },
      { kr: "이 도시에서 가장 좋은 점은 뭐예요?", en: "What do you like most about this city?" },
      { kr: "추천해 주실 식당이 있나요?", en: "Do you have any restaurant recommendations?" },
      { kr: "떠나기 전에 꼭 볼 만한 것이 있나요?", en: "Is there anything we should see before we leave?" },
      { kr: "저희는 내일 비행기로 돌아가요.", en: "We're flying home tomorrow." },
      { kr: "여기서 정말 즐거운 시간을 보냈어요.", en: "We've had a great time here." },
      { kr: "공항까지 얼마나 걸리나요?", en: "How long does it take to get to the airport?" },
      { kr: "입구 근처에 내려 주시겠어요?", en: "Could you drop us off near the entrance?" },
      { kr: "이야기 나눠서 즐거웠어요.", en: "It was nice talking to you." }
    ]
  },
  {
    id: 49,
    title: "전화로 호텔 예약 도전",
    category: "호텔 · 전화 예약과 철자 확인",
    page: "p.122-124",
    tip: "I'd like to book ...은 '예약하고 싶어요'라는 정중한 표현입니다. for two nights는 '2박 동안', a night 또는 per night는 '1박당'입니다. spell은 단어를 번역하는 것이 아니라 알파벳 철자를 하나씩 말한다는 뜻이에요. You're all set.은 이 대화에서 '예약 절차가 끝났어요'라는 뜻입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "2박으로 방 예약하고 싶어요.", en: "I’d like to book a room for two nights.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "철자 불러주시겠어요?", en: "Could you spell that for me?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "그랜드 호텔입니다. 무엇을 도와드릴까요?", en: "Thank you for calling the Grand Hotel. How can I help you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "2박으로 방 예약하고 싶어요.", en: "I’d like to book a room for two nights.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "물론이죠. 날짜가 어떻게 되세요?", en: "Certainly. What dates?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "10월 10일부터 12일까지요.", en: "October tenth to the twelfth.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "몇 분이세요?", en: "And how many guests?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "두 명이요.", en: "Two, please.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "퀸 침대 두 개 있는 방이 1박에 180달러예요.", en: "We have a room with two queen beds at one hundred eighty dollars a night.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그걸로 할게요.", en: "That works.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "예약자 성함 알려주시겠어요?", en: "Can I get a name for the reservation?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "김이요.", en: "Kim.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "철자 불러주시겠어요?", en: "Could you spell that for me?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "K, I, M. 김이요.", en: "K, I, M. Kim.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요. 예약 완료됐습니다, 김 고객님. 10일에 뵐게요.", en: "Perfect. You’re all set, Ms. Kim. We’ll see you on the tenth.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사합니다. 안녕히 계세요.", en: "Thank you so much. Bye.", note: "" }
    ],
    extras: [
      { kr: "그 날짜에 예약할 수 있는 방이 있나요?", en: "Do you have any rooms available for those dates?" },
      { kr: "성인 두 명이 묵을 방을 원해요.", en: "I'd like a room for two adults." },
      { kr: "침대가 두 개 있는 방이 있나요?", en: "Do you have a room with two beds?" },
      { kr: "1박에 얼마인가요?", en: "How much is it per night?" },
      { kr: "그 가격에 세금이 포함되어 있나요?", en: "Does the price include tax?" },
      { kr: "조식이 포함되어 있나요?", en: "Is breakfast included?" },
      { kr: "조금 더 천천히 다시 말씀해 주시겠어요?", en: "Could you repeat that more slowly?" },
      { kr: "예약 날짜를 다시 확인해 주시겠어요?", en: "Could you confirm the dates for me?" },
      { kr: "예약 확인서를 이메일로 보내 주시겠어요?", en: "Could you email me the booking confirmation?" },
      { kr: "예약 취소 규정은 어떻게 되나요?", en: "What is your cancellation policy?" }
    ]
  },
  {
    id: 50,
    title: "이거 저희가 시킨 거 아니에요",
    category: "식당 · 잘못 나온 음식 확인",
    page: "p.125-127",
    tip: "didn’t 뒤에는 동사원형 order를 씁니다. 부정문 끝의 either는 '이것도 아니다'라는 뜻입니다. mix-up은 '착오·혼선', on the house와 compliments of the chef는 이 대화에서 가게나 셰프가 무료로 제공한다는 뜻입니다.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "실례지만, 이거 저희가 시킨 거 아니에요.", en: "Excuse me, we didn’t order this.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (친구)", kr: "우리 샐러드 두 개 시켰는데.", en: "We ordered two salads.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례합니다. 이거 저희가 시킨 거 아니에요.", en: "Excuse me. We didn’t order this.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "어? 이건 7번 테이블 거네요.", en: "Oh? This is for table seven.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저희는 9번 테이블이에요.", en: "We’re table nine.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "정말 죄송해요. 다른 테이블 건가 봐요.", en: "I’m so sorry. This must be for another table.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "시저 샐러드 두 개요. 착오가 있어서 죄송해요.", en: "Two Caesar salads. Sorry about the mix-up.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "전혀 괜찮아요.", en: "No problem at all.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "랍스터가 저희 계산서에 들어가나요?", en: "Is the lobster on our bill?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "당연히 아니죠. 맛있게 드세요.", en: "Of course not. Enjoy.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "그리고 디저트요, 셰프가 드리는 서비스예요.", en: "And a dessert, compliments of the chef.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말요? 감사해요.", en: "Really? Thank you.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례합니다. 이것도 저희가 시킨 거 아니에요.", en: "Excuse me. We didn’t order this either.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이런. 그건 확실히 손님 게 아니네요.", en: "Oh no. That is definitely not yours.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이거 다른 테이블 건 것 같아요.", en: "I think this is for another table.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "이건 저분 거 같아요.", en: "I think this belongs to him.", note: "" },
      { role: "A", roleLabel: "A (옆 손님)", kr: "감사해요. 덕분에 오늘 저녁 살았어요. 정말 고마워요.", en: "Thank you. You just saved my evening. Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "행운을 빌어요!", en: "Good luck!", note: "" },
      { role: "A", roleLabel: "A (옆 손님)", kr: "나랑 결혼해 줄래?", en: "Will you marry me?", note: "" },
      { role: "B", roleLabel: "B (프러포즈 상대)", kr: "응! 할게!", en: "Yes! Yes, I will!", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "샴페인은 서비스예요. 프러포즈를 구해 주셔서요.", en: "Champagne, on the house. For saving the proposal.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이건 저희가 시킨 거 아닌데요.", en: "We didn’t order this.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그래도 받을게요!", en: "But we’ll take it!", note: "" }
    ],
    extras: [
      { kr: "착오가 있었던 것 같아요.", en: "I think there's been a mix-up." },
      { kr: "이건 저희가 주문한 게 아니에요.", en: "This isn't what we ordered." },
      { kr: "저희는 생선이 아니라 치킨을 주문했어요.", en: "We ordered the chicken, not the fish." },
      { kr: "저희 주문을 확인해 주시겠어요?", en: "Could you check our order, please?" },
      { kr: "이건 다른 테이블에 나갈 음식인가요?", en: "Is this meant for another table?" },
      { kr: "저희는 아직 샐러드를 기다리고 있어요.", en: "We're still waiting for our salads." },
      { kr: "저희가 주문한 음식으로 가져다주시겠어요?", en: "Could you bring the correct dish?" },
      { kr: "이것도 저희에게 청구되나요?", en: "Will we be charged for this?" },
      { kr: "이 항목을 계산서에서 빼 주시겠어요?", en: "Could you take this off the bill?" },
      { kr: "바로잡아 주셔서 감사합니다.", en: "Thank you for sorting it out." }
    ]
  },
  {
    id: 51,
    title: "외국인이 저보고 어려보인대요",
    category: "엘리베이터 · 여행객 스몰토크",
    page: "p.129-131",
    tip: "외국인이 “You look so young.”이라고 하면 “Thank you!”로 충분해요. 한마디 더 하고 싶다 면 “It must be the Korean skincare.”처럼 가볍게 받아치면 대화가 웃음으로 이어집니다[cite: 137]. “Are you here on vacation?”에는 “Yes, I’m here on vacation.”이나 “I’m here on business.”로 답하면 돼요[cite: 137].",
    dialogues: [
      { role: "A", roleLabel: "A (외국인)", kr: "여행 오셨어요?", en: "Are you here on vacation?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (외국인)", kr: "진짜 어려 보여요.", en: "You look so young.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (주민)", kr: "내려가세요?", en: "Going down?", note: "" },
      { role: "A", roleLabel: "A (외국인)", kr: "네. 로비요.", en: "Yes. Lobby, please.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "여행 오셨어요?", en: "Are you here on vacation?", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "네, 여행 왔어요. 한국에서요.", en: "Yes, we’re here on vacation. From Korea.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "한국이요! 멋지네요. 얼마나 머무세요?", en: "Korea! That’s wonderful. How long are you staying?", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "일주일이요.", en: "One week.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "잘 고르셨어요. 이 도시는 가을에 정말 예뻐요.", en: "Good choice. This city is beautiful in the fall.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "잠깐만요. 두 분 대학생이에요?", en: "Wait. Are you two college students?", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "얘 곧 서른이에요.", en: "She’s almost thirty.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "말도 안 돼요. 진짜 어려 보여요.", en: "No way. You look so young.", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "감사해요. 한국 스킨케어 덕분인가 봐요.", en: "Thank you. It must be the Korean skincare.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "저도 들어 봤어요. 정말 그렇게 좋아요?", en: "I’ve heard about that. Is it really that good?", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "제 인생을 바꿨죠.", en: "It changed my life.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "여기 처음이세요?", en: "Is this your first time here?", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "네, 처음이에요. 여긴 다 정말 크네요.", en: "Yes, first time. Everything is so big here.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "피자 보면 더 놀라실걸요.", en: "Wait until you see the pizza.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "만나서 반가웠어요. 제가 아는 한국어는 ‘안녕하세요’뿐이에요.", en: "It was lovely meeting you. Annyeonghaseyo is the only Korean I know.", note: "" },
      { role: "A", roleLabel: "A (한국인)", kr: "완벽해요! 발음 정말 좋으세요.", en: "That’s perfect! Your pronunciation is so good.", note: "" },
      { role: "B", roleLabel: "B (주민)", kr: "과찬이세요. 즐거운 여행 되세요!", en: "You’re too kind. Enjoy your trip!", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "나보고 어려 보인대.", en: "He said I look so young.", note: "" },
      { role: "A", roleLabel: "A (친구)", kr: "‘안녕하세요’도 틀리게 말했거든?", en: "He also said annyeonghaseyo wrong.", note: "" },
      { role: "B", roleLabel: "B (한국인)", kr: "상관없어.", en: "I don't care.", note: "" }
    ],
    extras: [
      { kr: "여기 얼마나 계세요?", en: "How long are you in town?" },
      { kr: "일주일 동안 있어요.", en: "We’re here for a week." },
      { kr: "뉴욕은 처음이에요.", en: "This is my first time in New York." },
      { kr: "어디서 오셨어요?", en: "Where are you from?" },
      { kr: "한국에서 왔어요. 그쪽은요?", en: "I’m from Korea. How about you?" },
      { kr: "정말 친절하시네요.", en: "That’s so kind of you." },
      { kr: "덕분에 기분 최고예요.", en: "You just made my day." },
      { kr: "얘기 나눠서 즐거웠어요.", en: "It was nice talking to you." }
    ]
  },
  {
    id: 52,
    title: "I'm into you vs I'm onto you",
    category: "전치사 · into와 onto 구분",
    page: "p.132-134",
    tip: "into는 ‘안으로 푹 빠져 있는’ 느낌이라 사람에게 쓰면 ‘좋아한다, 반했다’가 돼요[cite: 140]. onto는 ‘위에 올라타 따라붙은’ 느낌이라 ‘속셈을 눈치챘다, 뒤를 쫓고 있다’는 뜻이에요[cite: 140]. 철자 하나 차이로 고백과 경고가 갈리니, o와 n의 순서를 꼭 기억하세요[cite: 140].",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "네 속셈 다 알고 있어.", en: "I’m onto you.", note: "핵심 표현" },
      { role: "B", roleLabel: "B", kr: "너한테 반했어.", en: "I’m into you.", note: "핵심 표현" },
      { role: "A", roleLabel: "A", kr: "거기 서!", en: "Stop right there!", note: "" },
      { role: "B", roleLabel: "B", kr: "네 속셈 다 알고 있다고.", en: "I’m onto you.", note: "" },
      { role: "A", roleLabel: "A", kr: "너한테 반했어!", en: "I’m INTO you!", note: "" },
      { role: "B", roleLabel: "B", kr: "저한테 반했다고요?", en: "You’re into me?", note: "" },
      { role: "A", roleLabel: "A", kr: "온투! O-N! 네 속셈 다 안다고!", en: "ONTO! O-N! I’m ONTO you!", note: "" },
      { role: "B", roleLabel: "B", kr: "아니! 잠깐! 네 속셈 다 안다고! 온투!", en: "No! Wait! I’m ONTO you! ONTO!", note: "" },
      { role: "A", roleLabel: "A", kr: "다시 할게. 네 속셈 다 알아. 그 가방에 뭐가 들었는지 알고 있어.", en: "Let me try again. I’m ONTO you. I know what’s in that briefcase.", note: "" },
      { role: "B", roleLabel: "B", kr: "알았어요, 알았어. 들켰네요.", en: "Okay, okay. You got me.", note: "" },
      { role: "B", roleLabel: "B", kr: "초콜릿이에요. 엄마 생신 선물이요.", en: "It’s chocolate. For my mom’s birthday.", note: "" },
      { role: "B", roleLabel: "B", kr: "이렇게 많이 사는 걸 아무한테도 들키고 싶지 않았어요.", en: "I didn’t want anyone to see me buy this much.", note: "" },
      { role: "A", roleLabel: "A", kr: "초콜릿 때문에 옥상 세 개를 넘으며 쫓아온 거야.", en: "We chased you across three rooftops for chocolate.", note: "" },
      { role: "B", roleLabel: "B", kr: "정말 죄송해요. 사람을 잘못 봤네요.", en: "I’m so sorry. We had the wrong guy.", note: "" },
      { role: "A", roleLabel: "A", kr: "괜찮아요. 초콜릿 드실래요?", en: "No harm done. Chocolate?", note: "" },
      { role: "B", roleLabel: "B", kr: "참고로, 저 초콜릿 좀 좋아해요. 그쪽은요?", en: "And for the record, I’m a little into chocolate. What about you?", note: "" },
      { role: "A", roleLabel: "A", kr: "저는 초콜릿 엄청 좋아해요.", en: "I’m very into chocolate.", note: "" }
    ],
    extras: [
      { kr: "나 요즘 한국 드라마에 푹 빠졌어.", en: "I’m really into K-dramas." },
      { kr: "요즘 뭐에 빠져 있어?", en: "What are you into these days?" },
      { kr: "나는 공포 영화 별로야.", en: "I’m not into horror movies." },
      { kr: "그 사람 너 좋아하는 것 같아.", en: "I think he’s into you." },
      { kr: "경찰이 그 사람 뒤를 쫓고 있어.", en: "The police are onto him." },
      { kr: "저 사람들이 우리를 눈치챈 것 같아.", en: "I think they’re onto us." },
      { kr: "너 뭔가 제대로 짚었다.", en: "You’re onto something." },
      { kr: "어림없지. 네 수법 다 알아.", en: "Nice try. I’m onto your tricks." }
    ]
  },
  {
    id: 53,
    title: "제 캐리어가 안 나왔어요.",
    category: "공항 · 수하물 분실 신고",
    page: "p.135-137",
    tip: "‘캐리어’는 콩글리시예요. 영어로는 suitcase나 luggage라고 해요[cite: 143]. 짐이 안 나오면 수하물 서비스 카운터에서 baggage claim tag(수하물 표)를 보여 주고, 색깔 → 재질 → 특징 순서로 가방을 설명하세요[cite: 143]. 항공사에 따라 overnight kit(임시 세면도구)나 생필품 비용을 받을 수 있어요[cite: 143].",
    dialogues: [
      { role: "A", roleLabel: "A (승객)", kr: "제 캐리어가 안 나왔어요.", en: "My suitcase didn’t come out.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "나 찾았다!", en: "Got mine!", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "내 건 분홍 리본 달린 검은색이야. 곧 나올 거야.", en: "Mine is black with a pink ribbon. It’s coming.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "실례합니다. 제 캐리어가 안 나왔어요.", en: "Excuse me. My suitcase didn’t come out.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "저런, 죄송합니다. 수하물 표 좀 보여 주시겠어요?", en: "I’m sorry to hear that. Can I see your baggage claim tag?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "캐리어가 어떻게 생겼나요?", en: "What does your suitcase look like?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "손잡이에 분홍 리본이 달린 검은색 하드 캐리어예요.", en: "It’s a black hard-shell suitcase with a pink ribbon on the handle.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "경유 항공편이었나요?", en: "Did you have a connecting flight?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "아니요, 서울에서 오는 직항이었어요.", en: "No, it was a direct flight from Seoul.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "시스템을 확인해 볼게요.", en: "Let me check the system.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "이상하네요. 시스템에는 가방이 여기서 내려졌다고 나와요.", en: "That’s strange. The system says your bag was unloaded here.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "누가 실수로 가져갔을 수도 있어요. 혹시 모르니 분실 신고를 해 둘게요.", en: "Someone may have taken it by mistake. Let me file a report just in case.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "성함과 전화번호가 어떻게 되세요?", en: "What’s your name and phone number?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "김하나예요.", en: "Hana Kim.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "어디에 묵으세요?", en: "And where are you staying?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "시내에 있는 그랜드 호텔이요.", en: "The Grand Hotel, downtown.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "찾으면 호텔로 배송해 드릴게요.", en: "If it turns up, we’ll deliver it to your hotel.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "그동안 제가 할 수 있는 게 있을까요?", en: "Is there anything I can do in the meantime?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "하룻밤용 세면도구예요. 칫솔, 치약, 티셔츠가 들어 있어요.", en: "Here’s an overnight kit. Toothbrush, toothpaste, a T-shirt.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "제 여행 전부가 그 캐리어 안에 있는데요.", en: "My whole trip is in that suitcase.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "걱정 마. 방법이 있을 거야.", en: "Don’t worry. We’ll figure it out.", note: "" }
    ],
    extras: [
      { kr: "제 짐이 도착하지 않았어요.", en: "My luggage didn’t arrive." },
      { kr: "수하물 서비스 사무실이 어디예요?", en: "Where is the baggage service office?" },
      { kr: "가방 분실 신고를 하고 싶어요.", en: "I’d like to report a lost bag." },
      { kr: "제 가방이 파손됐어요.", en: "My bag is damaged." },
      { kr: "여기 수하물 표예요.", en: "Here’s my baggage claim tag." },
      { kr: "찾는 데 얼마나 걸릴까요?", en: "How long will it take to find it?" },
      { kr: "호텔로 보내 주시겠어요?", en: "Could you send it to my hotel?" },
      { kr: "필요한 물품 비용을 보상해 주시나요?", en: "Will you cover the cost of necessities?" }
    ]
  },
  {
    id: 54,
    title: "호텔에서 두 번 결제됐다.",
    category: "호텔 · 체크아웃 이중 결제",
    page: "p.138-140",
    tip: "호텔은 체크인 때 카드에 pending hold(가승인)를 걸어 둬요[cite: 146]. 실제 결제가 아니라 며칠 뒤 자동으로 풀리지만, 그대로 남아 있으면 꼭 확인을 요청하세요[cite: 146]. 환불을 받아야 할 때는 “Could I get that in writing?”으로 서면 영수증을 받아 두세요[cite: 146]. business days는 주말과 공휴일을 뺀 영업일이에요[cite: 146].",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "두 번 결제된 것 같아요.", en: "I think I was charged twice.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (손님)", kr: "안녕하세요, 체크아웃하려고요. 512호예요.", en: "Hi, we’d like to check out. Room 512.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "네. 영수증 출력해 드릴게요.", en: "Of course. Let me print your receipt.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "실례합니다. 두 번 결제된 것 같아요.", en: "Excuse me. I think I was charged twice.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "확인해 볼게요.", en: "Let me take a look.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "객실 요금이 두 번 보이네요. 하나는 체크인 때 걸어 둔 가승인일 수 있어요.", en: "I see two charges for the room. One of those may be a pending hold from check-in.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "가승인이요?", en: "A hold?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "체크인할 때 카드에 임시로 금액을 잡아 둬요. 보통 며칠 지나면 풀려요.", en: "When you check in, we place a temporary hold on your card. It usually drops off in a few days.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "사흘이 지났는데요. 아직 안 풀렸어요.", en: "It’s been three days. It hasn’t dropped off.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "매니저에게 다시 확인해 볼게요.", en: "Let me double-check with my manager.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "맞네요. 두 번째 결제가 실수로 처리됐어요. 정말 죄송합니다.", en: "You’re right. The second charge went through by mistake. I’m so sorry about that.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "추가로 결제된 금액을 환불해 주시겠어요?", en: "Could you refund the extra charge?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "물론이죠. 취소 처리했어요. 영업일 기준 3~5일 안에 환불될 거예요.", en: "Absolutely. I’ve reversed it. You’ll see the refund in three to five business days.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "그걸 서면으로 받을 수 있을까요?", en: "Could I get that in writing?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "수정된 영수증 여기 있습니다.", en: "Here’s your updated receipt.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "이 금액은 뭐예요? 12달러요?", en: "What’s this charge? Twelve dollars?", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "미니바예요. 땅콩 한 봉지요.", en: "That’s the minibar. One bag of peanuts.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "새벽 2시에 배고팠거든요.", en: "I was hungry at two a.m.", note: "" },
      { role: "A", roleLabel: "A (직원)", kr: "그건 맞는 금액이에요.", en: "That one is correct, I’m afraid.", note: "" }
    ],
    extras: [
      { kr: "모르는 결제 내역이 있어요.", en: "There’s a charge I don’t recognize." },
      { kr: "이 금액에 대해 설명해 주시겠어요?", en: "Could you explain this charge?" },
      { kr: "항목별 영수증을 받을 수 있을까요?", en: "Could I get an itemized bill?" },
      { kr: "보증금은 얼마예요?", en: "How much is the deposit?" },
      { kr: "가승인은 언제 풀리나요?", en: "When will the hold be released?" },
      { kr: "미니바는 이용하지 않았어요.", en: "I didn’t use the minibar." },
      { kr: "영수증을 이메일로 보내 주시겠어요?", en: "Could you email me the receipt?" },
      { kr: "매니저와 이야기할 수 있을까요?", en: "Could I speak to the manager?" }
    ]
  },
  {
    id: 55,
    title: "미국 버스에서 이거 미술관 가나요?",
    category: "버스 · 목적지 확인과 하차 부탁",
    page: "p.141-143",
    tip: "“Does this bus go to ___?”는 목적지만 바꿔 그대로 쓰는 문장이에요[cite: 149]. 내릴 곳이 걱정되면 “Could you let me know when we get there?”라고 부탁하세요[cite: 149]. 미국 버스 기사님들이 잘 들어주는 부탁이에요[cite: 149]. 하차 벨은 정류장 전에 미리 누르고, 박물관과 미술관은 월요일 휴관인 곳이 많으니 꼭 확인하세요[cite: 149].",
    dialogues: [
      { role: "A", roleLabel: "A (승객)", kr: "이 버스 미술관 가나요?", en: "Does this bus go to the art museum?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (승객)", kr: "도착하면 알려 주시겠어요?", en: "Could you let me know when we get there?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (승객)", kr: "이거 미술관 가는 거 맞냐고, 영어로 어떻게 물어봐?", en: "Does this bus go to the art museum?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "안녕하세요. 이 버스 미술관 가나요?", en: "Hi. Does this bus go to the art museum?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "그럼요. 타세요.", en: "It sure does. Hop on.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "카드로 내도 되나요?", en: "Can I pay by card?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "여기 대기만 하시면 돼요.", en: "Just tap it right here.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "몇 정거장 가야 해요?", en: "How many stops is it?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "열 정거장쯤이요. 20분 정도 걸려요.", en: "About ten stops. Maybe twenty minutes.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "도착하면 알려 주시겠어요?", en: "Could you let me know when we get there?", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "알겠어요. 도착하면 말해 줄게요.", en: "You got it. I’ll call it out for you.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "정말 감사합니다.", en: "Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (다른 승객)", kr: "미술관이요? 걱정 마요, 아가씨. 나도 알려줄게요.", en: "The art museum? Don’t worry, sweetheart. I’ll tell you too.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "감사합니다! 저희 여기서 내려요.", en: "Thank you! This is our stop.", note: "" },
      { role: "B", roleLabel: "B (기사)", kr: "죄송해요. 월요일은 휴관이에요.", en: "Sorry, ladies. We’re closed on Mondays.", note: "" }
    ],
    extras: [
      { kr: "시내 가는 버스는 몇 번이에요?", en: "Which bus goes downtown?" },
      { kr: "미술관 가려면 어디서 내려야 해요?", en: "Where should I get off for the museum?" },
      { kr: "미술관 가려면 이쪽에서 타는 게 맞아요?", en: "Is this the right side for the museum?" },
      { kr: "요금이 얼마예요?", en: "How much is the fare?" },
      { kr: "현금 받으세요?", en: "Do you take cash?" },
      { kr: "이 버스는 얼마나 자주 와요?", en: "How often does this bus come?" },
      { kr: "다음 정류장이 미술관이에요?", en: "Is the next stop the art museum?" },
      { kr: "실례합니다, 저 여기서 내려요.", en: "Excuse me, this is my stop." }
    ]
  },
  {
    id: 56,
    title: "거스름돈이 모자라요.",
    category: "기념품 가게 · 거스름돈 확인",
    page: "p.144-146",
    tip: "큰 돈을 낼 때 “Out of fifty.”라고 말해 두면 얼마를 냈는지 분명해져 거스름돈 착오를 막을 수 있어요[cite: 152]. 따질 때는 “I think ~”로 시작해 정중하게 말하고, 금액 → 낸 돈 → 받아야 할 거스름돈 순서로 숫자를 짚으세요[cite: 152]. 거스름돈은 계산대 앞에서 바로 세어 보는 게 좋아요[cite: 152].",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "거스름돈을 잘못 주신 것 같아요.", en: "I think you gave me the wrong change.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (상인)", kr: "23달러입니다.", en: "That’ll be twenty-three dollars.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "여기요. 50달러로 계산할게요.", en: "Here you go. Out of fifty.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "50달러요. 물론이죠.", en: "Fifty. Of course.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "22달러입니다. 좋은 저녁 보내세요.", en: "Twenty-two dollars. Have a wonderful evening.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다.", en: "Thank you.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "잠깐. 이거 거스름돈이 모자라.", en: "Hold on. This change is short.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "실례합니다. 거스름돈을 잘못 주신 것 같아요.", en: "Excuse me. I think you gave me the wrong change.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "그래요?", en: "Is that so?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "23달러였고, 50달러를 드렸어요. 22달러가 아니라 27달러를 거슬러 주셔야 해요.", en: "It was twenty-three dollars. I gave you fifty. That’s twenty-seven back, not twenty-two.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "확실해요? 잘못 세신 거 아니에요?", en: "Are you sure? Maybe you counted wrong.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "두 번 셌어요.", en: "I counted twice.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "다시 한번 세어 주시겠어요?", en: "Could you count it again, please?", note: "" },
      { role: "A", roleLabel: "A (상인)", kr: "22달러네요.", en: "Twenty-two.", note: "" },
      { role: "B", roleLabel: "B (손님)", kr: "그럼 얼마여야 하죠?", en: "And it should be?", note: "" },
      { role: "A", roleLabel: "A (상인)", kr: "27달러요.", en: "Twenty-seven.", note: "" },
      { role: "B", roleLabel: "B (상인)", kr: "이 가게 40년 하면서 이걸 잡아낸 사람은 처음이에요!", en: "Forty years in this shop, and nobody ever catches that!", note: "" }
    ],
    extras: [
      { kr: "50달러짜리 드렸어요.", en: "I gave you a fifty." },
      { kr: "5달러가 모자란 것 같아요.", en: "I think I’m missing five dollars." },
      { kr: "영수증 주시겠어요?", en: "Could I get a receipt, please?" },
      { kr: "100달러짜리 바꿔 주실 수 있나요?", en: "Could you break a hundred?" },
      { kr: "더 작은 지폐 있으세요?", en: "Do you have smaller bills?" },
      { kr: "버스 탈 동전 좀 받을 수 있을까요?", en: "Could I get some coins for the bus?" },
      { kr: "죄송해요, 더 작은 돈이 없어요.", en: "Sorry, I don’t have anything smaller." },
      { kr: "거스름돈은 됐어요.", en: "Keep the change." }
    ]
  },
  {
    id: 57,
    title: "공항에서 만난 할머니",
    category: "입국심사 · 통역 도와드리기",
    page: "p.147-149",
    tip: "입국심사의 3대 질문은 방문 목적(What is the purpose of your visit?), 체류 기간(How long will you be staying?), 숙소(Where will you be staying?)예요[cite: 155]. 대답은 “I’m here to see my family.”, “For one month.”, “At my son’s house.”처럼 짧게 하면 됩니다[cite: 155]. 못 알아들었을 땐 당황하지 말고 “Could you say that again?”이라고 말하세요[cite: 155].",
    dialogues: [
      { role: "A", roleLabel: "A (도움자)", kr: "아드님을 보러 오셨어요.", en: "She’s here to see her son.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (도움자)", kr: "제가 도와드려도 될까요?", en: "May I help her?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (심사관)", kr: "방문 목적이 무엇인가요?", en: "What is the purpose of your visit?", note: "" },
      { role: "A", roleLabel: "A (도움자)", kr: "실례합니다. 제가 한국어를 할 줄 아는데, 도와드릴까요?", en: "Excuse me. I speak Korean. May I help her?", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "그래 주세요.", en: "Please.", note: "" },
      { role: "A", roleLabel: "A (도움자)", kr: "아드님 보러 오셨어요. 10년 만에요.", en: "She’s here to see her son. For the first time in ten years.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "얼마나 머무르시나요?", en: "How long will she be staying?", note: "" },
      { role: "A", roleLabel: "A (도움자)", kr: "한 달이요.", en: "One month.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "어디서 지내시나요?", en: "And where will she be staying?", note: "" },
      { role: "A", roleLabel: "A (도움자)", kr: "아드님 댁에서요.", en: "At her son’s house.", note: "" },
      { role: "B", roleLabel: "B (심사관)", kr: "미국에 오신 걸 환영합니다. 아드님 보러 가세요.", en: "Welcome to America, ma’am. Go see your son.", note: "" },
      { role: "A", roleLabel: "A (할머니)", kr: "아가씨, 고마워요. 영어 참 잘하네.", en: "Thank you, young lady. Your English is so good.", note: "" },
      { role: "B", roleLabel: "B (도움자)", kr: "아니에요. 저도 아직 배우는 중이에요.", en: "Not at all. I’m still learning.", note: "" }
    ],
    extras: [
      { kr: "가족을 만나러 왔어요.", en: "I’m here to see my family." },
      { kr: "여행 왔어요.", en: "I’m here on vacation." },
      { kr: "2주 동안 머물러요.", en: "I’m staying for two weeks." },
      { kr: "딸 집에서 지낼 거예요.", en: "I’ll be staying at my daughter’s house." },
      { kr: "미국은 처음이에요.", en: "This is my first time in America." },
      { kr: "조금 천천히 말씀해 주시겠어요?", en: "Could you speak more slowly, please?" },
      { kr: "다시 한번 말씀해 주시겠어요?", en: "Could you say that again?" },
      { kr: "도움이 필요하세요?", en: "Do you need any help?" }
    ]
  },
  {
    id: 58,
    title: "30도라길래 반팔 입고 나갔습니다.",
    category: "카페·옷가게 · 갑작스러운 한파",
    page: "p.150-152",
    tip: "미국은 온도를 화씨(°F)로 말해요[cite: 158]. 화씨 30도는 섭씨 약 영하 1도이고, 화씨 70도가 섭씨 21도쯤인 선선한 날씨예요[cite: 158]. 일기 예보에서 cold front는 ‘한파’, wind chill은 ‘체감 온도’라는 뜻이고, “It’s going to drop to ~”는 ‘~도까지 떨어진다’는 표현이에요[cite: 158].",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "이 날씨에 맞게 안 입고 나왔어요.", en: "I didn’t dress for this weather.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "오늘 날씨 완벽하다.", en: "The weather is perfect today.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "해 쨍쨍한데 뭐. 괜찮을 거야.", en: "It’s sunny. I’ll be fine.", note: "" },
      { role: "B", roleLabel: "B (카페 직원)", kr: "오후에 한파가 몰려와요. 30도까지 떨어진대요.", en: "A cold front is coming in this afternoon. It’s going to drop to thirty degrees.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "30도요? 따뜻한데요.", en: "Thirty degrees? That’s warm.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "화씨 30도야, 하나야. 영하라고.", en: "Thirty degrees Fahrenheit, Hana. That’s below freezing.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이 날씨에 맞게 안 입고 나왔어.", en: "I didn’t dress for this weather.", note: "" },
      { role: "B", roleLabel: "B (옷가게 직원)", kr: "이런, 꽁꽁 얼신 것 같네요. 찾으시는 거 도와드릴까요?", en: "Oh, you look frozen. Can I help you find something?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁드려요. 이 날씨에 맞게 안 입고 나왔어요. 따뜻한 외투 있나요?", en: "Yes, please. I didn’t dress for this weather. Do you have a warm coat?", note: "" },
      { role: "B", roleLabel: "B (옷가게 직원)", kr: "운이 좋으시네요. 오늘 아침에 겨울 외투를 막 꺼내 놨어요.", en: "You’re in luck. We just put out the winter coats this morning.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아주 따뜻한 걸로요. 제일 따뜻한 걸로 주세요.", en: "Really warm. The warmest one you have.", note: "" }
    ],
    extras: [
      { kr: "오늘 날씨 어때요?", en: "What’s the weather like today?" },
      { kr: "밖에 엄청 추워요.", en: "It’s freezing out there." },
      { kr: "오늘 밤에 눈이 온대요.", en: "It’s supposed to snow tonight." },
      { kr: "오늘 최고 기온이 몇 도예요?", en: "What’s the high today?" },
      { kr: "재킷을 가져왔어야 했는데.", en: "I should have brought a jacket." },
      { kr: "이거 입어 봐도 돼요?", en: "Can I try this on?" },
      { kr: "이거 더 큰 사이즈 있어요?", en: "Do you have this in a bigger size?" },
      { kr: "장갑이랑 목도리 있어요?", en: "Do you have gloves and scarves?" }
    ]
  },
  {
    id: 59,
    title: "예약을 6시로 앞당겨야 할 때",
    category: "전화 · 식당 예약 시간 변경",
    page: "p.153-156",
    tip: "시간을 앞당길 때는 move up, 미룰 때는 push back을 써요[cite: 162]. 예약 변경 전화는 “I have a reservation for two at seven thirty, under ___.”처럼 시간, 인원, 이름을 먼저 말하면 바로 찾아줘요[cite: 162]. 미국 식당은 테이블이 꽉 차도 bar(바 자리)는 남는 경우가 많으니 함께 물어보세요[cite: 162].",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "예약을 6시로 앞당길 수 있을까요?", en: "Could we move our reservation up to six?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (친구)", kr: "티켓 구했어! 공연 8시야!", en: "I got the tickets! The show is at eight!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "엠마. 우리 저녁 예약 7시 반이야.", en: "Emma. Our dinner reservation is at seven thirty.", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "안녕하세요, 전화 주셔서 감사합니다. 무엇을 도와드릴까요?", en: "Good afternoon, thank you for calling. How can I help you?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "안녕하세요. 7시 반에 김하나 이름으로 2명 예약했는데요. 예약을 6시로 앞당길 수 있을까요?", en: "Hi. I have a reservation for two at seven thirty, under Hana Kim. Could we move our reservation up to six?", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "확인해 볼게요. 잠시만요.", en: "Let me check. One moment.", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "죄송하지만 오늘 6시는 예약이 꽉 찼어요.", en: "I’m sorry, six o’clock is fully booked tonight.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "더 이른 시간은 없나요? 아니면 바 자리라도요?", en: "Is there anything earlier? Or anything at the bar?", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "5시 45분은 가능한데, 바 자리여야 해요.", en: "I can do five forty-five, but it would have to be at the bar.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "5시 45분 바 자리 좋아요. 그걸로 할게요.", en: "Five forty-five at the bar is perfect. We’ll take it.", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "좋습니다. 예약을 5시 45분으로 옮겨 드릴게요.", en: "Great. I’ll move your reservation to five forty-five.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "하나 더요. 저희가 7시 반까지는 나가야 하는데, 시간 충분할까요?", en: "One more thing. We need to leave by seven thirty. Is that enough time?", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "물론이죠. 서버에게 말씀하시면 계산서를 미리 가져다드릴게요.", en: "Absolutely. If you let your server know, we’ll bring the check early.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말 감사합니다. 덕분에 오늘 저녁 살았어요.", en: "Thank you so much. You saved our evening.", note: "" },
      { role: "B", roleLabel: "B (식당 직원)", kr: "별말씀을요. 5시 45분에 뵐게요.", en: "My pleasure. See you at five forty-five.", note: "" }
    ],
    extras: [
      { kr: "예약을 8시로 미룰 수 있을까요?", en: "Could we push our reservation back to eight?" },
      { kr: "예약을 변경하고 싶어요.", en: "I’d like to change my reservation." },
      { kr: "6시에 자리 있나요?", en: "Do you have a table available at six?" },
      { kr: "대기자 명단에 올려 주시겠어요?", en: "Could you put us on the waitlist?" },
      { kr: "한 명 추가할 수 있을까요?", en: "Could we add one more person?" },
      { kr: "예약을 취소하고 싶어요.", en: "I’d like to cancel my reservation." },
      { kr: "저희가 조금 늦을 것 같아요.", en: "We’re running a little late." },
      { kr: "취소 수수료가 있나요?", en: "Is there a cancellation fee?" }
    ]
  },
  {
    "id": 60,
    "title": "음악 소리 좀 줄여주시겠어요?",
    "category": "택시 · 음악 소리 조절 부탁",
    "page": "p.159-161",
    "tip": "소리를 줄일 때는 turn down, 키울 때는 turn up, 끌 때는 turn off예요. 앞에 Could you를 붙이고 끝에 a little을 더하면 부드러운 부탁이 돼요. 에어컨이나 히터도 같은 표현으로 말하면 돼요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "음악 소리 좀 줄여주시겠어요?",
        "en": "Could you turn the music down a little?",
        "note": "핵심 표현"
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "살, 이거 오페라예요?",
        "en": "Sal, is this opera?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "푸치니요. 우리 어머니가 제일 좋아하시던 거예요.",
        "en": "Puccini. My mother's favorite.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "저기요, 살. 음악 소리 좀 줄여 주시겠어요?",
        "en": "Excuse me, Sal. Could you turn the music down a little?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "줄여요? 그럼요. 근데 끄는 건 안 돼요. 이 차 규칙이라서요.",
        "en": "Down? Sure. But I can't turn it off. House rules.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "고마워요. 훨씬 낫네요.",
        "en": "Thank you. That's much better.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "내가 왜 푸치니 트는지 알아요?",
        "en": "You know why I play Puccini?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "어머니 때문에요?",
        "en": "Because of your mother?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "내 사촌 때문이에요.",
        "en": "Because of my cousin.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "역시 사촌이군요.",
        "en": "Of course it's your cousin.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "오늘 밤 오페라 하우스에서 노래해요.",
        "en": "He's singing tonight at the opera house.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "사촌이 오페라 가수예요?",
        "en": "Your cousin is an opera singer?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "토니 동생이요. 목소리가 커요. 나보다 더.",
        "en": "Tony's brother. Big voice. Bigger than mine.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "그건 믿기 어려운데요.",
        "en": "That's hard to believe.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "피자 주문하는 거 한번 들어 봐야 해요.",
        "en": "You should hear him order a pizza.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "살, 소리 좀 키워 주실래요? 하이라이트 부분만요.",
        "en": "Sal, could you turn it up a little? Just for the big part?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "이제야 말이 통하네.",
        "en": "Now you're talking.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "다 왔어요. 18달러 50센트요.",
        "en": "Here we are. Eighteen fifty.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "잔돈은 가지세요.",
        "en": "Keep the change.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "기억했네요.",
        "en": "You remembered.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "최고한테 배웠잖아요.",
        "en": "I learned from the best.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "자, 표 두 장. 오늘 밤. 내 사촌 공연. 맨 앞줄이에요.",
        "en": "Hey. Two tickets. Tonight. My cousin's show. Front row.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (승객)",
        "kr": "살, 이건 못 받아요.",
        "en": "Sal, we can't take these.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (기사)",
        "kr": "나랑 20분 동안 푸치니 들었잖아요. 받을 자격 있어요.",
        "en": "You listened to Puccini with me for twenty minutes. You earned them.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "소리 좀 줄여 주실래요?",
        "en": "Could you turn it down a bit?"
      },
      {
        "kr": "소리 좀 키워 주실래요?",
        "en": "Could you turn it up a little?"
      },
      {
        "kr": "소리가 좀 너무 커요.",
        "en": "It's a little too loud."
      },
      {
        "kr": "음악 좀 꺼 주실래요?",
        "en": "Could you turn off the music?"
      },
      {
        "kr": "채널 좀 바꿔 주실래요?",
        "en": "Could you change the station?"
      },
      {
        "kr": "에어컨 좀 세게 해 주실래요?",
        "en": "Could you turn up the AC?"
      },
      {
        "kr": "창문 좀 올려 주실래요?",
        "en": "Could you roll up the window?"
      },
      {
        "kr": "훨씬 낫네요, 고마워요.",
        "en": "Much better, thanks."
      }
    ]
  },
  {
    "id": 61,
    "title": "예약을 30분만 미룰 수 있을까요?",
    "category": "전화 · 식당 예약 시간 미루기",
    "page": "p.162-164",
    "tip": "미룰 때는 push back, 앞당길 때는 move up을 써요. 시간을 말할 때는 “push it back thirty minutes”처럼 얼마나 미룰지 말하거나, “to seven thirty”처럼 몇 시로 바꿀지 붙이면 돼요. 59번 '예약을 6시로 앞당겨야 할 때'와 같이 보면 좋아요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "예약을 30분만 미룰 수 있을까요?",
        "en": "Could we push our reservation back thirty minutes?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "에마, 저녁 예약 7시야. 지금 6시 40분이고.",
        "en": "Emma, dinner is at seven. It's six forty.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "진정해. 거의 다 됐어.",
        "en": "Relax. I'm almost ready.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "전혀 안 됐거든.",
        "en": "You are not even close.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "루이지스입니다. 마르코예요.",
        "en": "Luigi's. Marco speaking.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "안녕하세요! 하나 이름으로 7시에 두 명 예약했는데요. 30분 미뤄서 7시 반으로 할 수 있을까요?",
        "en": "Hi! I have a reservation for two at seven, under Hana. Could we push it back thirty minutes, to seven thirty?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "7시 반이요? 음, 확인해 볼게요.",
        "en": "Seven thirty? Hmm. Let me check.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "제발요! 저 지금 완전 엉망이에요.",
        "en": "Please! I'm a hot mess right now.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "좋아요. 7시 반으로 해 드릴게요. 대신 1분도 늦으시면 안 돼요.",
        "en": "Okay. Seven thirty, you got it. But not a minute later.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "정말 감사합니다!",
        "en": "Thank you so much!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "봐, 별거 아니잖아.",
        "en": "See? No biggie.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "가. 당장.",
        "en": "Go. Now.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "다 됐다! 가자. 잠깐. 내 지갑 어디 있지?",
        "en": "Done! Let's go. Wait. Where's my wallet?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "장난하는 거지?",
        "en": "You've got to be kidding me.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "다시 전화해 줘. 15분만 더.",
        "en": "Call him back. Fifteen more minutes.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "또? 딱 15분. 금방 올게.",
        "en": "Again? Just fifteen. I'll be back.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "안녕하세요, 하나예요. 정말 죄송해요. 15분만 더 미룰 수 있을까요? 7시 45분으로요?",
        "en": "Hi, it's Hana again. I'm so sorry. Could we push it back fifteen more minutes? To seven forty-five?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "아가씨. 7시였다가 7시 반, 이제는 7시 45분이네요.",
        "en": "Signorina. Seven, then seven thirty, now seven forty-five.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "알아요, 알아요. 제 잘못이에요.",
        "en": "I know, I know. My bad.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "좋아요. 7시 45분. 저한테 빚진 거예요.",
        "en": "Fine. Seven forty-five. You owe me.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "팁 많이 드릴게요. 약속해요.",
        "en": "I'll leave a big tip. Promise.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "손님들. 주방이 지금 정신없어서요. 10분만 미뤄 주실 수 있을까요?",
        "en": "Ladies. The kitchen is slammed. Could you push it back ten minutes?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "아, 이제는 그쪽이 미루시는 거예요?",
        "en": "Oh, so now you're pushing it back?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (식당)",
        "kr": "뭐, 그럴 수도 있죠.",
        "en": "Hey. It happens.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "예약을 8시로 옮길 수 있을까요?",
        "en": "Could we move our reservation to eight?"
      },
      {
        "kr": "20분 정도 늦을 것 같아요.",
        "en": "We're running about twenty minutes late."
      },
      {
        "kr": "몇 분만 자리 잡아 두실 수 있을까요?",
        "en": "Could you hold our table for a few minutes?"
      },
      {
        "kr": "조금 더 늦은 시간에 자리 있나요?",
        "en": "Is there anything available a little later?"
      },
      {
        "kr": "내일로 미룰 수 있을까요?",
        "en": "Could we push it back to tomorrow?"
      },
      {
        "kr": "번거롭게 해서 죄송해요.",
        "en": "Sorry for the trouble."
      },
      {
        "kr": "늦으면 추가 요금이 있나요?",
        "en": "Is there a late fee?"
      },
      {
        "kr": "7시 45분까지 갈게요.",
        "en": "We'll be there by seven forty-five."
      }
    ]
  },
  {
    "id": 62,
    "title": "주방 몇 시에 마감해요?",
    "category": "식당 · 마감 직전 주문",
    "page": "p.165-168",
    "tip": "미국 식당은 주방 마감(kitchen closes)과 영업 종료(closes) 시간이 다른 경우가 많아요. 주방이 닫혀도 바에서는 늦게까지 음식이 되는 곳이 있으니 “Does the bar still serve food?”라고 물어보세요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "주방 몇 시에 마감해요?",
        "en": "What time does the kitchen close?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "아직 주문할 수 있나요?",
        "en": "Can we still order?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "에마, 배고파 죽겠어. 세 시간이나 걸었잖아.",
        "en": "Emma, I'm starving. We walked for three hours.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그 미술관은 그럴 가치가 있었어.",
        "en": "That museum was worth it.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "밥. 저기. 당장.",
        "en": "Food. There. Now.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "곧 10시야. 문 닫을지도 몰라.",
        "en": "It's almost ten. They might be closing.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "안녕하세요! 주방 몇 시에 마감해요?",
        "en": "Hi! What time does the kitchen close?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "10시요.",
        "en": "Ten.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "지금 몇 시예요?",
        "en": "What time is it now?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "9시 58분이요.",
        "en": "Nine fifty-eight.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "그럼 괜찮은 거죠?",
        "en": "So we're good?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "2분 남았어요.",
        "en": "You have two minutes.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "알겠어요. 아직 주문할 수 있죠?",
        "en": "Okay, okay. Can we still order?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "마지막 주문이에요. 말씀하세요.",
        "en": "Last call. Go.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "치즈버거, 감자튀김, 치킨 윙, 그리고 파스타요.",
        "en": "Cheeseburger, fries, chicken wings, and the pasta.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그게 두 사람 거야?",
        "en": "That's for two people?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "내 거야.",
        "en": "That's for me.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "샘! 9시 59분에 누가 주문하는 거야?",
        "en": "Sam! Who's ordering at nine fifty-nine?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "손님들. 주방은 10시에 닫아요. 10시 1분이 아니라 10시요.",
        "en": "Ladies. The kitchen closes at ten. Not ten oh one. Ten.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "정말 죄송해요. 세 시간 동안 길을 잃었거든요.",
        "en": "We're so sorry. We got lost for three hours.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "세 시간이요? 이 도시에서? 어떻게요?",
        "en": "Three hours? In this city? How?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (친구)",
        "kr": "얘가 지도를 거꾸로 보고 다녔어요.",
        "en": "She was following the map upside down.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "셰프님. 거절할 수 없는 제안을 하나 드리죠.",
        "en": "Chef. I'm going to make you an offer you can't refuse.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "그 영화 봤어요.",
        "en": "I've seen that movie.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "팁 20%. 그리고 빨리 먹을게요.",
        "en": "Twenty percent tip. And we eat fast.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "얼마나 빨리요?",
        "en": "How fast?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "씹는 것도 못 보실 거예요.",
        "en": "You won't even see us chew.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "좋아요. 버거 하나, 파스타 하나. 윙은 20분 걸리니까 윙은 안 돼요.",
        "en": "Fine. One burger, one pasta. The wings take twenty minutes, so no wings.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "윙 안 돼요?",
        "en": "No wings?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "저 말고 샘한테 고마워하세요. 늦게까지 남는 건 샘이니까.",
        "en": "Don't thank me. Thank Sam. He's the one staying late.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "참고로 주방은 10시에 닫지만, 바에서는 자정까지 음식이 돼요.",
        "en": "By the way, the kitchen closes at ten, but the bar serves food until midnight.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "바에서 음식이 돼요? 그럼 우리 괜히 뛴 거예요?",
        "en": "The bar has food? So we ran for nothing?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (셰프)",
        "kr": "유산소 운동이 좀 필요해 보이셨어요.",
        "en": "You looked like you needed the cardio.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "몇 시에 문 닫아요?",
        "en": "What time do you close?"
      },
      {
        "kr": "아직 음식 주문 돼요?",
        "en": "Are you still serving food?"
      },
      {
        "kr": "마지막 주문은 언제예요?",
        "en": "When is last call?"
      },
      {
        "kr": "바에서는 아직 음식 돼요?",
        "en": "Does the bar still serve food?"
      },
      {
        "kr": "심야 메뉴 있나요?",
        "en": "Is there a late-night menu?"
      },
      {
        "kr": "빨리 되는 게 뭐예요?",
        "en": "What can you make quickly?"
      },
      {
        "kr": "포장으로 할 수 있을까요?",
        "en": "Can we get it to go?"
      },
      {
        "kr": "늦게 와서 죄송해요.",
        "en": "Sorry for coming in so late."
      }
    ]
  },
  {
    "id": 63,
    "title": "주문 바꾸기엔 너무 늦었나요?",
    "category": "스테이크하우스 · 주문 변경",
    "page": "p.169-171",
    "tip": "tartare, carpaccio, crudo, ceviche가 메뉴에 보이면 익히지 않은 요리예요. 주문을 바꾸고 싶으면 주방에서 요리를 시작하기 전에 빨리 “Is it too late to change my order?”라고 물어보세요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "주문 바꾸기엔 너무 늦었나요?",
        "en": "Is it too late to change my order?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "스테이크 타르타르로 할게요. 웰던으로요.",
        "en": "I'll have the steak tartare. Well done, please.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "웰던이요.",
        "en": "Well done.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "네. 아주 바싹이요.",
        "en": "Yes. Very well done.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "알겠습니다.",
        "en": "Of course.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "저도 이분이랑 같은 걸로요.",
        "en": "I'll have what she's having.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "잠깐. 너 스테이크 타르타르가 뭔지 알아?",
        "en": "Wait. Do you know what steak tartare is?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "스테이크지. 이름만 멋있는.",
        "en": "A steak. Fancy name.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "날고기야. 다진 생소고기에 날달걀까지 올라가.",
        "en": "It's raw. Raw chopped beef. With a raw egg on top.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "날고기라고?",
        "en": "Raw?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "저기요. 주문 바꾸기엔 너무 늦었나요?",
        "en": "Excuse me. Is it too late to change my order?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "상황에 따라 다르죠. 타르타르가 왜요?",
        "en": "That depends. What's wrong with the tartare?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "익힌 건 줄 알았어요.",
        "en": "I thought it was cooked.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "그래서 웰던으로 달라고 하셨군요. 손님, 타르타르는 항상 날것이에요.",
        "en": "You asked for it well done. Madam, tartare always means raw.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "셰프가 시작했는지 확인해 볼게요.",
        "en": "Let me check if the chef has started.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "운이 좋으시네요. 셰프가 아직 시작 안 했어요.",
        "en": "You're in luck. The chef hasn't started yet.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "감사해요! 립아이로 바꿀 수 있을까요? 미디엄으로요.",
        "en": "Thank you! Can I change it to the ribeye? Medium, please.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "립아이, 미디엄. 훨씬 안전하죠.",
        "en": "Ribeye, medium. Much safer.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "저는 이분이랑 같은 걸로 한다고 했잖아요. 아니, 아니요. 사실 저는 타르타르가 먹고 싶었어요.",
        "en": "I said I'll have what she's having. No, no. I actually wanted the tartare.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "그럼 왜 같은 걸로 달라고 하셨어요?",
        "en": "Then why did you say what she's having?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "영화 대사예요. 멋있어 보였거든요.",
        "en": "It's from a movie. It sounded cool.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "전혀요.",
        "en": "It did not.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "내 잘못이야. 내가 일을 벌였네.",
        "en": "My bad. I started all this.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "이거 진짜 맛있어. 한 입만 먹어 봐.",
        "en": "This is amazing. Try one bite.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "절대 사양.",
        "en": "Hard pass.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "한 입만. 용기 내 봐.",
        "en": "One bite. Be brave.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "어떡해. 너무 맛있어. 저기요. 주문 바꾸기엔 너무 늦었나요?",
        "en": "Oh no. It's so good. Excuse me. Is it too late to change my order?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (서버)",
        "kr": "손님. 네. 늦었습니다.",
        "en": "Madam. Yes. It is.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "주문 바꿀 수 있을까요?",
        "en": "Can I change my order?"
      },
      {
        "kr": "치킨으로 바꿀 수 있을까요?",
        "en": "Could I switch to the chicken?"
      },
      {
        "kr": "주방에서 벌써 만들기 시작했나요?",
        "en": "Has the kitchen started on it yet?"
      },
      {
        "kr": "이 요리는 익힌 건가요?",
        "en": "Is this dish cooked?"
      },
      {
        "kr": "이건 날것으로 나오나요?",
        "en": "Is this served raw?"
      },
      {
        "kr": "미디엄 레어로 해 주세요.",
        "en": "Medium rare, please."
      },
      {
        "kr": "디저트는 취소할 수 있을까요?",
        "en": "Can I cancel the dessert?"
      },
      {
        "kr": "번거롭게 해서 죄송해요.",
        "en": "Sorry for the trouble."
      }
    ]
  },
  {
    "id": 64,
    "title": "짐 좀 맡겨도 될까요?",
    "category": "호텔 · 체크아웃 후 짐 보관",
    "page": "p.172-174",
    "tip": "체크아웃 후에도 짐을 무료로 맡아 주는 호텔이 많아요. 보관증(claim ticket)은 꼭 챙기고, 호텔 이름과 주소는 사진으로 찍어 두세요. 짐을 찾을 때는 “I'm here to pick up my luggage.”라고 하면 돼요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "오늘 밤까지 짐 좀 맡아 주시겠어요?",
        "en": "Could you hold our luggage until tonight?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "체크아웃은 했는데 비행기가 밤 9시야.",
        "en": "We checked out, but our flight is at nine tonight.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "도시에서 여섯 시간 더 놀 수 있어!",
        "en": "Six more hours in the city!",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "이걸 하루 종일 끌고 다닐 순 없잖아.",
        "en": "We can't drag these around all day.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그럼 어떡해?",
        "en": "Then what do we do?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "안녕하세요! 방금 체크아웃했는데요. 오늘 밤까지 짐 좀 맡아 주시겠어요?",
        "en": "Hi! We just checked out. Could you hold our luggage until tonight?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (벨보이)",
        "kr": "문제없어요. 가방 몇 개예요?",
        "en": "No sweat. How many bags?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "두 개요.",
        "en": "Two.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (벨보이)",
        "kr": "보관증이에요. 잃어버리지 마세요.",
        "en": "Here's your claim ticket. Don't lose it.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "저 아무것도 안 잃어버려요.",
        "en": "I never lose anything.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "얘 여권 두 번 잃어버렸어요.",
        "en": "She lost her passport twice.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (벨보이)",
        "kr": "11시 전에만 오세요. 제가 그때 퇴근해요.",
        "en": "Just come back before eleven. That's when I leave.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "알겠어요. 고마워요, 레오!",
        "en": "You got it. Thanks, Leo!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "오늘 최고야. 손이 자유로우니 마음도 자유롭다.",
        "en": "This is the best day. Free hands, free hearts.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "에마. 우리 호텔 이름이 뭐였지?",
        "en": "Emma. What was the name of our hotel?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "나무 이름이었는데. 오크? 메이플?",
        "en": "It was something with a tree. Oak? Maple?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "아니야, 색깔이었어. 블루 뭐였는데.",
        "en": "No, it was a color. The Blue something.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그건 호텔이 아니라 팬케이크 가게야.",
        "en": "That's not a hotel. That's a pancake place.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "그래, 하나도 기억 안 나. 내 잘못이야. 보관증엔 번호만 있어. 42번.",
        "en": "Okay, total blank. My bad. The ticket just has a number. Forty-two.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "여권이 그 가방 안에 있어.",
        "en": "Our passports are in those bags.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (벨보이)",
        "kr": "손님들! 뭐 잊으셨어요?",
        "en": "Ladies! Forgot something?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "호텔 이름을 잊어버렸어요.",
        "en": "We forgot the name of the hotel.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (벨보이)",
        "kr": "10미터 걸어가셨잖아요. 걱정 마세요, 가방은 안전해요. 다 괜찮아요.",
        "en": "You walked thirty feet. Don't worry, your bags are safe. We're golden.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "레오, 당신은 생명의 은인이에요.",
        "en": "Leo, you're a lifesaver.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "가방 여기 맡겨도 될까요?",
        "en": "Can I leave my bags here?"
      },
      {
        "kr": "짐 보관료가 있나요?",
        "en": "Is there a fee for storing luggage?"
      },
      {
        "kr": "몇 시까지 찾으러 와야 해요?",
        "en": "What time do I need to pick them up?"
      },
      {
        "kr": "짐 찾으러 왔어요.",
        "en": "I'm here to pick up my luggage."
      },
      {
        "kr": "여기 보관증이요.",
        "en": "Here's my claim ticket."
      },
      {
        "kr": "일찍 체크인할 수 있을까요?",
        "en": "Can I check in early?"
      },
      {
        "kr": "체크아웃을 늦게 할 수 있을까요?",
        "en": "Could I get a late checkout?"
      },
      {
        "kr": "택시 좀 불러 주시겠어요?",
        "en": "Could you call a taxi for me?"
      }
    ]
  },
  {
    "id": 65,
    "title": "방을 옮겨도 될까요?",
    "category": "호텔 · 방 바꾸기",
    "page": "p.175-177",
    "tip": "방이 마음에 안 들면 체크인 직후에 바로 말하는 게 좋아요. “The view isn't what I booked.”처럼 이유를 짧게 덧붙이면 더 잘 들어줘요. 방을 옮길 때는 침대 개수도 꼭 확인하세요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "방을 옮겨도 될까요?",
        "en": "Could we switch rooms?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "시티 뷰 방! 이거 돈 더 냈어. 음. 뷰는 뷰네. 벽 뷰.",
        "en": "City view room! I paid extra for this. Well. It's a view. Of a wall.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "도시의 벽이잖아. 엄밀히 말하면 시티 뷰야.",
        "en": "A city wall. Technically city view.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "안녕하세요. 312호인데요. 방을 옮겨도 될까요?",
        "en": "Hi. We're in room three twelve. Could we switch rooms?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "312호가 왜요?",
        "en": "What's wrong with three twelve, honey?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "시티 뷰로 예약했는데 창밖이 벽돌담이에요.",
        "en": "I booked a city view. The view is a brick wall.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "아, 그 벽. 그 벽은 다들 알아요. 어떤 방이 있는지 볼게요. 방이 하나 남았어요. 꼭대기 층. 진짜 뷰.",
        "en": "Oh, that wall. Everybody knows about the wall. Let me see what I've got. I've got one room left. Top floor. Real view.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "네! 그걸로요! 글로리아, 최고예요.",
        "en": "Yes! Please! Gloria, you rock.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "2101호예요. 그런데 그 방에 아주 작은 문제가 하나 있는데요.",
        "en": "Room twenty-one oh one. But there's one tiny thing about that room.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "그걸로 할게요!",
        "en": "We'll take it!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "아직 말 안 끝났어요!",
        "en": "You didn't let me finish!",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "말도 안 돼. 와, 글로리아가 제대로 챙겨 줬다. 이 뷰 좀 봐! 이건 내가 묵어 본 방 중에 최고야.",
        "en": "No way. Okay, Gloria hooked us up big time. Look at this view! This is the best room I've ever had.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "침대가 하나야. 아주 작은 침대 하나. 내 거 찜.",
        "en": "One bed. One very small bed. Dibs.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "하나밖에 없는 침대를 찜하면 어떡해!",
        "en": "You can't call dibs on the only bed!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "방금 했는데.",
        "en": "I just did.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "프런트입니다. 맞혀 볼게요. 침대죠.",
        "en": "Front desk. Let me guess. The bed.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "방을 한 번 더 옮길 수 있을까요?",
        "en": "Could we switch rooms again?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (직원)",
        "kr": "손님, 그게 마지막 방이었어요.",
        "en": "Honey, that was the last room.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (투숙객)",
        "kr": "뷰는 크고 침대는 작네. 아쉽다.",
        "en": "Big view, small bed. Bummer.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "더 높은 층 방으로 받을 수 있을까요?",
        "en": "Could I get a room on a higher floor?"
      },
      {
        "kr": "전망이 더 좋은 방 있나요?",
        "en": "Is there a room with a better view?"
      },
      {
        "kr": "예약한 뷰가 아니에요.",
        "en": "The view isn't what I booked."
      },
      {
        "kr": "침대 두 개짜리 방으로 받을 수 있을까요?",
        "en": "Could we get a room with two beds?"
      },
      {
        "kr": "추가 요금이 있나요?",
        "en": "Is there an extra charge?"
      },
      {
        "kr": "방에서 담배 냄새가 나요.",
        "en": "The room smells like smoke."
      },
      {
        "kr": "에어컨이 안 돼요.",
        "en": "The air conditioner isn't working."
      },
      {
        "kr": "짐 좀 옮겨 주실 수 있을까요?",
        "en": "Could someone help me with my bags?"
      }
    ]
  },
  {
    "id": 66,
    "title": "이거 작은 사이즈 있나요?",
    "category": "옷가게 · 사이즈 문의",
    "page": "p.178-180",
    "tip": "미국 옷은 한국보다 한두 치수 커요. 한국에서 M이면 미국에서는 S나 XS를 먼저 입어 보세요. 체구가 작다면 아동복 코너(kids' section)의 XL도 잘 맞고 가격도 더 싸요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이거 작은 사이즈 있나요?",
        "en": "Do you have this in a smaller size?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이거 너무 귀엽다. 살래.",
        "en": "This is so cute. I'm getting it.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그거 무슨 사이즈야?",
        "en": "What size is that?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "스몰. 난 항상 스몰이야.",
        "en": "Small. I'm always a small.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "그건 후드티가 아니라 텐트야.",
        "en": "That's not a hoodie. That's a tent.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "저기요. 이거 더 작은 사이즈 있나요?",
        "en": "Excuse me. Do you have this in a smaller size?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (점원)",
        "kr": "그게 스몰이에요.",
        "en": "That is a small.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "알아요. 엑스스몰 있나요?",
        "en": "I know. Do you have an extra small?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (점원)",
        "kr": "스몰이 저희 매장에서 제일 작은 사이즈예요. 요즘은 오버사이즈가 대세예요.",
        "en": "Small is the smallest we carry. Oversized is the vibe right now.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이 후드티 진짜 갖고 싶었는데.",
        "en": "I really wanted this hoodie.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (다른점원)",
        "kr": "쉿. 손님들. 따라오세요.",
        "en": "Psst. Ladies. Follow me.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "잠깐. 여기 아동복 코너예요?",
        "en": "Wait. Is this the kids' section?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (다른점원)",
        "kr": "엄밀히 말하면요. 그런데 우리끼리 얘기지만, 손님 절반이 여기서 사요. 아동복 엑스라지요.",
        "en": "Technically, yes. But between us, half my customers shop here. Kids' extra large.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "저 다 큰 어른인데요.",
        "en": "I'm a grown woman.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "텐트 입은 어른이지. 입어 봐.",
        "en": "You're a grown woman in a tent. Try it on.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "와. 완전 딱 맞는다. 진짜 맞아!",
        "en": "Okay. That fits like a glove. It actually fits!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (다른점원)",
        "kr": "잘 어울려요. 아동복 가격이에요. 어른 옷의 반값이에요.",
        "en": "You're rocking it. Kids' prices. It's half the price of the adult one.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "반값이요. 완전 득템이죠. 똑같은 후드티. 반값. 더 잘 맞고. 아동복 코너가 진짜 명품관이네.",
        "en": "Half. Total steal. Same hoodie. Half price. Fits better. The kids' section is the real luxury section.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "이거 미디엄 있나요?",
        "en": "Do you have this in a medium?"
      },
      {
        "kr": "더 큰 사이즈 있나요?",
        "en": "Do you have a bigger size?"
      },
      {
        "kr": "이거 입어 봐도 될까요?",
        "en": "Can I try this on?"
      },
      {
        "kr": "탈의실이 어디예요?",
        "en": "Where are the fitting rooms?"
      },
      {
        "kr": "조금 너무 커요.",
        "en": "It's a little too big."
      },
      {
        "kr": "이거 다른 색 있나요?",
        "en": "Do you have this in another color?"
      },
      {
        "kr": "환불 규정이 어떻게 돼요?",
        "en": "What's your return policy?"
      },
      {
        "kr": "이걸로 할게요.",
        "en": "I'll take this one."
      }
    ]
  },
  {
    "id": 67,
    "title": "북한이요, 남한이요?",
    "category": "택시 · 출신 국가 스몰토크",
    "page": "p.181-183",
    "tip": "미국에서 “North or South?”는 대부분 가볍게 던지는 농담이에요. 웃으면서 “South, of course!”라고 답하면 돼요. 도시까지 말하고 싶다면 “I'm from Daegu, South Korea.”처럼 작은 단위부터 말하세요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "저는 남한에서 왔어요.",
        "en": "I'm from South Korea.",
        "note": "핵심 표현"
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "어디서 오셨어요?",
        "en": "Where are you from?",
        "note": "핵심 표현"
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "그래서, 어디서 오셨어요?",
        "en": "So, where are you from?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "한국이요.",
        "en": "Korea.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "한국! 북한이요, 남한이요?",
        "en": "Korea! North or South?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "저는 남한에서 왔어요. 다들 그걸 물어봐요. 오늘만 다섯 번이에요. 제가 셌어요.",
        "en": "I'm from South Korea. Everybody asks that. Five times today. I counted.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "에이, 그럼 물어보면 뭐라고 해요?",
        "en": "Come on, what do you say when they ask?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "생각해 보세요. 제가 북한에서 왔으면 이 택시에 타고 있겠어요?",
        "en": "Think about it. If I were from the North, would I be sitting in your taxi?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "그거 티셔츠에 새겨야겠네요. 한 번만 더. 북한이요, 남한이요?",
        "en": "You should put that on a T-shirt. One more time. North or South?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "한 번만 더 말해 봐요. 어디 한번.",
        "en": "Say it again. I dare you.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "좋아요, 고백할 게 있어요. 차이는 알아요. 제 아내가 한국 사람이거든요. 20년 됐어요.",
        "en": "Alright, I have a confession. I know the difference. My wife is Korean. Twenty years.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "아내분이 한국 사람이에요? 그럼 그냥 장난친 거예요?",
        "en": "Your wife is Korean? So you were just messing with her?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "뉴욕이 원래 이래요. 아내분은 어디 출신이세요?",
        "en": "Welcome to New York. Where is she from?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "대구라는 도시요.",
        "en": "A city called Daegu.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "저 대구에서 왔어요! 말도 안 돼! 세상 참 좁네요!",
        "en": "I'm from Daegu! No way! Small world!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "아프리카보다 덥다던데요. 안녕하세요.",
        "en": "She says it's hotter than Africa. Annyeonghaseyo.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (승객)",
        "kr": "한국어 완벽하세요!",
        "en": "Your Korean is perfect!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (기사)",
        "kr": "아는 말이 이거 하나예요. 20년 동안.",
        "en": "That's the only word I know. Twenty years.",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "저는 한국 대구에서 왔어요.",
        "en": "I'm from Daegu, South Korea."
      },
      {
        "kr": "당연히 남한이죠.",
        "en": "South, of course."
      },
      {
        "kr": "한국에 가 보신 적 있어요?",
        "en": "Have you ever been to Korea?"
      },
      {
        "kr": "뉴욕은 처음이세요?",
        "en": "Is this your first time in New York?"
      },
      {
        "kr": "택시 운전하신 지 얼마나 되셨어요?",
        "en": "How long have you been driving a taxi?"
      },
      {
        "kr": "언젠가 한국에 꼭 가 보세요.",
        "en": "You should visit Korea someday."
      },
      {
        "kr": "대구는 더운 여름으로 유명해요.",
        "en": "Daegu is famous for its hot summers."
      },
      {
        "kr": "얘기 나눠서 즐거웠어요.",
        "en": "It was nice talking to you."
      }
    ]
  },
  {
    "id": 68,
    "title": "이거 4등분 해주시겠어요?",
    "category": "길거리 음식 · 나눠 먹기",
    "page": "p.184-186",
    "tip": "미국 길거리 음식은 양이 정말 많아요. 나눠 먹을 때는 “Could you cut this in half?” (반으로), “into four pieces” (네 조각으로)처럼 숫자만 바꿔서 말하면 돼요. 남은 음식을 나눠 줄 때는 “Would you like a piece?”가 자연스러워요.",
    "dialogues": [
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이거 4등분 해주시겠어요?",
        "en": "Could you cut this into four pieces?",
        "note": "핵심 표현"
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "배고파서 예민해졌어. 말 한 마리도 먹겠어.",
        "en": "I'm so hangry. I could eat a horse.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주민)",
        "kr": "그럼 빅 토니를 드셔야죠. 뉴욕 최고의 샌드위치예요.",
        "en": "Then you want the Big Tony. Best sandwich in New York.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "빅 토니 하나 주세요.",
        "en": "One Big Tony, please.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (친구)",
        "kr": "이건 샌드위치가 아니라 가구야.",
        "en": "That's not a sandwich. That's furniture.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이거 4등분 해주시겠어요?",
        "en": "Could you cut this into four pieces?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "네 조각이요? 몇 분이 드실 건데요?",
        "en": "Four? For how many people?",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "두 명이요. 작게 자르면 죄책감 제로잖아요.",
        "en": "Two. Small pieces, zero guilt.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "아가씨, 칼로리는 그렇게 계산하는 게 아니에요.",
        "en": "Sweetheart, that's not how calories work.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "네 조각. 완벽하게 똑같이. 끝내주죠.",
        "en": "Four pieces. Perfectly even. Chef's kiss.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "세상에. 이거 진짜 맛있다. 인정. 완전 반했어. 에마. 우리 이거 다 못 먹어. 나눠 먹으면 좋잖아.",
        "en": "Oh my gosh. This is legit. Okay. I'm sold. Emma. We can't finish this. Sharing is caring.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "저기요. 한 조각 드실래요?",
        "en": "Excuse me. Would you like a piece?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (행인)",
        "kr": "진짜요? 좋죠. 감사해요!",
        "en": "For real? Bet. Thank you!",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "저요? 제가 만든 건데요.",
        "en": "For me? I made it.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "직접 만든 샌드위치를 안 드셔 보셨어요?",
        "en": "You've never tried your own sandwich?",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "20년 동안이요. 먹을 시간이 없었어요. 와. 나 잘하네. 하나 더 만들어 드릴게요. 서비스예요.",
        "en": "Twenty years. Never had time. Wow. I'm good. I'm down to make another one. On the house.",
        "note": ""
      },
      {
        "role": "A",
        "roleLabel": "A (손님)",
        "kr": "이번엔 여덟 조각으로 잘라 주세요. 더 작게 자르면 죄책감도 더 줄잖아요.",
        "en": "This time, cut it into eight. Smaller pieces, even less guilt.",
        "note": ""
      },
      {
        "role": "B",
        "roleLabel": "B (주인)",
        "kr": "칼로리는 여전히 그렇게 계산하는 게 아니라니까요!",
        "en": "That's still not how calories work!",
        "note": ""
      }
    ],
    "extras": [
      {
        "kr": "이거 반으로 잘라 주시겠어요?",
        "en": "Could you cut this in half?"
      },
      {
        "kr": "접시 하나 더 주시겠어요?",
        "en": "Could we get an extra plate?"
      },
      {
        "kr": "이거 나눠 먹을 거예요.",
        "en": "We're going to share this."
      },
      {
        "kr": "냅킨 좀 주시겠어요?",
        "en": "Could I get some napkins?"
      },
      {
        "kr": "남은 거 싸 주시겠어요?",
        "en": "Could you wrap the rest?"
      },
      {
        "kr": "이 샌드위치에 뭐 들어가요?",
        "en": "What's in this sandwich?"
      },
      {
        "kr": "양파 빼고 주실 수 있어요?",
        "en": "Can I get it without onions?"
      },
      {
        "kr": "크기가 어느 정도예요?",
        "en": "How big is it?"
      }
    ]
  },
  {
    id: 69,
    title: "비행기 옆자리에서 영어로 말을 걸었다.",
    category: "기내 · 대화 정중하게 끝내기",
    page: "p.187-189",
    tip: "대화를 끊을 때는 먼저 “It was nice talking to you.”로 고마움을 표현하고, 이유를 붙이면 전혀 무례하지 않아요. 비행기, 기차, 버스 어디서든 쓸 수 있어요. 더 짧게는 “I'm going to rest a bit.”도 돼요.",
    dialogues: [
      { role: "A", roleLabel: "A (승객)", kr: "얘기 즐거웠는데, 저 좀 자 볼게요.", en: "It was nice talking to you, but I'm going to try to get some sleep.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (승객)", kr: "드디어. 세 시간 잘 수 있다.", en: "Finally. Three hours of sleep.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "마이애미 처음이세요? 아, 정말 좋아하실 거예요. 저는 30년째 다니고 있어요. 다 알려 드릴게요.", en: "First time to Miami? Oh, you're gonna love it. I've been going for thirty years. Let me tell you everything.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "우리 엄마가 늘 그러셨죠. 인생은 초콜릿 상자 같다고. 뭘 고를지 아무도 모르니까요!", en: "My mama always said, life is like a box of chocolates. You never know what you're gonna get!", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "포레스트 검프네요. 좋아요. 감사합니다.", en: "Forrest Gump. Nice. Thank you.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "그래서, 마이애미엔 무슨 일로 가세요?", en: "So, what brings you to Miami?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "얘기 정말 즐거웠는데, 저 좀 자 볼게요.", en: "It was really nice talking to you, but I'm going to try to get some sleep.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "물론이죠! 편하게 하세요. 하나만 물어볼게요. 쿠바 커피 드셔 보셨어요?", en: "Of course! You do you. Quick question. Have you tried Cuban coffee?", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "아니요, 쿠바 커피는 안 마셔 봤어요.", en: "No, I haven't tried Cuban coffee.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "아, 꼭 드셔 보세요. 간단히 말하면, 1998년에 하루에 여섯 잔을 마셨거든요.", en: "Oh, you have to. Long story short, I drank six cups in one day in 1998.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "월터. 저 완전 지쳤어요. 진짜 자야 해요.", en: "Walter. I'm beat. I really need to crash.", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "더 말 안 하셔도 돼요. 푹 주무세요.", en: "Say no more. Sleep tight.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "월터? 정말 잘 잤어요. 감사해요.", en: "Walter? I slept so well. Thank you.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "너 자고 2분 뒤에 저분도 잠들었어.", en: "He fell asleep two minutes after you did.", note: "" },
      { role: "A", roleLabel: "A (승객)", kr: "근데 이제 쿠바 커피 얘기가 듣고 싶은데. 월터. 마이애미엔 무슨 일로 가세요?", en: "But now I want to hear about the Cuban coffee. Walter. What brings you to Miami?", note: "" },
      { role: "B", roleLabel: "B (옆승객)", kr: "초콜릿.", en: "Chocolates.", note: "" }
    ],
    extras: [
      { kr: "어디 가세요?", en: "Where are you headed?" },
      { kr: "비행기 처음 타세요?", en: "Is this your first time flying?" },
      { kr: "의자 좀 뒤로 젖혀도 될까요?", en: "Do you mind if I recline my seat?" },
      { kr: "담요 하나 주시겠어요?", en: "Could I get a blanket?" },
      { kr: "죄송한데 좀 지나가도 될까요?", en: "Excuse me, could I get by?" },
      { kr: "좀 쉴게요.", en: "I'm going to rest a bit." },
      { kr: "밀린 일을 좀 해야 해서요.", en: "I need to catch up on some work." },
      { kr: "착륙 전에 또 얘기해요.", en: "Let's talk again before we land." }
    ]
  },
  {
    id: 70,
    title: "리틀 하바나에서 커피를 영어로 시켰다.",
    category: "마이애미 · 쿠바 커피 주문",
    page: "p.190-193",
    tip: "리틀 하바나는 마이애미의 쿠바 이민자 동네라 스페인어로 먼저 인사하는 곳이 많아요. 그럴 땐 “Do you speak English?”라고 물어보세요. 쿠바 커피(cafecito)는 아주 달고 진하며, 큰 컵(colada)은 여럿이 나눠 마시는 거예요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "뭐가 맛있어요? / 추천해 주시겠어요?", en: "What do you recommend?", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "영어 하세요?", en: "Do you speak English?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요, 뭐 드릴까요?", en: "Hola, mi amor! ¿Qué quieres?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "영어 하세요?", en: "Do you speak English?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그럼요. 여긴 마이애미예요. 뭐 드릴까요?", en: "Of course, baby. This is Miami. What do you want?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "뭐가 맛있어요?", en: "What do you recommend?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "카페시토. 쿠바 커피요. 마이애미 최고예요.", en: "Cafecito. Cuban coffee. Best in Miami.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "얼마예요? 2달러요? 완전 싸다. 이거 시음용이에요?", en: "How much? Two dollars? That's a steal. Is this a sample?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그게 한 잔이에요. 컵은 작아도 힘은 세다.", en: "That's a full cup, mi amor. Small cup, big power.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "엄청 달아요! 덜 달게 해 주실 수 있어요?", en: "It's so sweet! Can I get it less sweet?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그게 포인트예요. 이게 덜 단 거예요.", en: "That's the point, baby. Baby, this IS less sweet.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "자, 콜라다예요. 쿠바 커피는 혼자 마시는 게 아니라 나눠 마시는 거예요. 당신의 눈동자에 건배.", en: "Here. A colada. You don't drink Cuban coffee alone. You share it. Here's looking at you, kid.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "조심해요. 처음 마시는 사람한테 두 잔은 많아요.", en: "Careful, mi amor. Two cafecitos is a lot for a beginner.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요. 완전 괜찮아요.", en: "I'm fine. I'm totally fine.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "너 눈 떨려. 너 월터 됐어.", en: "Your eye is twitching. You're Walter.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "에마, 쿠바 커피 마셔 봤어? 진짜 대박이야. 간단히 말하면 나 방금 두 잔 마셨거든. 다 얘기해 줄게.", en: "Emma, have you tried Cuban coffee? It's amazing. Long story short, I just drank two cups. Let me tell you everything.", note: "" }
    ],
    extras: [
      { kr: "여기서 뭐가 인기 있어요?", en: "What's popular here?" },
      { kr: "그걸로 할게요.", en: "I'll go with that." },
      { kr: "이 둘은 뭐가 달라요?", en: "What's the difference between these two?" },
      { kr: "진해요?", en: "Is it strong?" },
      { kr: "우유 넣어서 주실 수 있어요?", en: "Can I get it with milk?" },
      { kr: "더 큰 컵으로 주실 수 있어요?", en: "Could I get a bigger cup?" },
      { kr: "카드 돼요?", en: "Can I pay by card?" },
      { kr: "죄송해요, 스페인어를 못해요.", en: "Sorry, I don't speak Spanish." }
    ]
  },
  {
    id: 71,
    title: "렌터카 보험 영어로 거절했다.",
    category: "렌터카 카운터 · 추가 옵션 거절",
    page: "p.194-197",
    tip: "미국 렌터카 카운터는 보험, GPS, 선불 주유 같은 옵션을 계속 권해요. 먼저 “Is that optional?”으로 필수인지 확인하고, 필요 없으면 “I'll pass.”로 거절하면 돼요. 단, 신용카드나 여행자 보험으로 보장되는지는 출발 전에 꼭 확인하세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "보험은 괜찮아요. (안 들게요)", en: "I'll pass on the insurance.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "그거 선택 사항이에요?", en: "Is that optional?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (직원)", kr: "마이애미에 오신 걸 환영해요! 준비 다 됐어요. 소형차, 3일이요.", en: "Welcome to Miami! You're all set. Compact car, three days.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "좋아요, 감사합니다!", en: "Perfect, thank you!", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "그럼. 종합 보험 드시겠어요?", en: "Now. Would you like full coverage insurance?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "얼마예요?", en: "How much is it?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "하루에 40달러밖에 안 해요.", en: "Only $40 a day.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그거 선택 사항이에요?", en: "Is that optional?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "엄밀히 말하면, 네.", en: "Technically, yes.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 보험은 안 들게요.", en: "Then I'll pass on the insurance.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요! GPS는요? 하루에 15달러예요.", en: "Okay! How about GPS? Only $15 a day.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "휴대폰 있어요. 괜찮아요.", en: "I have my phone. I'll pass.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "선불 주유는요?", en: "Prepaid fuel?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "괜찮아요.", en: "I'll pass.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "긴급 출동 서비스는요?", en: "Roadside assistance?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "패스.", en: "Pass.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요. 마지막. 코코넛 보호 상품.", en: "Okay. Last one. Coconut protection.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그런 게 어디 있어요.", en: "That's not a real thing.", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "알겠어요. 차는 C열에 있어요. 행운을 빌어요.", en: "Fine. Your car's in row C. Good luck out there.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "고마워요, 채드. 괜찮을 거예요.", en: "Thanks, Chad. We'll be fine.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "하루 40달러 아꼈다. 나 천재야.", en: "$40 a day saved. I'm a genius.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "그래, 천재야. 그럼 네 차 위에 왜 공룡이 있어?", en: "Okay, genius. Then why is there a dinosaur on your car?", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이구아나야. 그것도 보험 되나요?", en: "Iguana. Is that covered?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "종합 보험 없이는 안 되죠.", en: "Not without full coverage.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "마음 바꾸기엔 너무 늦었나요?", en: "Is it too late to change my mind?", note: "" },
      { role: "B", roleLabel: "B (직원)", kr: "아, 그럼 저야 좋죠.", en: "Oh, I'd love that.", note: "" }
    ],
    extras: [
      { kr: "제 신용카드로 보장되나요?", en: "Does my credit card cover it?" },
      { kr: "이미 보험 있어요.", en: "I'm already covered." },
      { kr: "보험은 뭘 보장해요?", en: "What does the insurance cover?" },
      { kr: "보증금이 있나요?", en: "Is there a deposit?" },
      { kr: "기름을 가득 채워서 반납해야 하나요?", en: "Do I need to return it with a full tank?" },
      { kr: "운전자를 한 명 추가할 수 있나요?", en: "Can I add a second driver?" },
      { kr: "차는 어디에 반납해요?", en: "Where do I return the car?" },
      { kr: "출발 전에 흠집 있는 곳 좀 보여 주시겠어요?", en: "Could you show me the scratches before I leave?" }
    ]
  },
  {
    id: 72,
    title: "먼저 가세요.",
    category: "호텔 입구 · 문 앞에서 양보하기",
    page: "p.198-201",
    tip: "After you는 문 앞뿐 아니라 줄 설 때, 엘리베이터 탈 때, 뷔페에서 음식 담을 때도 쓰는 “먼저 하세요”예요. 누가 양보해 주면 “Thank you.” 하고 바로 지나가면 돼요. “Age before beauty.”는 친한 사이에서만 쓰는 농담이라 조심하세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "먼저 가세요. / 먼저 하세요.", en: "After you.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "먼저 가세요.", en: "Please, go ahead.", note: "핵심 표현" },
      { role: "A", roleLabel: "A (손님)", kr: "먼저 가세요.", en: "After you.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "아니, 아니에요. 아가씨 먼저 가요.", en: "Oh no, no. After you, young lady.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "먼저 가세요.", en: "Please, go ahead.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "정말 괜찮아요, 먼저 가요.", en: "I insist.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "아니에요, 정말 먼저 가세요.", en: "No, I insist.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "여성분 먼저예요. 제 고향에선 그게 규칙이에요.", en: "Ladies first. That's the rule where I come from.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "손님 먼저예요. 제 고향에선 그게 규칙이에요.", en: "Guests first. That's the rule where I come from.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "글쎄요, 전 먼저 안 가요.", en: "Well, I'm not going first.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저도요.", en: "Neither am I.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "팽팽한 대치 상황이네. 3분. 우리 여기서 3분째야.", en: "It's a standoff. Three minutes. We've been here three minutes.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "좋아. 새로운 계획. 둘이 동시에 지나가요. 셋 하면 가요. 하나, 둘, 셋!", en: "Okay. New plan. You both go at the same time. On three. One, two, three!", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이게 다 할아버지 탓이에요.", en: "This is your fault.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "난 예의 바르게 자랐을 뿐이에요.", en: "I was raised with manners.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 연장자 먼저요.", en: "Age before beauty, then.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "하나! 그런 말 하면 안 돼!", en: "Hana! You can't say that!", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "맞는 말이에요, 내가 나이가 많죠. 먼저 지나갈게요. 드디어.", en: "She's right, I'm old. Let me through. Finally.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "문 잡았어요! 먼저 가요, 다들 먼저 가요.", en: "Hold the door! After you, after you, everybody.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "감사합니다. 정말 친절하세요.", en: "Thank you, sir. You're very kind.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "남부식 환대예요, 아가씨. 편하게 하세요. 진심이에요. 제 호텔에 오신 걸 환영해요.", en: "Southern hospitality, young lady. Be my guest. And I do mean that. Welcome to my hotel.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "할아버지 호텔이에요?", en: "Your hotel?", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "1982년에 지었죠.", en: "Built it in 1982.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "호텔 주인을 5분 동안 밖에 세워 둔 거야.", en: "You made the owner stand outside for five minutes.", note: "" },
      { role: "B", roleLabel: "B (할아버지)", kr: "이번 주 최고의 5분이었어요.", en: "Best five minutes I've had all week.", note: "" }
    ],
    extras: [
      { kr: "문 잡아 주셔서 감사해요.", en: "Thanks for holding the door." },
      { kr: "문 열어 드릴게요.", en: "Let me get the door for you." },
      { kr: "먼저 하세요, 저 안 급해요.", en: "Go ahead, I'm not in a hurry." },
      { kr: "죄송한데 좀 지나갈게요.", en: "Excuse me, could I get by?" },
      { kr: "줄 서신 거예요?", en: "Are you in line?" },
      { kr: "먼저 오셨잖아요.", en: "You were here first." },
      { kr: "먼저 타세요. 저는 다음 엘리베이터 탈게요.", en: "After you. I'll take the next elevator." },
      { kr: "발밑 조심하세요.", en: "Watch your step." }
    ]
  },
  {
    id: 73,
    title: "팁 포함인 줄 모르고 두 번 냈다.",
    category: "식당 · 계산서와 팁",
    page: "p.202-203",
    tip: "미국 식당은 보통 15~20%를 팁으로 내요. 그런데 단체 손님이나 관광지 식당은 계산서에 팁(gratuity, service charge)이 이미 포함된 경우가 있어요. 화면의 팁 버튼을 누르기 전에 “Is the tip included?”라고 먼저 물어보세요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "팁이 포함된 건가요?", en: "Is the tip included?", note: "핵심 표현" },
      { role: "B", roleLabel: "B (서버)", kr: "계산서 여기 있어요.", en: "Here's your check.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "팁 25%요. 감사합니다!", en: "25% tip. Thank you!", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "하나. 잠깐만.", en: "Hana. Wait.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "팁이 포함된 건가요?", en: "Is the tip included?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "네. 팁이 이미 포함되어 있어요.", en: "Yes. The tip is already included.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "그럼 제가 팁을 두 번 낸 거예요?", en: "So I tipped twice?", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "네, 그러셨어요. 걱정 마세요. 바로잡아 드릴게요.", en: "You did. Don't worry. I'll fix it for you.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "다 됐어요. 팁 취소됐어요.", en: "All done. Your tip is canceled.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "정말요? 정말 감사해요.", en: "Really? Thank you so much.", note: "" },
      { role: "B", roleLabel: "B (서버)", kr: "별말씀을요.", en: "No problem.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "이건 당신 거예요. 거스름돈은 가지세요.", en: "This is for you. Keep the change.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "이번엔 일부러 팁을 주시네요.", en: "Now you're tipping on purpose.", note: "" }
    ],
    extras: [
      { kr: "봉사료가 포함되어 있나요?", en: "Is service charge included?" },
      { kr: "팁은 얼마나 줘야 해요?", en: "How much should I tip?" },
      { kr: "팁 금액을 직접 정할 수 있나요?", en: "Can I leave a custom tip?" },
      { kr: "계산서 다시 확인해 주시겠어요?", en: "Could you check the bill again?" },
      { kr: "두 번 결제된 것 같아요.", en: "I think I was charged twice." },
      { kr: "현금으로 내도 될까요?", en: "Can I pay in cash?" },
      { kr: "따로 계산할 수 있을까요?", en: "Could we split the check?" },
      { kr: "영수증 주시겠어요?", en: "Could I get a receipt?" }
    ]
  },
  {
    id: 74,
    title: "할인 적용이 안 됐어요.",
    category: "옷가게 · 계산 금액 확인",
    page: "p.204-206",
    tip: "“I don't think ~”로 말하면 상대를 탓하지 않고 부드럽게 말할 수 있어요. 미국 가게는 할인이 자동으로 안 들어가는 경우가 꽤 있으니 금액이 이상하면 꼭 확인하세요. 앱이나 회원 가입을 하면 그 자리에서 할인해 주는 곳도 많아요.",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "할인이 적용 안 된 것 같아요.", en: "I don't think the discount was applied.", note: "핵심 표현" },
      { role: "B", roleLabel: "B (점원)", kr: "총 120달러입니다.", en: "Your total is $120.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "120달러요? 밖에 표지판에 30% 할인이라고 써 있는데.", en: "$120? The sign outside says 30% off.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 할인이 적용 안 된 것 같아요.", en: "Excuse me. I don't think the discount was applied.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "아! 확인해 볼게요. 아. 그 할인은 내일부터예요.", en: "Oh! Let me check. Ah. That sale starts tomorrow.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "내일이요? 그럼 내일 다시 올게요.", en: "Tomorrow? Then I'll come back tomorrow.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "잠깐, 잠깐만요. 다른 방법이 있어요. 오늘 저희 앱에 가입하시면 지금 바로 30% 할인돼요.", en: "Wait, wait, wait. There's another way. If you join our app today, you get 30% off right now.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "지금 바로요? 좋아요. 가입할게요. 전화번호를 달래.", en: "Right now? Okay. I'm joining. It's asking for a phone number.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "내 거 써.", en: "Just use mine.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "좋아요. 할인 적용됐어요. 총 84달러입니다.", en: "Perfect. Discount applied. Your new total is $84.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "84달러요? 한 번만 더 확인해 주시겠어요?", en: "$84? Could you check it one more time?", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "제대로 들어갔어요. 정말이에요.", en: "It went through. I promise.", note: "" },
      { role: "B", roleLabel: "B (친구)", kr: "얘 이제 아무도 안 믿어요. 팁 사건 이후로는요.", en: "She doesn't trust anyone anymore. Not since the tip.", note: "" },
      { role: "B", roleLabel: "B (점원)", kr: "그리고 신규 회원은 에코백도 무료예요.", en: "And new members get a free tote bag.", note: "" },
      { role: "A", roleLabel: "A (손님)", kr: "무료요? 이제 얘 내일도 올 거예요. 할인 때문에.", en: "Free? Now she's going to come back tomorrow too. For the sale.", note: "" }
    ],
    extras: [
      { kr: "이거 30% 할인 아니에요?", en: "Isn't this 30% off?" },
      { kr: "가격표에는 40달러라고 써 있어요.", en: "The price tag says $40." },
      { kr: "쿠폰 있나요?", en: "Do you have any coupons?" },
      { kr: "이것도 할인돼요?", en: "Is this on sale too?" },
      { kr: "할인은 언제까지예요?", en: "When does the sale end?" },
      { kr: "회원 할인 있나요?", en: "Is there a member discount?" },
      { kr: "가격 다시 확인해 주시겠어요?", en: "Could you check the price again?" },
      { kr: "차액은 환불받을 수 있나요?", en: "Can I get a refund for the difference?" }
    ]
  }
];