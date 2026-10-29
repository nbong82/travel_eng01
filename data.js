// ============================================================================
// 여행영어 실전 대사집 데이터 파일 (data.js)
// ★ 새로운 상황(51번, 52번...)이 업데이트되면 맨 아래에 객체 블록만 추가하세요!
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
      {
        role: "B", roleLabel: "B (직원)",
        kr: "안녕하세요. 뭐 드릴까요?",
        en: "Good morning. What can I get you?",
        page: "p.11 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "아이스 아메리카노 주세요.",
        en: "An iced Americano, please.",
        page: "p.11 영상대사",
        note: "",
        extras: [
          { en: "Can I get that with oat milk?", kr: "그거 귀리 우유로 바꿔주시겠어요?" },
          { en: "Less ice, please.", kr: "얼음 적게 주세요." },
          { en: "Can I get an extra shot?", kr: "샷 추가할 수 있을까요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "사이즈는요?",
        en: "What size?",
        page: "p.11 영상대사",
        note: "",
        extras: [
          { en: "What sizes do you have?", kr: "사이즈는 어떤 게 있어요?" }
        ]
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "가장 큰 사이즈로 주시겠어요?",
        en: "Can I get the largest size?",
        page: "p.11 핵심표현",
        note: "💡 반대 표현: Can I get the smallest size? (제일 작은 사이즈로 주시겠어요?)",
        extras: [
          { en: "Can I get the smallest size?", kr: "제일 작은 사이즈로 주시겠어요?" },
          { en: "Can I get a medium?", kr: "중간 사이즈로 주세요." }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "제일 큰 거요? 정말요?",
        en: "The largest? Are you sure?",
        page: "p.11 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "네, 확실해요.",
        en: "Yes, please. I'm sure.",
        page: "p.11 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "더 필요한 거 있으세요?",
        en: "Anything else?",
        page: "p.11 영상대사",
        note: "",
        extras: [
          { en: "For here or to go?", kr: "드시고 가세요, 포장이세요?" },
          { en: "For here, please. / To go, please.", kr: "먹고 갈게요. / 포장이요." }
        ]
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "아니요, 그게 다예요.",
        en: "No, that's it.",
        page: "p.11 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "주문자 이름 알려주시겠어요?",
        en: "Can I get a name for the order?",
        page: "p.11 영상대사",
        note: "💡 TIP: 미국 카페는 주문 후 이름을 물어봅니다. 당황하지 말고 이름만 말하면 끝!",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "알겠습니다. 금방 나올 거예요.",
        en: "Got it. That'll be right up.",
        page: "p.11 영상대사",
        note: "",
        extras: []
      }
    ]
  },
  {
    id: 3,
    title: "포장해주시겠어요?",
    category: "식당",
    page: "p.13",
    dialogues: [
      {
        role: "B", roleLabel: "B (서버)",
        kr: "음식 어떠셨어요?",
        en: "How was everything?",
        page: "p.13 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "맛있었는데 너무 배불러요.",
        en: "It was delicious, but I'm so full.",
        page: "p.13 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "이거 포장해주시겠어요?",
        en: "Can I get this to go?",
        page: "p.13 핵심표현",
        note: "💡 TIP: 미국에선 포장을 take-out보다 to go라고 훨씬 많이 씁니다.",
        extras: [
          { en: "Can I get a to-go box?", kr: "포장 박스 하나 주시겠어요?" },
          { en: "Could you wrap this up for me?", kr: "이거 싸주시겠어요?" },
          { en: "Can I get the rest to go?", kr: "남은 거 포장해 주시겠어요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (서버)",
        kr: "그거 포장 박스 드릴까요?",
        en: "Would you like a box for that?",
        page: "p.13 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "네, 부탁드려요.",
        en: "Yes, please.",
        page: "p.13 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (서버)",
        kr: "물론이죠. 박스 가져다드릴게요.",
        en: "Of course. I'll bring you a box.",
        page: "p.13 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (서버)",
        kr: "계산서도 드릴까요?",
        en: "Would you like the check as well?",
        page: "p.13 영상대사",
        note: "",
        extras: [
          { en: "Can I get the check, please?", kr: "계산서 주시겠어요?" },
          { en: "Can we split the check?", kr: "계산 나눠서 할 수 있을까요?" },
          { en: "Do you take credit cards?", kr: "카드 되나요?" },
          { en: "Is the tip included?", kr: "팁이 포함된 건가요?" },
          { en: "Keep the change.", kr: "거스름돈은 됐어요." }
        ]
      },
      {
        role: "B", roleLabel: "B (서버)",
        kr: "서두르지 마세요. 천천히 하세요.",
        en: "No rush. Take your time.",
        page: "p.13 영상대사",
        note: "",
        extras: []
      }
    ]
  },
  {
    id: 4,
    title: "예약 없이 숙박 가능한가요?",
    category: "호텔",
    page: "p.15",
    dialogues: [
      {
        role: "A", roleLabel: "A (손님)",
        kr: "예약 없이 숙박 가능한가요?",
        en: "Do you take walk-ins?",
        page: "p.15 핵심표현",
        note: "💡 TIP: walk-in은 예약 없이 온 손님이라는 뜻으로, 호텔·식당·미용실·병원에서 똑같이 씁니다.",
        extras: [
          { en: "Do you have any rooms available tonight?", kr: "오늘 밤 빈방 있나요?" },
          { en: "I'd like to check in, please.", kr: "체크인하려고요." },
          { en: "I have a reservation under Kim.", kr: "김으로 예약했어요." }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "네, 가능해요. 몇 박이세요?",
        en: "Yes, we do. How many nights?",
        page: "p.15 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "하룻밤이요.",
        en: "Just one night.",
        page: "p.15 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "빈방 확인해 볼게요. 침대 두 개짜리 방이 있어요.",
        en: "Let me check availability. We have a room with two beds available.",
        page: "p.15 영상대사",
        note: "",
        extras: [
          { en: "Can I get a room with a view?", kr: "전망 좋은 방으로 받을 수 있을까요?" }
        ]
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "1박에 얼마예요?",
        en: "How much is it per night?",
        page: "p.15 영상대사",
        note: "",
        extras: [
          { en: "Is that price plus tax?", kr: "그 가격은 세금 별도인가요?" },
          { en: "Does that include breakfast?", kr: "조식 포함인가요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "160달러, 세금 포함이요.",
        en: "One hundred and sixty dollars, tax included.",
        page: "p.15 영상대사",
        note: "💡 tax included (세금 포함) / plus tax (세금 별도)를 꼭 확인하세요.",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "그걸로 할게요.",
        en: "We'll take it.",
        page: "p.15 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "좋아요. 신분증 보여주시겠어요? 512호예요. 엘리베이터는 왼쪽이에요. 즐거운 시간 되세요.",
        en: "Wonderful. May I see your ID? Room 512. Elevators are to your left. Enjoy your stay.",
        page: "p.15 영상대사",
        note: "",
        extras: [
          { en: "What time is checkout?", kr: "체크아웃은 몇 시예요?" },
          { en: "Can I get a late checkout?", kr: "체크아웃을 늦출 수 있을까요?" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "휴지가 다 떨어졌어요.",
    category: "호텔",
    page: "p.17",
    dialogues: [
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "안녕하세요, 512호인데요. 휴지가 다 떨어졌어요.",
        en: "Hi, this is room 512. We're out of toilet paper.",
        page: "p.17 핵심표현",
        note: "💡 TIP: We're out of ~ 패턴 하나로 '~가 다 떨어졌어요'를 전부 말할 수 있어요.",
        extras: [
          { en: "We're out of towels.", kr: "수건이 다 떨어졌어요." },
          { en: "We're out of shampoo.", kr: "샴푸가 다 떨어졌어요." },
          { en: "We're out of coffee pods.", kr: "커피 캡슐이 다 떨어졌어요." }
        ]
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "좀 올려보내 주시겠어요?",
        en: "Could you send some up?",
        page: "p.17 영상대사",
        note: "",
        extras: [
          { en: "Could I get some extra pillows?", kr: "베개 좀 더 받을 수 있을까요?" },
          { en: "Could I get an extra blanket?", kr: "담요 하나 더 주시겠어요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "물론이죠. 바로 사람 보내드릴게요. 더 필요한 거 있으세요?",
        en: "Of course. I'll send someone right away. Is there anything else you need?",
        page: "p.17 영상대사",
        note: "",
        extras: [
          { en: "The room hasn't been cleaned yet.", kr: "방 청소가 아직 안 됐어요." },
          { en: "The air conditioning isn't working.", kr: "에어컨이 안 돼요." },
          { en: "Could you send someone to take a look?", kr: "누가 와서 봐주실 수 있을까요?" }
        ]
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "아니요, 그게 다예요. 감사합니다.",
        en: "No, that's all. Thank you.",
        page: "p.17 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (하우스키핑)",
        kr: "하우스키핑입니다. 여기요.",
        en: "Housekeeping. Here you go.",
        page: "p.17 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "완벽해요, 정말 감사합니다.",
        en: "Perfect, thank you so much.",
        page: "p.17 영상대사",
        note: "",
        extras: []
      }
    ]
  },
  {
    id: 6,
    title: "비슷한 디자인으로 다른 거 있나요?",
    category: "옷가게",
    page: "p.19",
    dialogues: [
      {
        role: "A", roleLabel: "A (손님)",
        kr: "저 꽃무늬 원피스, 마지막이었어요?",
        en: "That floral dress, was that the last one?",
        page: "p.19 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "아쉽지만 그래요. 그게 마지막이었어요.",
        en: "I'm afraid so. That was the last one.",
        page: "p.19 영상대사",
        note: "💡 I'm afraid so는 '아쉽지만 그렇다'는 뜻으로 점원이 자주 쓰는 대답이에요.",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "비슷한 디자인으로 다른 거 있나요?",
        en: "Do you have anything similar?",
        page: "p.19 핵심표현",
        note: "",
        extras: [
          { en: "Do you have this in a smaller size?", kr: "이거 작은 사이즈 있나요?" },
          { en: "Do you have this in a bigger size?", kr: "이거 큰 사이즈 있나요?" },
          { en: "Do you have this in a different color?", kr: "이거 다른 색 있나요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "몇 가지 보여드릴게요. 이건 방금 들어온 거예요. 같은 스타일, 다른 무늬예요.",
        en: "Let me show you a few options. This one just came in. Same style, different print.",
        page: "p.19 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "미디엄 사이즈 있어요? 입어봐도 돼요?",
        en: "Do you have it in a medium? Can I try it on?",
        page: "p.19 영상대사",
        note: "💡 TIP: 사이즈나 색상을 말할 땐 꼭 전치사 in을 넣으세요 (in a medium, in black).",
        extras: [
          { en: "Where's the fitting room?", kr: "탈의실이 어디예요?" },
          { en: "Can I just look around?", kr: "그냥 구경해도 될까요?" },
          { en: "I'm just looking, thanks.", kr: "그냥 둘러보는 중이에요, 감사해요." },
          { en: "Is this on sale?", kr: "이거 세일 중인가요?" },
          { en: "I'll take this one.", kr: "이걸로 할게요." }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "탈의실은 뒤쪽 왼편이에요.",
        en: "The fitting rooms are in the back, on your left.",
        page: "p.19 영상대사",
        note: "",
        extras: []
      }
    ]
  },
  {
    id: 7,
    title: "이거면 충분해요 (will do 패턴)",
    category: "패턴",
    page: "p.21",
    dialogues: [
      {
        role: "B", roleLabel: "B (직원)",
        kr: "어디에 앉으시겠어요?",
        en: "Where would you like to sit?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "아무 자리나 돼요.",
        en: "Any seat will do.",
        page: "p.21 핵심표현",
        note: "💡 TIP: ~ will do 패턴은 '~면 됩니다 / ~면 충분해요'라는 여유 있는 대답입니다.",
        extras: [
          { en: "This will do. / That'll do.", kr: "이거면 돼요. / 그거면 됐어요." },
          { en: "A window seat will do.", kr: "창가 자리면 돼요." }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "원하시는 테이블 있으세요?",
        en: "Any preference for a table?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "아무 테이블이나 돼요.",
        en: "Any table will do.",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "사이즈는요?",
        en: "What size?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "작은 거면 돼요.",
        en: "A small one will do.",
        page: "p.21 영상대사",
        note: "",
        extras: [
          { en: "A regular size will do.", kr: "보통 사이즈면 돼요." },
          { en: "Cash will do.", kr: "현금이면 돼요." }
        ]
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "다른 날도 괜찮으세요?",
        en: "Is another day okay?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "내일이면 돼요.",
        en: "Tomorrow will do.",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (직원)",
        kr: "모닝콜 몇 시로 해드릴까요?",
        en: "What time should we set your wake-up call?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "3시면 돼요.",
        en: "Three o'clock will do.",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (친구)",
        kr: "피자, 아니면 초밥?",
        en: "Pizza or sushi?",
        page: "p.21 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (나)",
        kr: "아무거나 돼요.",
        en: "Anything will do.",
        page: "p.21 영상대사",
        note: "",
        extras: [
          { en: "Either one will do.", kr: "둘 중 아무거나 돼요." },
          { en: "Whatever's easiest will do.", kr: "제일 편한 걸로 하면 돼요." },
          { en: "That will do for now.", kr: "일단 그거면 됐어요." }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "숙박을 하루 더 연장해 주시겠어요?",
    category: "호텔",
    page: "p.23",
    dialogues: [
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "어서, 체크아웃 11시야! 숙박을 하루 더 연장해 주시겠어요?",
        en: "Come on, checkout is at eleven! Could you extend my stay for one more night?",
        page: "p.23 핵심표현",
        note: "💡 TIP: 연장 절차는 방 번호 → 빈방 확인 → 요금 확인 → 결제 순서로 진행돼요.",
        extras: [
          { en: "I'd like to extend my stay by two nights.", kr: "이틀 더 연장하고 싶어요." },
          { en: "Can I stay in the same room?", kr: "같은 방에 계속 있을 수 있나요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "물론이죠. 방 번호가 어떻게 되세요?",
        en: "Of course. What's your room number?",
        page: "p.23 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "1204호요.",
        en: "Room 1204.",
        page: "p.23 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "빈방 확인해 볼게요. 좋은 소식이에요, 같은 방이 가능해요. 요금은 동일해요.",
        en: "Let me check availability. Good news, the same room is available. It'll be the same rate.",
        page: "p.23 영상대사",
        note: "",
        extras: [
          { en: "Is it the same rate for the extra night?", kr: "추가 숙박도 요금이 같나요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "등록된 카드로 결제할까요?",
        en: "Should I charge the card on file?",
        page: "p.23 영상대사",
        note: "💡 card on file은 체크인 때 등록해 둔 카드라는 뜻이에요.",
        extras: []
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "네, 부탁드려요!",
        en: "Yes, please!",
        page: "p.23 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "다 됐습니다. 체크아웃은 내일 11시예요.",
        en: "You're all set. Checkout is at eleven tomorrow.",
        page: "p.23 영상대사",
        note: "",
        extras: [
          { en: "I'd like to check out a day early.", kr: "하루 일찍 체크아웃하고 싶어요." },
          { en: "Could you hold my luggage after checkout?", kr: "체크아웃 후에 짐을 맡길 수 있나요?" },
          { en: "Can I get a copy of the receipt?", kr: "영수증 한 부 받을 수 있을까요?" },
          { en: "I'd like to check out, please.", kr: "체크아웃할게요." }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "조식은 몇 시까지예요?",
    category: "호텔",
    page: "p.25",
    dialogues: [
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "조식은 몇 시까지예요?",
        en: "What time does breakfast end?",
        page: "p.25 핵심표현",
        note: "💡 TIP: 1번(start)과 짝을 이루는 표현이에요. start / end만 바꾸면 되니 세트로 외워두세요.",
        extras: [
          { en: "It's served from six thirty to ten thirty.", kr: "6시 반부터 10시 반까지예요." },
          { en: "Until what time is breakfast?", kr: "조식은 몇 시까지인가요?" },
          { en: "Is it too late for breakfast?", kr: "조식 먹기엔 너무 늦었나요?" },
          { en: "Are you still serving breakfast?", kr: "아직 조식 하고 있나요?" }
        ]
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "조식은 10시 반에 끝나요.",
        en: "Breakfast ends at ten thirty.",
        page: "p.25 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "어디서 먹어요?",
        en: "Where is it served?",
        page: "p.25 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (호텔 직원)",
        kr: "2층, 엘리베이터 바로 지나서요.",
        en: "On the second floor, just past the elevators.",
        page: "p.25 영상대사",
        note: "",
        extras: [
          { en: "What time does the restaurant close?", kr: "식당은 몇 시에 닫아요?" },
          { en: "What time does the bar close?", kr: "바는 몇 시에 닫아요?" },
          { en: "Is room service available 24 hours?", kr: "룸서비스는 24시간 되나요?" },
          { en: "What time does the front desk close?", kr: "프런트는 몇 시까지 해요?" }
        ]
      },
      {
        role: "A", roleLabel: "A (투숙객)",
        kr: "10시 20분이야. 조식 10시 반에 끝나.",
        en: "It's ten twenty. Breakfast ends at ten thirty.",
        page: "p.25 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (식당 직원)",
        kr: "오셨네요. 10시 29분이에요.",
        en: "You made it. Ten twenty-nine.",
        page: "p.25 영상대사",
        note: "",
        extras: []
      }
    ]
  },
  {
    id: 10,
    title: "아무리 늦어도 3시까지 도착할게요.",
    category: "전화",
    page: "p.27",
    dialogues: [
      {
        role: "B", roleLabel: "B (가이드)",
        kr: "투어는 3시에 출발해요. 몇 시에 오실 수 있어요?",
        en: "Our tour leaves at three. What time can you get here?",
        page: "p.27 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "아무리 늦어도 3시까지 도착할게요.",
        en: "I'll be there by three at the latest.",
        page: "p.27 핵심표현",
        note: "💡 TIP: by 3 = 3시 전에 도착(마감), until 3 = 3시까지 계속(지속). 도착 약속엔 무조건 by를 쓰세요.",
        extras: [
          { en: "I'll be there in ten minutes.", kr: "10분 뒤에 도착해요." },
          { en: "I'm running a little late.", kr: "조금 늦을 것 같아요." },
          { en: "I'm stuck in traffic.", kr: "차가 막혀서요." },
          { en: "I'll be there as soon as I can.", kr: "최대한 빨리 갈게요." }
        ]
      },
      {
        role: "B", roleLabel: "B (가이드)",
        kr: "좋아요. 그때 봬요.",
        en: "Perfect. See you then.",
        page: "p.27 영상대사",
        note: "",
        extras: []
      },
      {
        role: "B", roleLabel: "B (가이드)",
        kr: "지금 어디예요?",
        en: "Where are you now?",
        page: "p.27 영상대사",
        note: "",
        extras: []
      },
      {
        role: "A", roleLabel: "A (손님)",
        kr: "가는 중이에요.",
        en: "I'm on my way.",
        page: "p.27 영상대사",
        note: "",
        extras: [
          { en: "Can you wait a few more minutes?", kr: "몇 분만 더 기다려 주실 수 있어요?" },
          { en: "I'm almost there.", kr: "거의 다 왔어요." },
          { en: "I'm right outside.", kr: "바로 앞에 있어요." },
          { en: "Sorry to keep you waiting.", kr: "기다리게 해서 죄송해요." }
        ]
      },
      {
        role: "B", roleLabel: "B (가이드)",
        kr: "서두르지 마세요. 천천히 오세요. ... 2시 59분. 딱 맞춰 오셨네요.",
        en: "No rush. Take your time. ... Two fifty-nine. Right on time.",
        page: "p.27 영상대사",
        note: "",
        extras: []
      }
    ]
  },

  // ▼ 11번~50번 목차 (대사 데이터 요청 시 즉시 채워 넣을 수 있는 자리)
  { id: 11, title: "청소는 필요없어요.", category: "호텔", page: "p.29", dialogues: [] },
  { id: 12, title: "분실물 들어온 거 있나요?", category: "호텔", page: "p.31", dialogues: [] },
  { id: 13, title: "반으로 잘라주시겠어요?", category: "식당", page: "p.33", dialogues: [] },
  { id: 14, title: "사람이 별로 없을 때가 언제예요?", category: "카페·관광지", page: "p.35", dialogues: [] },
  { id: 15, title: "세탁하면 줄어드나요?", category: "옷가게", page: "p.37", dialogues: [] },
  { id: 16, title: "미지근한 물 주시겠어요?", category: "식당", page: "p.39", dialogues: [] },
  { id: 17, title: "방문 목적이 무엇인가요?", category: "입국심사", page: "p.40", dialogues: [] },
  { id: 18, title: "몇 층 가세요?", category: "엘리베이터", page: "p.42", dialogues: [] },
  { id: 19, title: "화장실 몇 층에 있나요?", category: "호텔", page: "p.44", dialogues: [] },
  { id: 20, title: "빨리 나오는 메뉴가 뭐예요?", category: "식당", page: "p.45", dialogues: [] },
  { id: 21, title: "조용한 자리로 옮겨주시겠어요?", category: "식당", page: "p.47", dialogues: [] },
  { id: 22, title: "넓은 자리로 옮겨주시겠어요?", category: "식당", page: "p.49", dialogues: [] },
  { id: 23, title: "소스를 따로 주시겠어요?", category: "식당", page: "p.51", dialogues: [] },
  { id: 24, title: "택시 스몰토크", category: "택시", page: "p.53", dialogues: [] },
  { id: 25, title: "입국심사 예상 질문", category: "공항 입국심사", page: "p.56", dialogues: [] },
  { id: 26, title: "탑승 수속 - 짐 무게 초과", category: "공항·탑승 수속", page: "p.59", dialogues: [] },
  { id: 27, title: "가장 작은 사이즈로 주시겠어요?", category: "아이스크림 가게", page: "p.62", dialogues: [] },
  { id: 28, title: "조금만 더 보고 주문할게요", category: "식당", page: "p.64", dialogues: [] },
  { id: 29, title: "스테이크 주문하기", category: "식당", page: "p.66", dialogues: [] },
  { id: 30, title: "고속도로가 꽉 막혀 있어요 (추석 특집)", category: "교통", page: "p.70", dialogues: [] },
  { id: 31, title: "기념품샵 할인 행사", category: "기념품샵", page: "p.72", dialogues: [] },
  { id: 32, title: "선물 포장해주시겠어요?", category: "선물 포장", page: "p.75", dialogues: [] },
  { id: 33, title: "음식을 주문했는데 안 나왔을 때", category: "식당·주문 누락", page: "p.78", dialogues: [] },
  { id: 34, title: "새치기 당했을 때 대처법", category: "빵집·줄 서기", page: "p.81", dialogues: [] },
  { id: 35, title: "처음 보는 사람 셔츠에 커피를 쏟았을 때", category: "카페·사과하기", page: "p.84", dialogues: [] },
  { id: 36, title: "접시 좀 치워주시겠어요?", category: "식당·디저트", page: "p.87", dialogues: [] },
  { id: 37, title: "대프리카 (사계절이 뚜렷해요)", category: "버스·스몰토크", page: "p.89", dialogues: [] },
  { id: 38, title: "10분에서 15분 늦을 것 같아요", category: "식당 예약·전화", page: "p.92", dialogues: [] },
  { id: 39, title: "피클을 빼달라고 했는데", category: "버거집·주문 실수", page: "p.94", dialogues: [] },
  { id: 40, title: "계산 잘못했을 때", category: "식당·계산서", page: "p.98", dialogues: [] },
  { id: 41, title: "열쇠 두고 나왔는데 문이 잠겼을 때", category: "호텔·객실 문 잠김", page: "p.101", dialogues: [] },
  { id: 42, title: "아직 영업중인가요?", category: "도넛 가게", page: "p.103", dialogues: [] },
  { id: 43, title: "날짜를 잘못 예약했어요 (호텔)", category: "호텔·예약 변경", page: "p.105", dialogues: [] },
  { id: 44, title: "옆방이 시끄러워요 (호텔)", category: "호텔·소음 요청", page: "p.108", dialogues: [] },
  { id: 45, title: "미국에서 가격 깎기", category: "시장·가격 흥정", page: "p.110", dialogues: [] },
  { id: 46, title: "저 애 아니거든요?", category: "식당·어린이 메뉴", page: "p.113", dialogues: [] },
  { id: 47, title: "여기서 먹고 갈게요", category: "카페·매장 이용", page: "p.116", dialogues: [] },
  { id: 48, title: "택시 스몰토크 2", category: "택시·여행 이야기", page: "p.119", dialogues: [] },
  { id: 49, title: "전화로 호텔 예약 도전", category: "호텔·전화 예약", page: "p.122", dialogues: [] },
  { id: 50, title: "이거 저희가 시킨 거 아니에요", category: "식당·잘못 나온 음식", page: "p.125", dialogues: [] }

  // ★ 앞으로 51번, 52번이 새로 나오면 바로 이 자리에 콤마(,) 찍고 이어 붙이시면 됩니다!
];