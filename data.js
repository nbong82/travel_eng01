// ============================================================================
// 여행영어 실전 대사집 데이터 파일 (data.js) - 11번 ~ 20번 전체 수록
// ============================================================================

const situationsData = [
  {
    id: 1,
    title: "조식은 몇 시부터예요?",
    category: "호텔",
    page: "p.09",
    dialogues: [
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "조식은 몇 시부터예요?",
        en: "What time does breakfast start?",
        page: "p.09 핵심표현",
        note: "💡 TIP: What time does ~ start / end / open / close? 패턴 하나로 호텔의 모든 시간 질문이 해결됩니다.",
        extras: [
          { en: "What time does breakfast end?", kr: "조식은 몇 시까지예요?" },
          { en: "Where is breakfast served?", kr: "조식은 어디서 먹어요?" },
          { en: "Is breakfast included?", kr: "조식 포함인가요?" },
          { en: "Is breakfast complimentary?", kr: "조식은 무료인가요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "조식은 6시 반에 시작해요.",
        en: "Breakfast starts at six thirty.",
        page: "p.09 영상대사",
        note: "💡 대답은 at 뒤에 나오는 시간만 잡으면 돼요.",
        extras: [
          { en: "What time does the pool open?", kr: "수영장은 몇 시에 열어요?" },
          { en: "What time does the gym close?", kr: "헬스장은 몇 시에 닫아요?" }
        ]
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "조금 일찍 가도 돼요?",
        en: "Can I come a little earlier?",
        page: "p.09 영상대사",
        note: "",
        extras: [
          { en: "Do you serve breakfast on weekends too?", kr: "주말에도 조식 나와요?" },
          { en: "Can I get breakfast to go?", kr: "조식을 포장해 갈 수 있나요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "6시 반에 문을 열어요.",
        en: "The doors open at six thirty.",
        page: "p.09 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "네, 감사합니다.",
        en: "Okay, thank you.",
        page: "p.09 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "좋은 아침이에요. 딱 맞춰 오셨네요.",
        en: "Good morning. Right on time.",
        page: "p.09 영상대사",
        note: "💡 Right on time: 시간에 딱 맞춰 왔을 때 쓰는 표현",
        extras: []
      }
    ]
  },
  {
    id: 2,
    title: "가장 큰 사이즈로 주시겠어요?",
    category: "카페",
    page: "p.11",
    dialogues: [
      { role: "B", roleLabel: "B (직원)", kr: "안녕하세요. 뭐 드릴까요?", en: "Good morning. What can I get you?", page: "p.11 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아이스 아메리카노 주세요.", en: "An iced Americano, please.", page: "p.11 영상대사", note: "", extras: [
        { en: "Can I get that with oat milk?", kr: "그거 귀리 우유로 바꿔주시겠어요?" },
        { en: "Less ice, please.", kr: "얼음 적게 주세요." },
        { en: "Can I get an extra shot?", kr: "샷 추가할 수 있을까요?" }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "사이즈는요?", en: "What size?", page: "p.11 영상대사", note: "", extras: [{ en: "What sizes do you have?", kr: "사이즈는 어떤 게 있어요?" }] },
      { role: "A", roleLabel: "A (손님)", kr: "가장 큰 사이즈로 주시겠어요?", en: "Can I get the largest size?", page: "p.11 핵심표현", note: "💡 반대 표현: Can I get the smallest size? (제일 작은 사이즈로 주시겠어요?)", extras: [
        { en: "Can I get the smallest size?", kr: "제일 작은 사이즈로 주시겠어요?" },
        { en: "Can I get a medium?", kr: "중간 사이즈로 주세요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "제일 큰 거요? 정말요?", en: "The largest? Are you sure?", page: "p.11 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 확실해요.", en: "Yes, please. I'm sure.", page: "p.11 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "더 필요한 거 있으세요?", en: "Anything else?", page: "p.11 영상대사", note: "", extras: [
        { en: "For here or to go?", kr: "드시고 가세요, 포장이세요?" },
        { en: "For here, please. / To go, please.", kr: "먹고 갈게요. / 포장이요." }
      ]},
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 그게 다예요.", en: "No, that's it.", page: "p.11 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "주문자 이름 알려주시겠어요?", en: "Can I get a name for the order?", page: "p.11 영상대사", note: "💡 TIP: 미국 카페는 주문 후 이름을 물어봅니다.", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "알겠습니다. 금방 나올 거예요.", en: "Got it. That'll be right up.", page: "p.11 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 3,
    title: "포장해주시겠어요?",
    category: "식당",
    page: "p.13",
    dialogues: [
      { role: "B", roleLabel: "B (서버)", kr: "음식 어떠셨어요?", en: "How was everything?", page: "p.13 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "맛있었는데 너무 배불러요.", en: "It was delicious, but I'm so full.", page: "p.13 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "이거 포장해주시겠어요?", en: "Can I get this to go?", page: "p.13 핵심표현", note: "💡 TIP: 미국에선 포장을 take-out보다 to go라고 훨씬 많이 씁니다.", extras: [
        { en: "Can I get a to-go box?", kr: "포장 박스 하나 주시겠어요?" },
        { en: "Could you wrap this up for me?", kr: "이거 싸주시겠어요?" },
        { en: "Can I get the rest to go?", kr: "남은 거 포장해 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "그거 포장 박스 드릴까요?", en: "Would you like a box for that?", page: "p.13 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁드려요.", en: "Yes, please.", page: "p.13 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 박스 가져다드릴게요.", en: "Of course. I'll bring you a box.", page: "p.13 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "계산서도 드릴까요?", en: "Would you like the check as well?", page: "p.13 영상대사", note: "", extras: [
        { en: "Can I get the check, please?", kr: "계산서 주시겠어요?" },
        { en: "Can we split the check?", kr: "계산 나눠서 할 수 있을까요?" },
        { en: "Do you take credit cards?", kr: "카드 되나요?" },
        { en: "Is the tip included?", kr: "팁이 포함된 건가요?" },
        { en: "Keep the change.", kr: "거스름돈은 됐어요." }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "서두르지 마세요. 천천히 하세요.", en: "No rush. Take your time.", page: "p.13 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 4,
    title: "예약 없이 숙박 가능한가요?",
    category: "호텔",
    page: "p.15",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "예약 없이 숙박 가능한가요?", en: "Do you take walk-ins?", page: "p.15 핵심표현", note: "💡 TIP: walk-in은 예약 없이 온 손님이라는 뜻입니다.", extras: [
        { en: "Do you have any rooms available tonight?", kr: "오늘 밤 빈방 있나요?" },
        { en: "I'd like to check in, please.", kr: "체크인하려고요." },
        { en: "I have a reservation under Kim.", kr: "김으로 예약했어요." }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "네, 가능해요. 몇 박이세요?", en: "Yes, we do. How many nights?", page: "p.15 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "하룻밤이요.", en: "Just one night.", page: "p.15 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "빈방 확인해 볼게요. 침대 두 개짜리 방이 있어요.", en: "Let me check availability. We have a room with two beds available.", page: "p.15 영상대사", note: "", extras: [{ en: "Can I get a room with a view?", kr: "전망 좋은 방으로 받을 수 있을까요?" }] },
      { role: "A", roleLabel: "A (손님)", kr: "1박에 얼마예요?", en: "How much is it per night?", page: "p.15 영상대사", note: "", extras: [
        { en: "Is that price plus tax?", kr: "그 가격은 세금 별도인가요?" },
        { en: "Does that include breakfast?", kr: "조식 포함인가요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "160달러, 세금 포함이요.", en: "One hundred and sixty dollars, tax included.", page: "p.15 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "그걸로 할게요.", en: "We'll take it.", page: "p.15 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "좋아요. 신분증 보여주시겠어요? 512호예요. 엘리베이터는 왼쪽이에요. 즐거운 시간 되세요.", en: "Wonderful. May I see your ID? Room 512. Elevators are to your left. Enjoy your stay.", page: "p.15 영상대사", note: "", extras: [
        { en: "What time is checkout?", kr: "체크아웃은 몇 시예요?" },
        { en: "Can I get a late checkout?", kr: "체크아웃을 늦출 수 있을까요?" }
      ]}
    ]
  },
  {
    id: 5,
    title: "휴지가 다 떨어졌어요.",
    category: "호텔",
    page: "p.17",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "안녕하세요, 512호인데요. 휴지가 다 떨어졌어요.", en: "Hi, this is room 512. We're out of toilet paper.", page: "p.17 핵심표현", note: "💡 TIP: We're out of ~ 패턴 하나로 다 떨어졌다는 표현을 전부 쓸 수 있어요.", extras: [
        { en: "We're out of towels.", kr: "수건이 다 떨어졌어요." },
        { en: "We're out of shampoo.", kr: "샴푸가 다 떨어졌어요." },
        { en: "We're out of coffee pods.", kr: "커피 캡슐이 다 떨어졌어요." }
      ]},
      { role: "A", roleLabel: "A (투숙객)", kr: "좀 올려보내 주시겠어요?", en: "Could you send some up?", page: "p.17 영상대사", note: "", extras: [
        { en: "Could I get some extra pillows?", kr: "베개 좀 더 받을 수 있을까요?" },
        { en: "Could I get an extra blanket?", kr: "담요 하나 더 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "물론이죠. 바로 사람 보내드릴게요. 더 필요한 거 있으세요?", en: "Of course. I'll send someone right away. Is there anything else you need?", page: "p.17 영상대사", note: "", extras: [
        { en: "The room hasn't been cleaned yet.", kr: "방 청소가 아직 안 됐어요." },
        { en: "The air conditioning isn't working.", kr: "에어컨이 안 돼요." },
        { en: "Could you send someone to take a look?", kr: "누가 와서 봐주실 수 있을까요?" }
      ]},
      { role: "A", roleLabel: "A (투숙객)", kr: "아니요, 그게 다예요. 감사합니다.", en: "No, that's all. Thank you.", page: "p.17 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "하우스키핑입니다. 여기요.", en: "Housekeeping. Here you go.", page: "p.17 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "완벽해요, 정말 감사합니다.", en: "Perfect, thank you so much.", page: "p.17 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 6,
    title: "비슷한 디자인으로 다른 거 있나요?",
    category: "옷가게",
    page: "p.19",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "저 꽃무늬 원피스, 마지막이었어요?", en: "That floral dress, was that the last one?", page: "p.19 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "아쉽지만 그래요. 그게 마지막이었어요.", en: "I'm afraid so. That was the last one.", page: "p.19 영상대사", note: "💡 I'm afraid so는 '아쉽지만 그렇다'는 뜻입니다.", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "비슷한 디자인으로 다른 거 있나요?", en: "Do you have anything similar?", page: "p.19 핵심표현", note: "", extras: [
        { en: "Do you have this in a smaller size?", kr: "이거 작은 사이즈 있나요?" },
        { en: "Do you have this in a bigger size?", kr: "이거 큰 사이즈 있나요?" },
        { en: "Do you have this in a different color?", kr: "이거 다른 색 있나요?" }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "몇 가지 보여드릴게요. 이건 방금 들어온 거예요. 같은 스타일, 다른 무늬예요.", en: "Let me show you a few options. This one just came in. Same style, different print.", page: "p.19 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "미디엄 사이즈 있어요? 입어봐도 돼요?", en: "Do you have it in a medium? Can I try it on?", page: "p.19 영상대사", note: "💡 TIP: 사이즈나 색상을 말할 땐 꼭 in을 넣으세요.", extras: [
        { en: "Where's the fitting room?", kr: "탈의실이 어디예요?" },
        { en: "Can I just look around?", kr: "그냥 구경해도 될까요?" },
        { en: "I'm just looking, thanks.", kr: "그냥 둘러보는 중이에요, 감사해요." },
        { en: "Is this on sale?", kr: "이거 세일 중인가요?" },
        { en: "I'll take this one.", kr: "이걸로 할게요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "탈의실은 뒤쪽 왼편이에요.", en: "The fitting rooms are in the back, on your left.", page: "p.19 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 7,
    title: "이거면 충분해요 (will do 패턴)",
    category: "패턴",
    page: "p.21",
    dialogues: [
      { role: "B", roleLabel: "B (직원)", kr: "어디에 앉으시겠어요?", en: "Where would you like to sit?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아무 자리나 돼요.", en: "Any seat will do.", page: "p.21 핵심표현", note: "💡 TIP: ~ will do 패턴은 '~면 충분해요'라는 뜻입니다.", extras: [
        { en: "This will do. / That'll do.", kr: "이거면 돼요. / 그거면 됐어요." },
        { en: "A window seat will do.", kr: "창가 자리면 돼요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "원하시는 테이블 있으세요?", en: "Any preference for a table?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아무 테이블이나 돼요.", en: "Any table will do.", page: "p.21 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "사이즈는요?", en: "What size?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "작은 거면 돼요.", en: "A small one will do.", page: "p.21 영상대사", note: "", extras: [
        { en: "A regular size will do.", kr: "보통 사이즈면 돼요." },
        { en: "Cash will do.", kr: "현금이면 돼요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "다른 날도 괜찮으세요?", en: "Is another day okay?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "내일이면 돼요.", en: "Tomorrow will do.", page: "p.21 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "모닝콜 몇 시로 해드릴까요?", en: "What time should we set your wake-up call?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "3시면 돼요.", en: "Three o'clock will do.", page: "p.21 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (친구)", kr: "피자, 아니면 초밥?", en: "Pizza or sushi?", page: "p.21 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (나)", kr: "아무거나 돼요.", en: "Anything will do.", page: "p.21 영상대사", note: "", extras: [
        { en: "Either one will do.", kr: "둘 중 아무거나 돼요." },
        { en: "Whatever's easiest will do.", kr: "제일 편한 걸로 하면 돼요." },
        { en: "That will do for now.", kr: "일단 그거면 됐어요." }
      ]}
    ]
  },
  {
    id: 8,
    title: "숙박을 하루 더 연장해 주시겠어요?",
    category: "호텔",
    page: "p.23",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "어서, 체크아웃 11시야! 숙박을 하루 더 연장해 주시겠어요?", en: "Come on, checkout is at eleven! Could you extend my stay for one more night?", page: "p.23 핵심표현", note: "💡 TIP: 연장 절차는 방 번호 -> 빈방 확인 -> 요금 확인 순서입니다.", extras: [
        { en: "I'd like to extend my stay by two nights.", kr: "이틀 더 연장하고 싶어요." },
        { en: "Can I stay in the same room?", kr: "같은 방에 계속 있을 수 있나요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "물론이죠. 방 번호가 어떻게 되세요?", en: "Of course. What's your room number?", page: "p.23 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "1204호요.", en: "Room 1204.", page: "p.23 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "빈방 확인해 볼게요. 좋은 소식이에요, 같은 방이 가능해요. 요금은 동일해요.", en: "Let me check availability. Good news, the same room is available. It'll be the same rate.", page: "p.23 영상대사", note: "", extras: [{ en: "Is it the same rate for the extra night?", kr: "추가 숙박도 요금이 같나요?" }] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "등록된 카드로 결제할까요?", en: "Should I charge the card on file?", page: "p.23 영상대사", note: "💡 card on file은 체크인 때 등록해 둔 카드라는 뜻입니다.", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 부탁드려요!", en: "Yes, please!", page: "p.23 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "다 됐습니다. 체크아웃은 내일 11시예요.", en: "You're all set. Checkout is at eleven tomorrow.", page: "p.23 영상대사", note: "", extras: [
        { en: "I'd like to check out a day early.", kr: "하루 일찍 체크아웃하고 싶어요." },
        { en: "Could you hold my luggage after checkout?", kr: "체크아웃 후에 짐을 맡길 수 있나요?" },
        { en: "Can I get a copy of the receipt?", kr: "영수증 한 부 받을 수 있을까요?" },
        { en: "I'd like to check out, please.", kr: "체크아웃할게요." }
      ]}
    ]
  },
  {
    id: 9,
    title: "조식은 몇 시까지예요?",
    category: "호텔",
    page: "p.25",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "조식은 몇 시까지예요?", en: "What time does breakfast end?", page: "p.25 핵심표현", note: "💡 TIP: 1번(start)과 짝을 이루는 표현입니다.", extras: [
        { en: "It's served from six thirty to ten thirty.", kr: "6시 반부터 10시 반까지예요." },
        { en: "Until what time is breakfast?", kr: "조식은 몇 시까지인가요?" },
        { en: "Is it too late for breakfast?", kr: "조식 먹기엔 너무 늦었나요?" },
        { en: "Are you still serving breakfast?", kr: "아직 조식 하고 있나요?" }
      ]},
      { role: "B", roleLabel: "B (호텔 직원)", kr: "조식은 10시 반에 끝나요.", en: "Breakfast ends at ten thirty.", page: "p.25 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "어디서 먹어요?", en: "Where is it served?", page: "p.25 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (호텔 직원)", kr: "2층, 엘리베이터 바로 지나서요.", en: "On the second floor, just past the elevators.", page: "p.25 영상대사", note: "", extras: [
        { en: "What time does the restaurant close?", kr: "식당은 몇 시에 닫아요?" },
        { en: "What time does the bar close?", kr: "바는 몇 시에 닫아요?" },
        { en: "Is room service available 24 hours?", kr: "룸서비스는 24시간 되나요?" },
        { en: "What time does the front desk close?", kr: "프런트는 몇 시까지 해요?" }
      ]},
      { role: "A", roleLabel: "A (투숙객)", kr: "10시 20분이야. 조식 10시 반에 끝나.", en: "It's ten twenty. Breakfast ends at ten thirty.", page: "p.25 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (식당 직원)", kr: "오셨네요. 10시 29분이에요.", en: "You made it. Ten twenty-nine.", page: "p.25 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 10,
    title: "아무리 늦어도 3시까지 도착할게요.",
    category: "전화",
    page: "p.27",
    dialogues: [
      { role: "B", roleLabel: "B (가이드)", kr: "투어는 3시에 출발해요. 몇 시에 오실 수 있어요?", en: "Our tour leaves at three. What time can you get here?", page: "p.27 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아무리 늦어도 3시까지 도착할게요.", en: "I'll be there by three at the latest.", page: "p.27 핵심표현", note: "💡 TIP: 도착 약속엔 무조건 전치사 by를 쓰세요.", extras: [
        { en: "I'll be there in ten minutes.", kr: "10분 뒤에 도착해요." },
        { en: "I'm running a little late.", kr: "조금 늦을 것 같아요." },
        { en: "I'm stuck in traffic.", kr: "차가 막혀서요." },
        { en: "I'll be there as soon as I can.", kr: "최대한 빨리 갈게요." }
      ]},
      { role: "B", roleLabel: "B (가이드)", kr: "좋아요. 그때 봬요.", en: "Perfect. See you then.", page: "p.27 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (가이드)", kr: "지금 어디예요?", en: "Where are you now?", page: "p.27 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "가는 중이에요.", en: "I'm on my way.", page: "p.27 영상대사", note: "", extras: [
        { en: "Can you wait a few more minutes?", kr: "몇 분만 더 기다려 주실 수 있어요?" },
        { en: "I'm almost there.", kr: "거의 다 왔어요." },
        { en: "I'm right outside.", kr: "바로 앞에 있어요." },
        { en: "Sorry to keep you waiting.", kr: "기다리게 해서 죄송해요." }
      ]},
      { role: "B", roleLabel: "B (가이드)", kr: "서두르지 마세요. 천천히 오세요. ... 2시 59분. 딱 맞춰 오셨네요.", en: "No rush. Take your time. ... Two fifty-nine. Right on time.", page: "p.27 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 11,
    title: "청소는 필요없어요.",
    category: "호텔",
    page: "p.29-30",
    dialogues: [
      { role: "A", roleLabel: "A (투숙객)", kr: "오늘은 청소 필요없어요.", en: "I don't need housekeeping today.", page: "p.29 핵심표현", note: "💡 TIP: 청소는 거절하고 수건만 받는 조합이 실전에서 제일 많이 쓰여요. 반대로 청소를 원하면 Could you make up the room? 이라고 하면 됩니다.", extras: [
        { en: "Could you make up the room, please?", kr: "방 청소해 주시겠어요?" },
        { en: "Could you come back later?", kr: "나중에 다시 와주시겠어요?" },
        { en: "Could you clean the room while we're out?", kr: "저희 나가 있는 동안 청소해 주시겠어요?" },
        { en: "Just the towels, please.", kr: "수건만 부탁드려요." },
        { en: "Could you change the sheets?", kr: "시트 갈아주시겠어요?" },
        { en: "Could you empty the trash?", kr: "쓰레기통 비워주시겠어요?" },
        { en: "We're checking out today.", kr: "오늘 체크아웃이에요." },
        { en: "Please don't disturb us until noon.", kr: "정오까지는 방해하지 말아 주세요." }
      ]},
      { role: "B", roleLabel: "B (하우스키핑)", kr: "하우스키핑입니다.", en: "Housekeeping.", page: "p.29 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "정말요? 번거롭지 않아요.", en: "Are you sure? It's no trouble.", page: "p.29 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "네, 괜찮아요. 그런데 새 수건을 받을 수 있을까요?", en: "I'm sure, thank you. But could I get some fresh towels?", page: "p.29 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "더 필요한 거 있으세요?", en: "Do you need anything else?", page: "p.29 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (투숙객)", kr: "아니요, 그게 다예요. 정말 감사합니다.", en: "No, that's all. Thank you so much.", page: "p.29 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (하우스키핑)", kr: "문에 팻말만 걸어두세요.", en: "Just hang the sign on the door.", page: "p.29 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 12,
    title: "분실물 들어온 거 있나요?",
    category: "호텔",
    page: "p.31-32",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "분실물 들어온 거 있나요?", en: "Has anything been turned in?", page: "p.31 핵심표현", note: "💡 TIP: turn in은 '제출하다'라는 뜻이라 Has anything been turned in?은 '들어온 게 있나요?'가 돼요. 분실물 대화는 뭘 잃어버렸나 -> 생김새 -> 마지막 위치 순서로 진행됩니다.", extras: [
        { en: "I think I left my phone in the room.", kr: "방에 폰을 두고 온 것 같아요." },
        { en: "I lost my wallet.", kr: "지갑을 잃어버렸어요." },
        { en: "Do you have a lost and found?", kr: "분실물 보관소가 있나요?" },
        { en: "Could you check the lost and found?", kr: "분실물 보관소 확인해 주시겠어요?" },
        { en: "It's a black leather wallet.", kr: "검정 가죽 지갑이에요." },
        { en: "Could you call me if it turns up?", kr: "찾으면 연락 주시겠어요?" },
        { en: "Here's my number.", kr: "여기 제 번호예요." },
        { en: "I found this in the lobby.", kr: "로비에서 이걸 주웠어요." }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "확인해 볼게요. 뭘 잃어버리셨어요?", en: "Let me check. What did you lose?", page: "p.31 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "제 선글라스요.", en: "My sunglasses.", page: "p.31 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "어떻게 생겼는지 설명해 주시겠어요?", en: "Can you describe them?", page: "p.31 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "검정색 동그란 테요.", en: "Black, round frames.", page: "p.31 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "마지막으로 어디서 보셨어요?", en: "Where did you last have them?", page: "p.31 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "수영장에서요, 아마.", en: "By the pool, I think.", page: "p.31 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "죄송하지만 그런 건 안 들어왔어요.", en: "I'm sorry, nothing like that has been turned in.", page: "p.31 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 그래도 감사합니다.", en: "Okay. Thank you anyway.", page: "p.31 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 13,
    title: "반으로 잘라주시겠어요?",
    category: "식당",
    page: "p.33-34",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 이거 나눠 먹을 거예요. 이거 반으로 잘라주시겠어요?", en: "Excuse me. We're going to share this. Could you cut this in half?", page: "p.33 핵심표현", note: "💡 TIP: We're going to share this.를 먼저 말하면 서버가 알아서 접시를 챙겨줘요. 미국 식당은 1인분이 커서 나눠 먹는 게 아주 흔합니다.", extras: [
        { en: "Could you cut this into four?", kr: "이거 4등분해 주시겠어요?" },
        { en: "Could we get two plates?", kr: "접시 두 개 주시겠어요?" },
        { en: "Can we share one dessert?", kr: "디저트 하나 나눠 먹어도 될까요?" },
        { en: "Could you split this into two orders?", kr: "이거 두 개로 나눠서 주시겠어요?" },
        { en: "Can I get an extra fork?", kr: "포크 하나 더 주시겠어요?" },
        { en: "Can I get some extra napkins?", kr: "냅킨 좀 더 주시겠어요?" },
        { en: "Could we get a kids' portion?", kr: "아이용 작은 양으로 받을 수 있을까요?" },
        { en: "Is this enough for two people?", kr: "이거 두 명이 먹기에 충분한가요?" }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "그럼요. 접시 하나 더 드릴게요.", en: "Absolutely. Would you like an extra plate?", page: "p.33 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 부탁드려요.", en: "Yes, please.", page: "p.33 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "더 필요한 거 있으세요?", en: "Anything else I can get you?", page: "p.33 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "아니요, 그게 다예요. 감사합니다.", en: "No, that's all. Thank you.", page: "p.33 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "금방 올게요. 여기요. 맛있게 드세요.", en: "I'll be right back. Here you go. Enjoy.", page: "p.33 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 14,
    title: "사람이 별로 없을 때가 언제예요?",
    category: "카페·관광지",
    page: "p.35-36",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "저기요. 지금 대기가 얼마나 돼요?", en: "Excuse me. How long is the wait right now?", page: "p.35 영상대사", note: "💡 TIP: crowded 대신 busy를 써도 같은 뜻이에요. How long is the wait?과 세트로 외워두세요.", extras: [
        { en: "When is it less busy?", kr: "언제 덜 붐비나요?" },
        { en: "Is it usually this crowded?", kr: "보통 이렇게 붐비나요?" },
        { en: "What's the best time to come?", kr: "언제 오는 게 제일 좋아요?" },
        { en: "Can I put my name on the list?", kr: "대기 명단에 이름 올릴 수 있을까요?" },
        { en: "Do you take reservations?", kr: "예약 받으시나요?" },
        { en: "How long is the wait for a table for two?", kr: "2명 테이블은 얼마나 기다려야 해요?" },
        { en: "Can we wait at the bar?", kr: "바에서 기다려도 될까요?" },
        { en: "Is there a line?", kr: "줄이 있나요?" }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "1시간 반 정도요.", en: "About an hour and a half.", page: "p.35 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "사람이 별로 없을 때가 언제예요?", en: "When is it less crowded?", page: "p.35 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "평일 아침, 8시 문 열자마자요.", en: "Weekday mornings, right when we open at eight.", page: "p.35 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "내일 몇 시에 열어요?", en: "What time do you open tomorrow?", page: "p.35 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 내일 아침에 다시 올게요.", en: "Okay. We'll come back tomorrow morning.", page: "p.35 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "좋아요. 그때 봬요. 오셨네요. 들어오세요.", en: "Sounds good. See you then. You made it. Come on in.", page: "p.35 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 15,
    title: "세탁하면 줄어드나요?",
    category: "옷가게",
    page: "p.37-38",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "세탁하면 줄어드나요?", en: "Will this shrink in the wash?", page: "p.37 핵심표현", note: "💡 TIP: 미국 옷 라벨에는 machine wash / tumble dry low / cold water 같은 단어가 그대로 적혀 있어요. 사기 전에 return policy는 꼭 확인하세요.", extras: [
        { en: "Is this dry clean only?", kr: "이거 드라이클리닝만 해야 하나요?" },
        { en: "Can I put it in the dryer?", kr: "건조기에 넣어도 돼요?" },
        { en: "Does the color bleed?", kr: "물 빠지나요?" },
        { en: "Is it wrinkle-free?", kr: "구김이 안 가는 소재인가요?" },
        { en: "Can I return this if it doesn't fit?", kr: "안 맞으면 환불 되나요?" },
        { en: "Can I exchange it for a different size?", kr: "다른 사이즈로 교환할 수 있나요?" },
        { en: "Do I need the receipt to return it?", kr: "환불하려면 영수증이 필요한가요?" },
        { en: "Can I get a gift receipt?", kr: "선물용 영수증 받을 수 있을까요?" }
      ]},
      { role: "B", roleLabel: "B (직원)", kr: "미리 줄여놓은 거라 괜찮을 거예요.", en: "It's pre-shrunk, so it should be fine.", page: "p.37 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "세탁기에 돌려도 돼요?", en: "Can I machine wash it?", page: "p.37 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "네. 찬물 세탁, 건조기는 약하게요.", en: "Yes. Cold water, and tumble dry on low.", page: "p.37 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "소재가 뭐예요?", en: "What's it made of?", page: "p.37 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "100% 면이에요.", en: "One hundred percent cotton.", page: "p.37 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "환불 규정이 어떻게 돼요?", en: "What's your return policy?", page: "p.37 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (직원)", kr: "영수증 있으면 30일이요.", en: "Thirty days, with the receipt.", page: "p.37 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (손님)", kr: "네, 이걸로 할게요.", en: "Okay. I'll take it.", page: "p.37 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 16,
    title: "미지근한 물 주시겠어요?",
    category: "식당",
    page: "p.39",
    dialogues: [
      { role: "A", roleLabel: "A (손님)", kr: "미지근한 물 주시겠어요?", en: "Can I get some room-temperature water?", page: "p.39 핵심표현", note: "💡 TIP: warm water라고 하면 뜨거운 물이 나올 수 있어요. 미지근한 물은 room-temperature water! 미국 식당은 기본이 얼음물이라 No ice, please.가 아주 유용합니다.", extras: [
        { en: "No ice, please.", kr: "얼음 빼주세요." },
        { en: "With ice, please.", kr: "얼음 넣어주세요." },
        { en: "Can I get some hot water?", kr: "뜨거운 물 주시겠어요?" },
        { en: "Still or sparkling?", kr: "생수요, 탄산수요?" },
        { en: "Just tap water is fine.", kr: "그냥 수돗물이면 돼요." },
        { en: "Can I get a refill?", kr: "리필해 주시겠어요?" },
        { en: "Could I get some more water?", kr: "물 좀 더 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "영어 하세요?", en: "Do you speak English?", page: "p.39 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠, 얼음 없이요!", en: "Of course, no ice!", page: "p.39 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 17,
    title: "방문 목적이 무엇인가요?",
    category: "입국심사",
    page: "p.40-41",
    dialogues: [
      { role: "B", roleLabel: "B (심사관)", kr: "방문 목적이 무엇인가요?", en: "What's the purpose of your visit?", page: "p.40 핵심표현", note: "💡 TIP: 질문은 visit / trip / visiting으로 바뀌어 나올 수 있지만 대답은 똑같아요. 다음 질문 How long are you staying? 까지 미리 준비해 두면 입국심사가 편해집니다.", extras: [
        { en: "I'm visiting friends.", kr: "친구들을 만나러 왔어요." },
        { en: "I'll be here for ten days.", kr: "여기서 열흘 머물 예정이에요." },
        { en: "I'm staying with a friend.", kr: "친구 집에서 지낼 거예요." },
        { en: "Here's my hotel reservation.", kr: "여기 호텔 예약 내역입니다." },
        { en: "My return flight is on Friday.", kr: "돌아가는 비행기는 금요일이에요." },
        { en: "I work as an English teacher.", kr: "저는 영어 강사로 일하고 있어요." },
        { en: "Could you repeat the question, please?", kr: "질문을 다시 말씀해 주시겠어요?" },
        { en: "Could you speak a little more slowly?", kr: "조금 더 천천히 말씀해 주시겠어요?" }
      ]},
      { role: "A", roleLabel: "A (여행자)", kr: "휴가 왔어요.", en: "I'm here for vacation.", page: "p.40 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (심사관)", kr: "이번 여행의 목적이 무엇인가요?", en: "What's the purpose of your trip?", page: "p.40 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (여행자)", kr: "관광하러 왔어요.", en: "I'm here for sightseeing.", page: "p.40 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (심사관)", kr: "미국에는 왜 방문하셨나요?", en: "Why are you visiting the U.S.?", page: "p.40 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A (여행자)", kr: "업무차 왔어요.", en: "I'm here on business.", page: "p.40 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (심사관)", kr: "즐거운 시간 되세요.", en: "Enjoy your stay.", page: "p.40 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 18,
    title: "몇 층 가세요?",
    category: "엘리베이터",
    page: "p.42-43",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "영어 하세요?", en: "Do you speak English?", page: "p.42 영상대사", note: "💡 TIP: 짐 든 사람에게 층을 물어봐 주는 작은 친절 표현이에요. 대답은 숫자만 들으면 되니 숫자 듣기 연습도 같이 됩니다.", extras: [
        { en: "Which floor?", kr: "몇 층이요?" },
        { en: "Could you press seven for me?", kr: "7층 좀 눌러주시겠어요?" },
        { en: "Could you hold the elevator?", kr: "엘리베이터 좀 잡아주시겠어요?" },
        { en: "Going up or down?", kr: "올라가세요, 내려가세요?" },
        { en: "Going up. / Going down.", kr: "올라가요. / 내려가요." },
        { en: "This is my floor.", kr: "저 여기서 내려요." },
        { en: "Excuse me, coming through.", kr: "실례합니다, 지나갈게요." },
        { en: "Which floor is the restroom on?", kr: "화장실은 몇 층에 있어요?" },
        { en: "Which floor is the gym on?", kr: "헬스장은 몇 층에 있어요?" }
      ]},
      { role: "A", roleLabel: "A", kr: "몇 층 가세요?", en: "Which floor are you going to?", page: "p.42 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "5층이요!", en: "Five, please!", page: "p.42 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "9층이요!", en: "Nine!", page: "p.42 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "12층이요! 죄송해요!", en: "Twelve! Sorry! Twelve!", page: "p.42 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "같은 층이요!", en: "Same as you!", page: "p.42 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 19,
    title: "화장실 몇 층에 있나요?",
    category: "호텔",
    page: "p.44",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "화장실 몇 층에 있나요?", en: "Which floor is the restroom on?", page: "p.44 핵심표현", note: "💡 TIP: 미국에선 toilet보다 restroom이 훨씬 자연스러워요. toilet은 변기 자체를 뜻해서 살짝 어색하게 들립니다. 문장 끝의 on을 빼먹지 마세요.", extras: [
        { en: "Where is the restroom?", kr: "화장실이 어디예요?" },
        { en: "Is there a restroom on this floor?", kr: "이 층에 화장실이 있나요?" },
        { en: "Is there a restroom nearby?", kr: "근처에 화장실이 있나요?" },
        { en: "Can I use your restroom?", kr: "화장실 좀 써도 될까요?" },
        { en: "Is the restroom for customers only?", kr: "화장실은 손님만 쓸 수 있나요?" },
        { en: "Do I need a code for the restroom?", kr: "화장실 비밀번호가 필요한가요?" },
        { en: "Where is the nearest restroom?", kr: "제일 가까운 화장실은 어디인가요?" },
        { en: "Is it down the hall on the left?", kr: "복도 끝 왼쪽인가요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "영어 하세요?", en: "Do you speak English?", page: "p.44 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "3층이요.", en: "The third floor.", page: "p.44 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "3층이란다.", en: "The third floor, dear.", page: "p.44 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 20,
    title: "빨리 나오는 메뉴가 뭐예요?",
    category: "식당",
    page: "p.45-46",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "빨리 나오는 메뉴가 뭐예요?", en: "What's something that comes out quickly?", page: "p.45 핵심표현", note: "💡 TIP: in a bit of a hurry는 '조금 급하다'는 뜻이에요. 메뉴 이름만 듣지 말고 How long does it take? 로 걸리는 시간도 확인해 보세요. by seven은 '늦어도 7시까지' 입니다.", extras: [
        { en: "What can you make in fifteen minutes?", kr: "15분 안에 준비할 수 있는 메뉴가 뭐예요?" },
        { en: "Which dishes take the least time?", kr: "어떤 요리가 시간이 가장 적게 걸리나요?" },
        { en: "We need to leave by seven.", kr: "저희는 7시까지 나가야 해요." },
        { en: "Is the soup ready to serve?", kr: "수프는 바로 나올 수 있나요?" },
        { en: "Could we order something quick?", kr: "빨리 나오는 걸로 주문할 수 있을까요?" },
        { en: "Could we pay before the food arrives?", kr: "음식이 나오기 전에 계산해도 될까요?" },
        { en: "If it takes too long, could we get it to go?", kr: "너무 오래 걸리면 포장해 주실 수 있나요?" },
        { en: "We only have half an hour.", kr: "저희는 30분밖에 없어요." }
      ]},
      { role: "A", roleLabel: "A", kr: "공연 30분 남았어... 빨리 나오는 메뉴가 뭐예요, 이거 영어로 어떻게 물어봐?", en: "We're in a bit of a hurry...", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "안녕하세요. 저희가 좀 급해요.", en: "Hi. We're in a bit of a hurry.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "괜찮아요.", en: "No problem.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "치킨 샌드위치가 빨라요. 10분 정도요.", en: "The chicken sandwich is fast, about ten minutes.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "파스타는 얼마나 걸려요?", en: "How long does the pasta take?", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "25분 정도요.", en: "About twenty-five minutes.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "치킨 샌드위치 두 개로 할게요.", en: "We'll take two chicken sandwiches.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "좋은 선택이에요.", en: "Good choice.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "그리고 계산서 바로 주시겠어요?", en: "And could we get the check right away?", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠.", en: "Absolutely.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "좋아. 10분이야.", en: "Okay. Ten minutes.", page: "p.45 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "여기 있습니다. 공연 즐겁게 보세요.", en: "Here you go. Enjoy the show.", page: "p.45 영상대사", note: "", extras: [] }
    ]
  }
  {
    id: 21,
    title: "조용한 자리로 옮겨주시겠어요?",
    category: "식당",
    page: "p.47-48",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "좀 더 조용한 자리로 옮겨주시겠어요?", en: "Could you move us somewhere quieter?", page: "p.47 핵심표현", note: "💡 TIP: somewhere quieter는 '좀 더 조용한 곳'이라는 뜻이에요. somewhere 뒤에 quieter를 붙여 장소의 특징을 말합니다. 옮긴 자리가 마음에 들면 Much better.라고 답해 보세요.", extras: [
        { en: "Would it be possible to sit outside?", kr: "밖에 앉을 수 있을까요?" },
        { en: "Is there a quieter table available?", kr: "더 조용한 자리가 있나요?" },
        { en: "Could we sit farther from the speakers?", kr: "스피커에서 좀 더 먼 곳에 앉을 수 있을까요?" },
        { en: "We'd prefer a table inside.", kr: "실내 자리가 더 좋겠어요." },
        { en: "Is there a table away from the kitchen?", kr: "주방에서 떨어진 자리가 있나요?" },
        { en: "Could we wait for a quieter table?", kr: "더 조용한 자리가 날 때까지 기다려도 될까요?" },
        { en: "This spot is much quieter.", kr: "이 자리가 훨씬 조용하네요." },
        { en: "Thank you for moving us.", kr: "자리를 옮겨주셔서 감사합니다." }
      ]},
      { role: "B", roleLabel: "B", kr: "네? 뭐라고요? 음식 어떠냐고 했어.", en: "Sorry, what? I said, how's your food?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "너무 시끄러워... 좀 더 조용한 자리로 옮겨주시겠어요, 이거 영어로 뭐라고 해?", en: "Could you move us somewhere quieter?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "괜찮으세요?", en: "Is everything okay?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "저기, 좀 더 조용한 자리로 옮겨주실 수 있을까요?", en: "Actually, could you move us somewhere quieter?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠. 자리 확인해 볼게요.", en: "Of course. Let me see what we have.", page: "p.47 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "뒤쪽에 자리가 있어요. 괜찮으세요?", en: "There's a table in the back. Would that work?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "그럼 좋죠.", en: "That would be great.", page: "p.47 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "접시 옮겨드릴게요. 따라오세요.", en: "I'll bring your plates over. Follow me.", page: "p.47 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "이게 더 나으세요?", en: "Is this better?", page: "p.47 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "훨씬 좋아요. 감사합니다.", en: "Much better. Thank you.", page: "p.48 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "맛있게 드세요.", en: "Enjoy.", page: "p.48 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 22,
    title: "넓은 자리로 옮겨주시겠어요?",
    category: "식당",
    page: "p.49-50",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "넓은 자리로 옮겨주시겠어요?", en: "Could you move us to a bigger table?", page: "p.49 핵심표현", note: "💡 TIP: move us to a bigger table은 '저희를 더 큰 테이블로 옮겨주다'예요. room은 이 대화에서 '방'이 아니라 '공간'이라는 뜻으로도 쓸 수 있어요.", extras: [
        { en: "Do you have a table with more space?", kr: "공간이 좀 더 넓은 자리가 있나요?" },
        { en: "Could we get a table for four?", kr: "4인용 테이블로 받을 수 있을까요?" },
        { en: "There isn't enough room for all the plates.", kr: "접시를 다 놓을 공간이 부족해요." },
        { en: "Would it be possible to join these two tables?", kr: "이 테이블 두 개를 붙일 수 있을까요?" },
        { en: "Could we sit at the table over there?", kr: "저쪽 테이블에 앉아도 될까요?" },
        { en: "We need some space for a stroller.", kr: "유모차를 놓을 공간이 필요해요." },
        { en: "We'd prefer a booth.", kr: "부스형 좌석이 더 좋겠어요." },
        { en: "This table is just right.", kr: "이 테이블이 딱 좋네요." }
      ]},
      { role: "A", roleLabel: "A", kr: "이건 너무 좁다... 자리 더 넓은 데로 옮겨주시겠어요, 이거 영어로 뭐라고 해?", en: "Could you move us to a bigger table?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "괜찮으세요?", en: "Is everything okay here?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "저기, 넓은 자리로 옮겨주실 수 있을까요?", en: "Actually, could you move us to a bigger table?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠. 빈자리 확인해 볼게요.", en: "Of course. Let me check what's available.", page: "p.49 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "창가에 하나 있어요. 괜찮으세요?", en: "There's one by the window. Is that okay?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "그럼 좋죠.", en: "That would be great.", page: "p.49 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "좋아요. 접시 옮겨드릴게요. 따라오세요.", en: "Perfect. I'll bring your plates over. Just follow me.", page: "p.49 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "음료도 가져가도 돼요?", en: "Can we take our drinks?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "제가 가져갈게요. 걱정 마세요.", en: "I've got them. Don't worry.", page: "p.49 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "이게 더 나으세요?", en: "Is this better?", page: "p.49 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "훨씬 좋아요. 정말 감사합니다.", en: "Much better. Thank you so much.", page: "p.49 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 23,
    title: "소스를 따로 주시겠어요?",
    category: "식당",
    page: "p.51-52",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "소스를 따로 주시겠어요?", en: "Can I get the sauce on the side?", page: "p.51 핵심표현", note: "💡 TIP: on the side는 소스나 드레싱을 음식에 붓지 않고 따로 달라는 뜻이에요. go easy on the cheese는 치즈를 '조금만 넣어 달라'는 요청입니다.", extras: [
        { en: "Can I get the dressing in a separate container?", kr: "드레싱을 별도 용기에 담아주시겠어요?" },
        { en: "Could you leave the sauce off?", kr: "소스는 뿌리지 말아주시겠어요?" },
        { en: "Just a little dressing, please.", kr: "드레싱은 조금만 주세요." },
        { en: "I'd like extra sauce on the side.", kr: "소스를 따로 조금 더 받고 싶어요." },
        { en: "Could I have the butter separately?", kr: "버터를 따로 받을 수 있을까요?" },
        { en: "Could you go easy on the salt?", kr: "소금은 조금만 넣어주시겠어요?" },
        { en: "Does this come with a dipping sauce?", kr: "찍어 먹는 소스가 같이 나오나요?" },
        { en: "Could I try a little sauce first?", kr: "소스를 먼저 조금 맛봐도 될까요?" }
      ]},
      { role: "A", roleLabel: "A", kr: "나는 저렇게 나오면 안 되는데... 소스를 따로 주시겠어요, 이거 영어로 뭐라고 해?", en: "Can I get the sauce on the side?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "손님은 뭐로 드릴까요?", en: "And what can I get for you?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "그릴드 치킨 샐러드로 할게요.", en: "I'll have the grilled chicken salad.", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "드레싱은 뭐로 하시겠어요?", en: "What kind of dressing?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "랜치로요. 그리고 소스는 따로 주시겠어요?", en: "Ranch, please. And can I get the sauce on the side?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "네, 드레싱 따로요.", en: "Sure, dressing on the side.", page: "p.51 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "그리고 치즈는 조금만 넣어주시겠어요?", en: "And could you go easy on the cheese?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "문제없어요.", en: "Not a problem.", page: "p.51 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "빵도 같이 나와요?", en: "Does it come with bread?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "네. 버터도 같이 드릴까요?", en: "It does. Would you like butter with that?", page: "p.51 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네, 그것도 따로 주세요.", en: "Yes, please. On the side too.", page: "p.51 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "알겠습니다.", en: "You got it.", page: "p.52 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 24,
    title: "택시 스몰토크",
    category: "택시",
    page: "p.53-55",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "어디로 모실까요? / 센트럴파크요. 남쪽 입구로요.", en: "Where to? / Central Park, please. The south entrance.", page: "p.53 영상대사", note: "💡 TIP: drop us off는 '우리를 내려주다', pick us up은 '우리를 태우러 오다'예요. Keep the change.는 현금으로 계산하면서 거스름돈은 받지 않겠다고 말하는 표현입니다.", extras: [
        { en: "Could you take us to this address?", kr: "저희를 이 주소로 데려다주시겠어요?" },
        { en: "Could you drop us off at the next corner?", kr: "다음 모퉁이에서 내려주시겠어요?" },
        { en: "Could you wait while I get my bag?", kr: "제가 가방을 꺼내는 동안 기다려주시겠어요?" },
        { en: "Can we make one stop on the way?", kr: "가는 길에 한 군데 들러도 될까요?" },
        { en: "Could you turn the music down a little?", kr: "음악 소리를 조금 줄여주시겠어요?" },
        { en: "Is the fare shown on the meter?", kr: "요금이 미터기에 표시되나요?" },
        { en: "Could I get a receipt, please?", kr: "영수증 좀 받을 수 있을까요?" },
        { en: "Could you open the trunk, please?", kr: "트렁크를 열어주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "알겠습니다. 두 분은 어디서 오셨어요?", en: "You got it. So, where are you ladies from?", page: "p.53 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "저는 시카고에서 왔어요. / 저는 한국에서 왔어요.", en: "I'm from Chicago. / I'm from Korea.", page: "p.53 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "북한이요, 남한이요? / 남한이요.", en: "North or South? / South.", page: "p.53 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "기사님 진짜 말 많으시다.", en: "Just checking!", page: "p.54 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "뉴욕은 처음이세요? / 네, 처음이에요.", en: "Is this your first time in New York? / Yes, it's my first time.", page: "p.53 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "여기서 내려주시겠어요? / 거스름돈은 됐어요.", en: "Could you drop us off here? / Keep the change.", page: "p.53 핵심표현", note: "", extras: [] }
    ]
  },
  {
    id: 25,
    title: "입국심사 예상 질문",
    category: "공항 입국심사",
    page: "p.56-58",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "혼자 가야 해? 너무 떨려... 나는 저쪽으로 가야 해. 밖에서 기다릴게.", en: "I have to go that way. I'll wait for you outside.", page: "p.56 영상대사", note: "💡 TIP: for five days는 '5일 동안', on the tenth는 '10일에'예요. 답변을 연습할 때는 자신의 실제 여행 목적과 일정에 맞게 바꿔 말해 보세요.", extras: [
        { en: "I'm visiting friends.", kr: "친구들을 만나러 왔어요." },
        { en: "I'll be here for ten days.", kr: "여기서 열흘 머물 예정이에요." },
        { en: "I'm staying with a friend.", kr: "친구 집에서 지낼 거예요." },
        { en: "Here's my hotel reservation.", kr: "여기 호텔 예약 내역입니다." },
        { en: "My return flight is on Friday.", kr: "돌아가는 비행기는 금요일이에요." },
        { en: "I work as an English teacher.", kr: "저는 영어 강사로 일하고 있어요." },
        { en: "Could you repeat the question, please?", kr: "질문을 다시 말씀해 주시겠어요?" },
        { en: "Could you speak a little more slowly?", kr: "조금 더 천천히 말씀해 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "방문 목적이 무엇인가요?", en: "What's the purpose of your visit?", page: "p.56 핵심표현", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "휴가 왔어요.", en: "I'm here for vacation.", page: "p.56 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "얼마나 머무세요?", en: "How long are you staying?", page: "p.56 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "5년이요. 아니, 아니요! 5일이요!", en: "Five years. No, no! Five days!", page: "p.56 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "어디서 지내세요?", en: "Where are you staying?", page: "p.56 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "시내 호텔에서요.", en: "At a hotel downtown.", page: "p.56 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 26,
    title: "탑승 수속 - 짐 무게 초과",
    category: "공항·탑승 수속",
    page: "p.59-61",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "짐이 무게 초과예요. 수수료가 얼마예요?", en: "Your bag is overweight. How much is the fee?", page: "p.59 핵심표현", note: "💡 TIP: overweight는 '무게 초과인', under the limit은 '제한 이하인'이라는 뜻이에요.", extras: [
        { en: "How much over the limit is my bag?", kr: "제 가방이 제한 무게를 얼마나 초과했나요?" },
        { en: "What's the weight limit for this bag?", kr: "이 가방의 무게 제한은 얼마인가요?" },
        { en: "Can I move some items into my carry-on?", kr: "물건 몇 개를 기내 가방으로 옮겨도 될까요?" },
        { en: "Is a checked bag included in my ticket?", kr: "제 항공권에 위탁 수하물이 포함되어 있나요?" },
        { en: "How much is an extra checked bag?", kr: "가방 하나를 추가로 부치면 얼마인가요?" },
        { en: "Could I weigh it again?", kr: "무게를 다시 재도 될까요?" },
        { en: "Where can I pay the baggage fee?", kr: "수하물 요금은 어디서 내나요?" },
        { en: "Do I need to check this bag?", kr: "이 가방을 위탁 수하물로 부쳐야 하나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요! 오늘 어디로 가세요?", en: "Hi! Where are you flying today?", page: "p.59 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "로스앤젤레스요.", en: "Los Angeles.", page: "p.59 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "여권 보여주시겠어요?", en: "May I see your passport, please?", page: "p.59 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "창가 자리로 주세요.", en: "Window seat, please.", page: "p.59 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "짐을 저울에 올려주세요. 죄송해요. 짐이 무게 초과예요.", en: "Please put your bag on the scale. I'm sorry. Your bag is overweight.", page: "p.59 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "무게가 넘었다는데... 돈 더 내야 하는 거야? 뭐라고 물어봐?", en: "How much is the fee?", page: "p.59 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "수수료가 얼마예요?", en: "How much is the fee?", page: "p.59 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 27,
    title: "가장 작은 사이즈로 주시겠어요?",
    category: "아이스크림 가게",
    page: "p.62-63",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "가장 작은 사이즈로 주시겠어요?", en: "Could I get the smallest size?", page: "p.62 핵심표현", note: "💡 TIP: the smallest size는 '가장 작은 사이즈'예요. small보다 더 작은 크기를 찾는 a smaller size와 구분해 보세요.", extras: [
        { en: "What's the smallest size you have?", kr: "여기서 제일 작은 사이즈가 뭐예요?" },
        { en: "Just one scoop, please.", kr: "한 스쿱만 주세요." },
        { en: "Could I have a small cup?", kr: "작은 컵으로 주시겠어요?" },
        { en: "Can I have two flavors in one cup?", kr: "한 컵에 두 가지 맛을 담아주시겠어요?" },
        { en: "Could I try the vanilla?", kr: "바닐라 맛을 맛봐도 될까요?" },
        { en: "No toppings, please.", kr: "토핑은 빼주세요." },
        { en: "Could I have a lid for this?", kr: "이 컵 뚜껑을 받을 수 있을까요?" },
        { en: "Could I get an extra spoon?", kr: "숟가락 하나 더 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요! 뭐 드릴까요?", en: "Hi there! What can I get for you?", page: "p.62 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "딸기 맛 맛보기 해도 될까요?", en: "Can I try a sample of the strawberry?", page: "p.62 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠!", en: "Of course!", page: "p.62 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "아까 많이 먹어서 조금만 먹고 싶은데, 제일 작은 걸로 뭐라고 해?", en: "Could I get the smallest size?", page: "p.62 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 28,
    title: "조금만 더 보고 주문할게요",
    category: "식당",
    page: "p.64-65",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "조금만 더 보고 주문할게요.", en: "Could we have a few more minutes?", page: "p.64 핵심표현", note: "💡 TIP: Could we have a few more minutes?는 '몇 분만 더 주시겠어요?'라는 정중한 요청이에요.", extras: [
        { en: "We're still deciding.", kr: "아직 고르는 중이에요." },
        { en: "Could you come back in a few minutes?", kr: "몇 분 뒤에 다시 와주시겠어요?" },
        { en: "We're waiting for one more person.", kr: "일행 한 명을 더 기다리고 있어요." },
        { en: "Could we order our drinks first?", kr: "음료부터 주문해도 될까요?" },
        { en: "What would you recommend for two people?", kr: "두 사람이 먹을 만한 메뉴로 뭘 추천하세요?" },
        { en: "Could you tell me what's in this dish?", kr: "이 요리에 무엇이 들어가는지 알려주시겠어요?" },
        { en: "I'm deciding between the pasta and the chicken.", kr: "파스타와 치킨 중에 고르고 있어요." },
        { en: "We're ready now, thank you.", kr: "이제 주문할게요. 감사합니다." }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요! 주문하시겠어요?", en: "Hi there! Are you ready to order?", page: "p.64 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "조금만 더 보고 주문할게요... 이거 영어로 뭐라고 해?", en: "Could we have a few more minutes?", page: "p.64 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠, 천천히 보세요!", en: "Of course, take your time!", page: "p.64 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 29,
    title: "스테이크 주문하기",
    category: "식당",
    page: "p.66-69",
    dialogues: [
      { role: "B", roleLabel: "B", kr: "굽기는 어떻게 해드릴까요?", en: "How would you like that cooked?", page: "p.66 핵심표현", note: "💡 TIP: How would you like that cooked?는 고기의 굽기를 묻는 질문이에요. Medium rare, please.처럼 답하세요.", extras: [
        { en: "Could you cook it medium, please?", kr: "미디엄으로 구워주시겠어요?" },
        { en: "What sides can I choose from?", kr: "어떤 사이드 메뉴 중에서 고를 수 있나요?" },
        { en: "Can I get rice instead of fries?", kr: "감자튀김 대신 밥으로 받을 수 있나요?" },
        { en: "Could I have the dressing on the side?", kr: "드레싱을 따로 주시겠어요?" },
        { en: "I ordered this medium rare.", kr: "이거 미디엄 레어로 주문했어요." },
        { en: "Could you cook it a little more?", kr: "조금 더 익혀주시겠어요?" },
        { en: "Could we see the dessert menu?", kr: "디저트 메뉴를 볼 수 있을까요?" },
        { en: "Could you clear these plates, please?", kr: "이 접시들을 치워주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요. 음료부터 드릴까요?", en: "Good evening, ladies. Can I start you off with something to drink?", page: "p.66 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "저는 물이면 돼요. / 저는 레모네이드 주세요.", en: "Just water for me, please. / I'll have a lemonade.", page: "p.66 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "주문하시겠어요, 아니면 좀 더 보시겠어요?", en: "Are you ready to order, or do you need a minute?", page: "p.66 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "주문할게요. 립아이로 할게요.", en: "I think we're ready. I'll have the ribeye, please.", page: "p.66 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "네. 굽기는 어떻게 해드릴까요?", en: "Sure. How would you like that cooked?", page: "p.66 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "고기를 얼마나 익혀 드릴까라는데... 뭐라고 대답해?", en: "Medium rare, please.", page: "p.66 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 30,
    title: "고속도로가 꽉 막혀 있어요 (추석 특집)",
    category: "교통",
    page: "p.70-71",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "고속도로가 꽉 막혀 있어... 이거 영어로 뭐라고 해?", en: "The highway is backed up.", page: "p.70 핵심표현", note: "💡 TIP: be backed up은 차량이 빠져나가지 못하고 밀려 있는 상태를 말해요. bumper to bumper는 차들이 앞뒤로 바짝 붙어 있는 모습이고, stretch my legs는 잠깐 다리를 푼다는 뜻입니다.", extras: [
        { en: "We're barely moving.", kr: "거의 움직이지 못하고 있어요." },
        { en: "We're stuck in a traffic jam.", kr: "교통체증에 갇혀 있어요." },
        { en: "Can you check the traffic on your phone?", kr: "휴대폰으로 교통 상황 좀 확인해 줄래?" },
        { en: "Is there a faster route?", kr: "더 빠른 경로가 있나요?" },
        { en: "Let's avoid the highway.", kr: "고속도로는 피해서 가자." },
        { en: "We might be late.", kr: "늦을 수도 있겠어요." },
        { en: "I'll let you know when we're close.", kr: "거의 도착하면 알려드릴게요." },
        { en: "Let's take a break at the next rest area.", kr: "다음 휴게소에서 잠깐 쉬자." }
      ]},
      { role: "A", roleLabel: "A", kr: "고속도로가 꽉 막혀 있어요.", en: "The highway is backed up.", page: "p.70 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "도착까지 얼마나 걸려?", en: "How long will it take to get there?", page: "p.70 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "3시간 더 걸린대.", en: "It says three more hours.", page: "p.70 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "다른 길은 없어?", en: "Is there another way?", page: "p.70 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "다들 명절이라 고향에 가는 거야. 모든 길이 다 이래.", en: "Everyone is going home for the holiday. Every road is like this.", page: "p.70 영상대사", note: "", extras: [] }
    ]
  }
  {
    id: 31,
    title: "기념품샵 할인 행사",
    category: "기념품샵",
    page: "p.72-74",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "할인 행사 한대! 이것도 되는지 어떻게 물어봐?", en: "Is this on sale too?", page: "p.72 영상대사", note: "💡 TIP: on sale은 '세일 중인', twenty percent off는 '20% 할인'이에요. 할인 표시를 확인하는 Is this on sale too?와 결제에 반영됐는지 묻는 Did the discount apply?를 함께 연습해 보세요.", extras: [
        { en: "Does this discount apply to this item?", kr: "이 상품에도 이 할인이 적용되나요?" },
        { en: "Can I mix and match the colors?", kr: "색상을 섞어서 골라도 되나요?" },
        { en: "Is the discount already included?", kr: "이미 할인이 반영된 건가요?" },
        { en: "How much is it after the discount?", kr: "할인 후에는 얼마인가요?" },
        { en: "Could you check the total again?", kr: "총금액을 다시 확인해 주시겠어요?" },
        { en: "The sign says twenty percent off.", kr: "안내문에는 20% 할인이라고 되어 있어요." },
        { en: "Do I need a coupon for this offer?", kr: "이 혜택을 받으려면 쿠폰이 필요한가요?" },
        { en: "Can I return sale items?", kr: "세일 상품도 반품할 수 있나요?" }
      ]},
      { role: "B", roleLabel: "B (점원)", kr: "어서 오세요! 오늘 할인 행사 중이에요. 머그컵이랑 티셔츠는 두 개 사면 하나 공짜예요.", en: "Welcome! We're having a sale today. Buy two, get one free on all mugs and T-shirts.", page: "p.72 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "이것도 세일이에요?", en: "Is this on sale too?", page: "p.72 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "죄송해요, 스노볼은 제외예요. 대신 열쇠고리는 20% 할인이에요.", en: "Sorry, snow globes aren't included. But keychains are twenty percent off.", page: "p.72 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "아, 그렇군요! 그럼 이 머그컵 두 개 사면 티셔츠가 공짜인 거예요?", en: "Oh, okay! So if I buy these two mugs, is the T-shirt free?", page: "p.72 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "머그컵이랑 티셔츠는 같이 계산돼서 맞아. 제일 싼 게 공짜예요.", en: "Mugs and T-shirts count together, so yes. The cheapest one is free.", page: "p.72 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "완벽해요! 이거 미디엄 사이즈 있어요?", en: "Perfect! Do you have this in a medium?", page: "p.72 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "여기 미디엄이요.", en: "Here's a medium.", page: "p.73 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "파란색도 있어요?", en: "Do you have it in blue?", page: "p.73 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "흰색이랑 회색만 있어요, 죄송해요.", en: "Only in white and gray, sorry.", page: "p.73 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "회색도 괜찮아요.", en: "Gray is fine.", page: "p.73 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "이거 다 누구 거야?", en: "Who are all these for?", page: "p.73 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "엄마, 아빠, 언니, 이모, 사장님...", en: "Mom, Dad, my sister, my aunt, my boss...", page: "p.73 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "총 84달러입니다.", en: "Your total is eighty-four dollars.", page: "p.73 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "두 개 사면 하나 공짜, 적용됐나요?", en: "Did the buy two, get one free apply?", page: "p.73 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "아, 맞네요. 적용이 안 됐어요. 바로 고쳐드릴게요.", en: "Oh, you're right. It didn't go through. Let me fix that.", page: "p.73 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네. 할인 적용해서 62달러예요. 감사합니다!", en: "Okay. With the discount, it's sixty-two dollars. Thank you!", page: "p.73 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 32,
    title: "선물 포장해주시겠어요?",
    category: "선물 포장",
    page: "p.75-77",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "엄마 선물인데, 포장해 달라고 어떻게 말해?", en: "Could you gift wrap this?", page: "p.75 영상대사", note: "💡 TIP: gift wrap은 '선물 포장하다', take the price tag off는 '가격표를 떼다'예요. 하나면 this, 여러 개면 these를 써서 Could you gift wrap this / these?로 요청해 보세요.", extras: [
        { en: "Could you wrap each item separately?", kr: "물건마다 따로 포장해주시겠어요?" },
        { en: "Could you leave the price off?", kr: "가격은 표시하지 말아주시겠어요?" },
        { en: "Can I choose a different ribbon?", kr: "다른 리본을 골라도 될까요?" },
        { en: "Could you put this in a gift bag?", kr: "이것을 선물용 쇼핑백에 넣어주시겠어요?" },
        { en: "Could I include a small card?", kr: "작은 카드를 함께 넣어도 될까요?" },
        { en: "Please don't put the receipt inside the gift.", kr: "영수증은 선물 안에 넣지 말아주세요." },
        { en: "Can the recipient exchange it?", kr: "선물 받는 사람이 교환할 수 있나요?" },
        { en: "How long will the gift wrapping take?", kr: "선물 포장은 얼마나 걸리나요?" }
      ]},
      { role: "A", roleLabel: "A", kr: "이거 선물 포장해주시겠어요?", en: "Could you gift wrap this?", page: "p.75 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "안녕하세요. 이거 선물 포장해주시겠어요?", en: "Hi. Could you gift wrap this, please?", page: "p.75 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "물론이죠. 특별한 분께 드리는 선물인가요?", en: "Of course. Is it a gift for someone special?", page: "p.75 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "엄마 선물이에요.", en: "It's for my mom.", page: "p.75 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "정말 좋네요. 선물 포장비가 있나요?", en: "How lovely. Is there a charge for gift wrapping?", page: "p.75 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "아니요, 무료예요. 포장지는 뭐로 하시겠어요? 금색, 빨간색, 흰색이 있어요.", en: "No, it's complimentary. Which paper would you like? We have gold, red, and white.", page: "p.75 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "흰색으로 주세요.", en: "White, please.", page: "p.76 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "리본은요?", en: "And a ribbon?", page: "p.76 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "분홍 리본으로 주세요. 스카프랑 맞추려고요.", en: "A pink ribbon, please. To match the scarf.", page: "p.76 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (점원)", kr: "좋은 선택이에요. 아, 가격표 좀 떼주시겠어요?", en: "Great choice. Oh, could you take the price tag off?", page: "p.76 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "이미 뗐어요.", en: "Already done.", page: "p.76 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 33,
    title: "음식을 주문했는데 안 나왔을 때",
    category: "식당·주문 누락",
    page: "p.78-80",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "우리보다 늦게 온 사람들이 먼저 먹고 있어. 주문 확인해 달라고 어떻게 말해?", en: "Could you check on our order?", page: "p.78 영상대사", note: "💡 TIP: 'We ordered about minutes ago.'를 먼저 말하면 직원이 상황을 바로 이해해요. on us와 on the house는 둘 다 '가게가 낼게요 = 무료예요'라는 뜻이에요.", extras: [
        { en: "We've been waiting for a while.", kr: "꽤 오래 기다렸어요." },
        { en: "Is our food almost ready?", kr: "저희 음식 거의 다 됐나요?" },
        { en: "I think our order got lost.", kr: "주문이 누락된 것 같아요." },
        { en: "We're missing one dish.", kr: "음식 하나가 아직 안 나왔어요." },
        { en: "How much longer will it be?", kr: "얼마나 더 걸릴까요?" },
        { en: "We're in a bit of a hurry.", kr: "저희가 좀 급해서요." },
        { en: "Could we cancel that dish?", kr: "그 음식은 취소할 수 있을까요?" },
        { en: "Could we get the check, please?", kr: "계산서 좀 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "주문하시겠어요?", en: "Are you ready to order?", page: "p.78 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "치킨 파스타로 할게요. 그리고 저는 치즈버거로 할게요.", en: "I'll have the chicken pasta, please. And I'll have the cheeseburger.", page: "p.78 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "좋은 선택이에요. 15분 정도 걸려요.", en: "Great choice. It'll be about fifteen minutes.", page: "p.78 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "실례합니다. 40분 전쯤 주문했는데요. 주문 좀 확인해 주시겠어요?", en: "Excuse me. We ordered about forty minutes ago. Could you check on our order?", page: "p.78 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "어머, 정말 죄송해요. 바로 주방에 확인해 볼게요.", en: "Oh, I'm so sorry. Let me check with the kitchen right away.", page: "p.78 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "정말 죄송해요. 주문이 주방에 안 들어갔던 것 같아요.", en: "I'm so sorry. It looks like your order never went through to the kitchen.", page: "p.79 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "이런. 얼마나 걸려요?", en: "Oh no. How long will it take?", page: "p.79 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "10분 정도요. 빨리 해달라고 할게요.", en: "About ten minutes. I'll put a rush on it.", page: "p.79 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "기다리는 동안 빵 좀 더 주시겠어요?", en: "Could we get some more bread while we wait?", page: "p.79 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 34,
    title: "새치기 당했을 때 대처법",
    category: "빵집·줄 서기",
    page: "p.81-83",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "어? 저 사람 방금 새치기했어. 영어로 뭐라고 말해?", en: "Excuse me, I think the line starts back there.", page: "p.81 영상대사", note: "💡 TIP: I think로 시작하면 따지는 말이 아니라 부드럽게 알려주는 말투가 돼요. cut in은 '새치기하다', Go ahead는 '먼저 하세요'예요.", extras: [
        { en: "Is this the end of the line?", kr: "여기가 줄 끝인가요?" },
        { en: "Is this the line for the restroom?", kr: "이거 화장실 줄인가요?" },
        { en: "Where does the line start?", kr: "줄이 어디서부터예요?" },
        { en: "Sorry, were you here first?", kr: "죄송해요, 먼저 오셨어요?" },
        { en: "We've been waiting here.", kr: "우리 여기서 기다리고 있었어요." },
        { en: "Could you save my spot?", kr: "제 자리 좀 맡아주시겠어요?" },
        { en: "I'll be right back.", kr: "금방 올게요." },
        { en: "You can go ahead of me.", kr: "제 앞으로 먼저 가셔도 돼요." }
      ]},
      { role: "A", roleLabel: "A", kr: "우리 20분째 기다리고 있어. 크루아상 냄새가 벌써 나는 것 같아.", en: "We've been waiting for twenty minutes. I can almost smell the croissants.", page: "p.81 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "저기요!", en: "Excuse me!", page: "p.81 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "줄은 저기서부터예요.", en: "I think the line starts back there.", page: "p.81 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "아, 죄송해요. 뭐라고 하셨어요?", en: "Oh, sorry. What was that?", page: "p.81 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "줄은 저기서부터예요. 저희가 먼저 왔어요.", en: "The line starts back there. We were here first.", page: "p.81 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "이런, 줄을 전혀 못 봤어요. 정말 죄송해요. 여기가 픽업 카운터인 줄 알았어요.", en: "Oh no, I didn't see the line at all. I'm so sorry. I thought this was the pickup counter.", page: "p.82 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "헷갈릴 만해요. 픽업 카운터는 저쪽이에요.", en: "Easy mistake. The pickup counter is over there.", page: "p.82 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 35,
    title: "처음 보는 사람 셔츠에 커피를 쏟았을 때",
    category: "카페·사과하기",
    page: "p.84-86",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "어떡해! 쏟았다고 영어로 뭐라고 해?", en: "I'm so sorry, I spilled my coffee.", page: "p.84 영상대사", note: "💡 TIP: spill의 과거형은 spilled예요. 뒤에 on you를 붙이면 '당신에게 쏟았어요'가 돼요. 상대가 Accidents happen.(그럴 수도 있죠)이라고 하면 괜찮다는 뜻이에요.", extras: [
        { en: "It was my fault.", kr: "제 잘못이에요." },
        { en: "I wasn't looking where I was going.", kr: "앞을 제대로 안 봤어요." },
        { en: "Are you hurt?", kr: "다치셨어요?" },
        { en: "Did it get on your bag?", kr: "가방에도 묻었어요?" },
        { en: "Let me help you clean up.", kr: "치우는 거 도와드릴게요." },
        { en: "Here, use this.", kr: "여기, 이거 쓰세요." },
        { en: "Could I get a new one?", kr: "새로 하나 받을 수 있을까요?" },
        { en: "I'll be more careful.", kr: "더 조심할게요." }
      ]},
      { role: "A", roleLabel: "A", kr: "어이쿠! 정말 죄송해요! 커피를 쏟았어요.", en: "Whoa! I'm so sorry! I spilled my coffee on you.", page: "p.84 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "괜찮아요. 조금 묻었을 뿐이에요. 괜찮으세요? 걱정 마세요, 뜨거운 게 아니라 아이스예요.", en: "It's okay. It's just a little. Are you okay? Don't worry, it's iced, not hot.", page: "p.84 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네, 괜찮아요. 신경 쓰지 마세요. 냅킨 갖다드릴게요.", en: "Yeah, I'm fine. Don't worry about it. Let me get you some napkins.", page: "p.84 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "실례지만, 수건 좀 주시겠어요? 커피를 쏟아서요.", en: "Excuse me, could we get a towel? We spilled some coffee.", page: "p.84 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 36,
    title: "접시 좀 치워주시겠어요?",
    category: "식당·디저트",
    page: "p.87-88",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "자리가 없어! 접시 치워 달라고 영어로 뭐라고 해?", en: "Could you clear these plates, please?", page: "p.87 영상대사", note: "💡 TIP: 접시가 여러 개면 these plates, 하나면 this plate예요. 서버가 Are you all done?이라고 물으면 다 먹었을 땐 Yes, we're done.", extras: [
        { en: "Could you take these away?", kr: "이것 좀 가져가 주시겠어요?" },
        { en: "We're all done.", kr: "저희 다 먹었어요." },
        { en: "I'm still working on it.", kr: "아직 먹고 있어요." },
        { en: "Could we get some clean plates?", kr: "깨끗한 접시 좀 주시겠어요?" },
        { en: "Could you wipe the table?", kr: "테이블 좀 닦아주시겠어요?" },
        { en: "Could we see the dessert menu?", kr: "디저트 메뉴 볼 수 있을까요?" },
        { en: "Could I get a box for this?", kr: "이거 포장 용기 좀 주시겠어요?" },
        { en: "Could we get the check, please?", kr: "계산서 좀 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B (서버)", kr: "주문하신 초코 라바 케이크 나왔습니다!", en: "Here's your chocolate lava cake!", page: "p.87 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "죄송해요! 이 접시들 좀 치워주시겠어요?", en: "Sorry! Could you clear these plates, please?", page: "p.87 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B (서버)", kr: "물론이죠. 이거 다 드신 거죠?", en: "Of course. Are you all done with these?", page: "p.87 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네, 다 먹었어요. 전부 맛있었어요. 잠깐만요. 이건 말고요.", en: "Yes, we're done. Everything was delicious. Wait. Not this one.", page: "p.87 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 37,
    title: "대프리카 (사계절이 뚜렷해요)",
    category: "버스·스몰토크",
    page: "p.89-91",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "사계절이 뚜렷하다고 영어로 뭐라고 해?", en: "We have four distinct seasons.", page: "p.89 영상대사", note: "💡 TIP: distinct는 '뚜렷한, 확실히 구분되는'이라는 뜻이에요. 스몰토크는 Is this seat taken?으로 열고 It was so nice talking to you.로 닫으세요.", extras: [
        { en: "It gets really humid in summer.", kr: "여름엔 정말 습해요." },
        { en: "It snows a lot in winter.", kr: "겨울엔 눈이 많이 와요." },
        { en: "Spring and fall are the best seasons.", kr: "봄이랑 가을이 제일 좋은 계절이에요." },
        { en: "The best time to visit is in the fall.", kr: "가을에 가는 게 제일 좋아요." },
        { en: "Have you ever been to Korea?", kr: "한국에 가보신 적 있어요?" },
        { en: "You should visit Busan, too.", kr: "부산도 꼭 가보세요." },
        { en: "Where are you headed?", kr: "어디 가시는 길이에요?" },
        { en: "Enjoy the rest of your day!", kr: "남은 하루 즐겁게 보내세요!" }
      ]},
      { role: "B", roleLabel: "B", kr: "이 자리 주인 있나요? / 아니요, 앉으세요.", en: "Is this seat taken? / No, go ahead.", page: "p.89 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "고마워요. 여행 오셨어요? / 네, 한국에서 왔어요.", en: "Thanks. Are you visiting? / Yes, I'm from Korea.", page: "p.89 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "한국이요! 제 딸이 내년 봄에 서울에 가요. 거기 봄은 어때요?", en: "Korea! My daughter is going to Seoul next spring. What's it like there in spring?", page: "p.89 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "정말 예뻐요. 곳곳에 벚꽃이 펴요.", en: "It's beautiful. There are cherry blossoms everywhere.", page: "p.89 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 38,
    title: "10분에서 15분 늦을 것 같아요",
    category: "식당 예약·전화",
    page: "p.92-93",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "약속 늦었다! 십 분에서 십오 분 늦을 것 같다고, 영어로 뭐라고 해?", en: "I think I'll be about ten to fifteen minutes late.", page: "p.92 영상대사", note: "💡 TIP: '~분 정도 늦을 것 같아요'는 I think I'll be about minutes late.로 말해요. 범위는 ten to fifteen처럼 to로 이어요.", extras: [
        { en: "I'm running a little late.", kr: "조금 늦을 것 같아요." },
        { en: "I'm on my way.", kr: "가는 중이에요." },
        { en: "I'll be there in five minutes.", kr: "5분 뒤에 도착해요." },
        { en: "Could you hold my table?", kr: "자리 좀 잡아두실 수 있을까요?" },
        { en: "How long can you hold the table?", kr: "자리를 얼마나 잡아두실 수 있어요?" },
        { en: "I'm stuck in traffic.", kr: "차가 막혀서 못 가고 있어요." },
        { en: "Could we push it back to seven thirty?", kr: "7시 반으로 미룰 수 있을까요?" },
        { en: "Sorry to keep you waiting.", kr: "기다리게 해서 죄송해요." }
      ]},
      { role: "B", roleLabel: "B", kr: "네, 벨라 쿠치나입니다.", en: "Hello, Bella Cucina.", page: "p.92 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "안녕하세요, 7시에 하나 이름으로 예약했는데요. 10분에서 15분 정도 늦을 것 같아요.", en: "Hi, I have a reservation at seven under Hana. I think I'll be about ten to fifteen minutes late.", page: "p.92 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "괜찮습니다. 자리는 15분까지 잡아둘 수 있어요.", en: "No problem. We can hold your table for fifteen minutes.", page: "p.92 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "정말 감사합니다!", en: "Thank you so much!", page: "p.92 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 39,
    title: "피클을 빼달라고 했는데",
    category: "버거집·주문 실수",
    page: "p.94-97",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "빼달라고 했는데 그대로 들어 있어... 뭐라고 해?", en: "I asked for no pickles.", page: "p.94 영상대사", note: "💡 TIP: 'with no ~'나 'hold the ~'는 '~빼주세요'라는 뜻이에요. 잘못 나왔을 때는 사실만 정중하게 말하면 돼요.", extras: [
        { en: "Hold the pickles, please.", kr: "피클은 빼주세요." },
        { en: "Could I get it without onions?", kr: "양파 빼고 주시겠어요?" },
        { en: "Could you take them off?", kr: "그것만 빼주시겠어요?" },
        { en: "This isn't what I ordered.", kr: "제가 주문한 게 아니에요." },
        { en: "I think there's been a mix-up.", kr: "주문이 뭔가 착오가 있었던 것 같아요." },
        { en: "Can I swap the fries for a salad?", kr: "감자튀김 대신 샐러드로 바꿀 수 있나요?" },
        { en: "Could I get the sauce on the side?", kr: "소스는 따로 주시겠어요?" },
        { en: "Could I get a refill, please?", kr: "리필 좀 해주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요, 저는 제이크예요. 오늘 담당 서버입니다. 뭐로 드릴까요?", en: "Hi, I'm Jake. I'll be taking care of you today. What can I get for you?", page: "p.94 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "치즈버거 피클 빼고 주시겠어요?", en: "Can I get a cheeseburger with no pickles, please?", page: "p.94 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "네. 굽기는 어떻게 해드릴까요?", en: "Sure. How would you like it cooked?", page: "p.94 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "미디엄으로 주세요.", en: "Medium, please.", page: "p.94 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 40,
    title: "계산 잘못했을 때",
    category: "식당·계산서",
    page: "p.98-100",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "옆 테이블 걸 계산한 것 같아... 영어로 뭐라고 해?", en: "I think I paid for the wrong table.", page: "p.98 영상대사", note: "💡 TIP: 미국 식당에서는 계산서를 check라고 해요. 카드 환불은 바로 안 보일 수 있어서 It may take a few days to show up on your card.라는 말을 자주 들어요.", extras: [
        { en: "I think there's a mistake on the bill.", kr: "계산서에 착오가 있는 것 같아요." },
        { en: "This isn't our check.", kr: "이건 저희 계산서가 아니에요." },
        { en: "We didn't order this.", kr: "저희 이거 안 시켰어요." },
        { en: "I think I was charged twice.", kr: "두 번 결제된 것 같아요." },
        { en: "Could you cancel the charge?", kr: "결제 취소해 주시겠어요?" },
        { en: "Could we split the check?", kr: "따로 계산할 수 있을까요?" },
        { en: "Could I get a receipt?", kr: "영수증 주시겠어요?" },
        { en: "Is the tip included?", kr: "팁이 포함되어 있나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "저기요. 계산서 좀 주시겠어요?", en: "Excuse me. Could we get the check, please?", page: "p.98 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네, 바로 갈게요. 여기 있습니다. 천천히 하세요.", en: "Sure, I'll be right with you. Here you go. Take your time.", page: "p.98 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "이번엔 내가 낼게. 지난번에 네가 냈잖아.", en: "I'll get this one. You paid last time.", page: "p.98 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "정말? / 당연하지. 결제됐습니다. 감사합니다!", en: "Are you sure? / Totally. All set. Thank you!", page: "p.98 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 41,
    title: "열쇠 두고 나왔는데 문이 잠겼을 때",
    category: "호텔·객실 문 잠김",
    page: "p.101-102",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "열쇠가 안에 있어... 이거 영어로 뭐라고 해?", en: "I locked myself out.", page: "p.101 영상대사", note: "💡 TIP: lock myself out은 '열쇠를 안에 두고 나와서 못 들어가요'라는 뜻이에요. 방 번호는 숫자를 하나씩 읽어요(0은 oh).", extras: [
        { en: "I left my key card in the room.", kr: "카드키를 방에 두고 나왔어요." },
        { en: "My key card isn't working.", kr: "카드키가 안 돼요." },
        { en: "Could you open the door for me?", kr: "문 좀 열어주시겠어요?" },
        { en: "Could I get a spare key?", kr: "여분 키 하나 받을 수 있을까요?" },
        { en: "I lost my room key.", kr: "방 키를 잃어버렸어요." },
        { en: "Could you send someone up?", kr: "사람 좀 올려 보내주시겠어요?" },
        { en: "Where's the ice machine?", kr: "제빙기는 어디 있어요?" },
        { en: "My room number is eight oh five.", kr: "제 방 번호는 805호예요." }
      ]},
      { role: "B", roleLabel: "B", kr: "내가 얼음 가져올게.", en: "I'll get the ice.", page: "p.101 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "프런트에 가야 해.", en: "We need to go to the front desk.", page: "p.101 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "무엇을 도와드릴까요?", en: "How can I help you?", page: "p.101 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "열쇠를 안에 두고 나와서 문이 잠겼어요.", en: "I locked myself out.", page: "p.101 핵심표현", note: "", extras: [] }
    ]
  },
  {
    id: 42,
    title: "아직 영업중인가요?",
    category: "도넛 가게",
    page: "p.103-104",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "아직 영업하는지 물어보려면 영어로 뭐라고 해?", en: "Are you still open?", page: "p.103 영상대사", note: "💡 TIP: still은 '아직', left는 '남아 있는'이라는 뜻입니다. Born ready는 '언제든 준비됐어'라는 자신감 있는 표현이에요.", extras: [
        { en: "What time do you close?", kr: "몇 시에 문을 닫나요?" },
        { en: "Is it too late to order?", kr: "지금 주문하기에는 너무 늦었나요?" },
        { en: "Are you still taking orders?", kr: "아직 주문을 받고 있나요?" },
        { en: "Can I get something to go?", kr: "뭐 좀 포장해서 살 수 있을까요?" },
        { en: "What do you have left?", kr: "어떤 것이 남아 있나요?" },
        { en: "Do you have any fresh donuts?", kr: "갓 만든 도넛이 있나요?" },
        { en: "Are these the only ones left?", kr: "남은 건 이것들뿐인가요?" },
        { en: "I'll take whatever you have left.", kr: "남아 있는 것으로 주세요." }
      ]},
      { role: "B", roleLabel: "B", kr: "목표 지점이 5분 뒤에 문을 닫아.", en: "The target closes in five minutes.", page: "p.103 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "준비됐어? / 언제든지.", en: "Ready? / Born ready.", page: "p.103 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "실례합니다. 아직 영업하세요?", en: "Excuse me. Are you still open?", page: "p.103 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "음… 이제 영업하는 걸로 하죠, 뭐.", en: "Well... I guess we are now.", page: "p.103 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 43,
    title: "날짜를 잘못 예약했어요 (호텔)",
    category: "호텔·예약 변경",
    page: "p.105-107",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "날짜를 잘못 예약했나 봐… 오늘부터 묵을 수 있냐고 영어로 어떻게 말해?", en: "I booked the wrong date. Is there any way I could check in tonight?", page: "p.105 영상대사", note: "💡 TIP: book과 make a reservation은 '예약하다'예요. change는 변경, cancel은 취소입니다.", extras: [
        { en: "I think I made a mistake with my booking.", kr: "예약할 때 실수한 것 같아요." },
        { en: "Could you check the dates on my reservation?", kr: "제 예약 날짜를 확인해 주시겠어요?" },
        { en: "My reservation is under Hana Kim.", kr: "김하나 이름으로 예약되어 있어요." },
        { en: "I meant to book for tonight.", kr: "오늘 밤으로 예약하려고 했어요." },
        { en: "Do you have any rooms available tonight?", kr: "오늘 밤에 빈방이 있나요?" },
        { en: "Could you change my check-in date?", kr: "체크인 날짜를 바꿔 주시겠어요?" },
        { en: "Can I keep the same room for both nights?", kr: "이틀 동안 같은 방을 쓸 수 있나요?" },
        { en: "Is there a fee to change the reservation?", kr: "예약을 변경하면 수수료가 있나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "모두가 오늘 밤 잘 곳이 필요한 세상.", en: "In a world where everyone needs a bed tonight.", page: "p.105 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "그만해. 그냥 자고 싶어.", en: "Stop it. I just want to sleep.", page: "p.105 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "안녕하세요, 김하나 이름으로 예약했어요.", en: "Hi, we have a reservation under Hana Kim.", page: "p.105 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "어서 오세요. 확인해 드릴게요. 죄송하지만 손님, 예약이 내일 밤으로 되어 있어요.", en: "Welcome. Let me check for you. I’m sorry, Ms. Kim. Your reservation is for tomorrow night.", page: "p.105 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 44,
    title: "옆방이 시끄러워요 (호텔)",
    category: "호텔·소음 요청",
    page: "p.108-109",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "옆방이 너무 시끄러워… 이거 영어로 뭐라고 해?", en: "The room next door is really loud.", page: "p.108 영상대사", note: "💡 TIP: next door는 '바로 옆에', keep it down은 목소리나 소음을 낮춰 달라는 말이에요.", extras: [
        { en: "There's a lot of noise coming from next door.", kr: "옆방에서 소음이 많이 나요." },
        { en: "The music is too loud.", kr: "음악 소리가 너무 커요." },
        { en: "I can hear people talking through the wall.", kr: "벽 너머로 사람들이 말하는 소리가 들려요." },
        { en: "I can't sleep because of the noise.", kr: "소음 때문에 잠을 잘 수가 없어요." },
        { en: "Could you ask them to turn the music down?", kr: "음악 소리를 줄여 달라고 말씀해 주시겠어요?" },
        { en: "Could you send someone up to check?", kr: "확인할 사람을 올려보내 주시겠어요?" },
        { en: "It's still noisy next door.", kr: "옆방이 아직도 시끄러워요." },
        { en: "Would it be possible to move to a quieter room?", kr: "더 조용한 방으로 옮길 수 있을까요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "프런트입니다. 무엇을 도와드릴까요?", en: "Front desk. How can I help you?", page: "p.108 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "안녕하세요. 옆방이 너무 시끄러워요.", en: "Hi. The room next door is really loud.", page: "p.108 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "정말 죄송합니다. 바로 사람 올려보낼게요.", en: "I’m so sorry. We’ll send someone up right away.", page: "p.108 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "감사합니다.", en: "Thank you.", page: "p.108 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 45,
    title: "미국에서 가격 깎기",
    category: "시장·가격 흥정",
    page: "p.110-112",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "한국 시장에서는 깎아 달라고 하는데… 여기서도 돼? 영어로 뭐라고 해?", en: "Could you give me a discount?", page: "p.110 영상대사", note: "💡 TIP: Can you do any better?는 흥정 상황에서 '가격을 조금 더 낮춰 주실 수 있나요?'라는 뜻이에요.", extras: [
        { en: "Is the price negotiable?", kr: "가격을 조정할 수 있나요?" },
        { en: "Would you take fifty dollars for it?", kr: "이거 50달러에 주실 수 있나요?" },
        { en: "Could you lower the price a little?", kr: "가격을 조금 낮춰 주실 수 있나요?" },
        { en: "That's a little over my budget.", kr: "제 예산을 조금 넘네요." },
        { en: "My budget is fifty dollars.", kr: "제 예산은 50달러예요." },
        { en: "How much for these two together?", kr: "이 두 개를 같이 사면 얼마인가요?" },
        { en: "Is there a discount if I pay in cash?", kr: "현금으로 내면 할인되나요?" },
        { en: "Could you include this scarf for that price?", kr: "그 가격에 이 스카프도 포함해 주실 수 있나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "와, 이거 너무 좋다!", en: "Oh, I love this one!", page: "p.110 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "보는 눈이 있네요! 진짜 빈티지예요.", en: "Good eye! That’s a real vintage piece.", page: "p.110 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "얼마예요?", en: "How much is it?", page: "p.110 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "60달러요.", en: "Sixty dollars.", page: "p.110 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "60달러? 비싸다.", en: "Sixty? That’s a lot.", page: "p.110 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 46,
    title: "저 애 아니거든요?",
    category: "식당·어린이 메뉴",
    page: "p.113-115",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "저 애 아니거든요?", en: "I’m not a kid.", page: "p.113 핵심표현", note: "💡 TIP: come with는 메뉴에 무엇이 함께 나오는지 말할 때 씁니다. grown-up은 '어른' 또는 '어른용'을 뜻해요.", extras: [
        { en: "Do you have a kids’ menu?", kr: "어린이 메뉴가 있나요?" },
        { en: "What comes with the kids’ meal?", kr: "어린이 메뉴에는 무엇이 함께 나오나요?" },
        { en: "Can we get the toy separately?", kr: "장난감만 따로 받을 수 있나요?" },
        { en: "Could we get a bigger plate?", kr: "더 큰 접시를 받을 수 있나요?" },
        { en: "Could we have an extra fork?", kr: "포크 하나 더 주시겠어요?" },
        { en: "Could you cut this into smaller pieces?", kr: "이것을 더 작게 잘라 주시겠어요?" },
        { en: "Can we get milk instead of soda?", kr: "탄산음료 대신 우유로 받을 수 있나요?" },
        { en: "Could we get the sauce on the side?", kr: "소스는 따로 받을 수 있나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요! 두 분 뭐 드릴까요?", en: "Hi there! What can I get for you two?", page: "p.113 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "치즈버거 하나 주세요. 이 아이는 어린이 메뉴로요.", en: "Can I get a cheeseburger? And a kids’ meal for him.", page: "p.113 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "저기요. 저 애 아니거든요.", en: "Excuse me. I’m not a kid.", page: "p.113 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "어머, 미안해요! 몇 살이에요?", en: "Oh, I’m sorry! How old are you?", page: "p.113 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 47,
    title: "여기서 먹고 갈게요",
    category: "카페·매장 이용",
    page: "p.116-118",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "여기서 먹고 갈게요.", en: "For here, please.", page: "p.116 핵심표현", note: "💡 TIP: For here or to go?는 매장에서 먹을지 포장할지 묻는 질문이에요. Yes만 하지 말고 For here, please로 답하세요.", extras: [
        { en: "I'd like this for here, please.", kr: "이건 여기서 먹고 갈게요." },
        { en: "I'll have it to go, please.", kr: "포장해 주세요." },
        { en: "The coffee is to go, but the sandwich is for here.", kr: "커피는 포장하고, 샌드위치는 여기서 먹을게요." },
        { en: "Could you put it in a mug?", kr: "머그잔에 담아 주시겠어요?" },
        { en: "Could you put it in a takeaway cup?", kr: "포장용 컵에 담아 주시겠어요?" },
        { en: "Could you warm this up?", kr: "이것을 데워 주시겠어요?" },
        { en: "Is there a table available?", kr: "빈 테이블이 있나요?" },
        { en: "Can I sit by the window?", kr: "창가에 앉아도 될까요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "안녕하세요! 뭐 드릴까요?", en: "Hi! What can I get for you?", page: "p.116 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "라테랑 크루아상 하나 주세요.", en: "Can I get a latte and a croissant?", page: "p.116 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "네! 드시고 가세요, 가져가세요?", en: "Sure! For here or to go?", page: "p.116 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "네.", en: "Yes.", page: "p.116 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 48,
    title: "택시 스몰토크 2",
    category: "택시·여행 이야기",
    page: "p.119-121",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "이번엔 내가 먼저 말 걸어 볼게. 오늘 하루 어떠세요?", en: "How’s your day going?", page: "p.119 핵심표현", note: "💡 TIP: How’s your day going?으로 가볍게 말을 걸고 How about you?로 질문을 돌려줄 수 있어요.", extras: [
        { en: "Has it been a busy day?", kr: "오늘 많이 바쁘셨어요?" },
        { en: "Have you lived here long?", kr: "여기에서 오래 사셨어요?" },
        { en: "What do you like most about this city?", kr: "이 도시에서 가장 좋은 점은 뭐예요?" },
        { en: "Do you have any restaurant recommendations?", kr: "추천해 주실 식당이 있나요?" },
        { en: "Is there anything we should see before we leave?", kr: "떠나기 전에 꼭 볼 만한 것이 있나요?" },
        { en: "We're flying home tomorrow.", kr: "저희는 내일 비행기로 돌아가요." },
        { en: "We've had a great time here.", kr: "여기서 정말 즐거운 시간을 보냈어요." },
        { en: "How long does it take to get to the airport?", kr: "공항까지 얼마나 걸리나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "어! 두 분 알아요!", en: "Hey! I know you two!", page: "p.119 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "샐 아저씨!", en: "Sal!", page: "p.119 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "오늘은 어디로 갈까요?", en: "Where to today?", page: "p.119 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "브루클린 브리지요.", en: "The Brooklyn Bridge, please.", page: "p.119 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 49,
    title: "전화로 호텔 예약 도전",
    category: "호텔·전화 예약",
    page: "p.122-124",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "방 예약하고 싶다고 뭐라고 해?", en: "I’d like to book a room for two nights.", page: "p.122 핵심표현", note: "💡 TIP: spell은 단어를 번역하는 것이 아니라 알파벳 철자를 하나씩 말한다는 뜻이에요.", extras: [
        { en: "Do you have any rooms available for those dates?", kr: "그 날짜에 예약할 수 있는 방이 있나요?" },
        { en: "I'd like a room for two adults.", kr: "성인 두 명이 묵을 방을 원해요." },
        { en: "Do you have a room with two beds?", kr: "침대가 두 개 있는 방이 있나요?" },
        { en: "How much is it per night?", kr: "1박에 얼마인가요?" },
        { en: "Does the price include tax?", kr: "그 가격에 세금이 포함되어 있나요?" },
        { en: "Is breakfast included?", kr: "조식이 포함되어 있나요?" },
        { en: "Could you repeat that more slowly?", kr: "조금 더 천천히 다시 말씀해 주시겠어요?" },
        { en: "Could you confirm the dates for me?", kr: "예약 날짜를 다시 확인해 주시겠어요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "그랜드 호텔입니다. 무엇을 도와드릴까요?", en: "Thank you for calling the Grand Hotel. How can I help you?", page: "p.122 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "2박으로 방 예약하고 싶어요.", en: "I’d like to book a room for two nights.", page: "p.122 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "물론이죠. 날짜가 어떻게 되세요?", en: "Certainly. What dates?", page: "p.122 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "10월 10일부터 12일까지요.", en: "October tenth to the twelfth.", page: "p.122 영상대사", note: "", extras: [] }
    ]
  },
  {
    id: 50,
    title: "이거 저희가 시킨 거 아니에요",
    category: "식당·잘못 나온 음식",
    page: "p.125-127",
    dialogues: [
      { role: "A", roleLabel: "A", kr: "이거 저희가 시킨 거 아니에요, 영어로 뭐라고 해?", en: "Excuse me, we didn’t order this.", page: "p.125 핵심표현", note: "💡 TIP: didn't 뒤에는 동사원형 order를 써요. mix-up은 '착오·혼선'을 뜻해요.", extras: [
        { en: "I think there's been a mix-up.", kr: "착오가 있었던 것 같아요." },
        { en: "This isn't what we ordered.", kr: "이건 저희가 주문한 게 아니에요." },
        { en: "We ordered the chicken, not the fish.", kr: "저희는 생선이 아니라 치킨을 주문했어요." },
        { en: "Could you check our order, please?", kr: "저희 주문을 확인해 주시겠어요?" },
        { en: "Is this meant for another table?", kr: "이건 다른 테이블에 나갈 음식인가요?" },
        { en: "We're still waiting for our salads.", kr: "저희는 아직 샐러드를 기다리고 있어요." },
        { en: "Could you bring the correct dish?", kr: "저희가 주문한 음식으로 가져다주시겠어요?" },
        { en: "Will we be charged for this?", kr: "이것도 저희에게 청구되나요?" }
      ]},
      { role: "B", roleLabel: "B", kr: "우리 샐러드 두 개 시켰는데.", en: "We ordered two salads.", page: "p.125 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "실례합니다. 이거 저희가 시킨 거 아니에요.", en: "Excuse me. We didn’t order this.", page: "p.125 핵심표현", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "어? 이건 7번 테이블 거네요.", en: "Oh? This is for table seven.", page: "p.125 영상대사", note: "", extras: [] },
      { role: "A", roleLabel: "A", kr: "저희는 9번 테이블이에요.", en: "We’re table nine.", page: "p.125 영상대사", note: "", extras: [] },
      { role: "B", roleLabel: "B", kr: "정말 죄송해요. 다른 테이블 건가 봐요.", en: "I’m so sorry. This must be for another table.", page: "p.125 영상대사", note: "", extras: [] }
    ]
  }
];