interface MenuItem {
  name: string;
  price: string;
  description: string;
  flavors?: string[];
  isNew?: boolean;
  isHot?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

const menuCategories: MenuCategory[] = [
  {
    title: "세트 메뉴",
    items: [
      {
        name: "라멘 세트",
        price: "₩10,900",
        description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
        isHot: true,
      },
      {
        name: "우동 세트",
        price: "₩9,900",
        description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
      },
      {
        name: "튀김 세트",
        price: "₩12,900~",
        description: "* 라멘, 우동, 오니기리 메뉴 변경가능",
        isHot: true,
      },
    ],
    note: "라멘, 우동, 오니기리 메뉴 변경가능",
  },
  {
    title: "오니기리",
    items: [
      {
        name: "나만의 오니기리",
        price: "₩2,100~",
        description: "2가지 맛 선택가능",
        isHot: true,
        flavors: [
          "오카카(가다랑어포조림)",
          "볶음김치",
          "오징어젓",
          "무말랭이",
          "게살",
          "날치알",
          "청양",
          "참치마요",
          "임치",
          "참치마요",
          "제육볶음",
          "명란",
          "소불고기",
          "구운연어",
          "양념게장",
          "간장게장",
        ],
      },
    ],
  },
  {
    title: "라멘",
    items: [
      {
        name: "산카쿠 라멘",
        price: "₩9,500",
        description: "정통 산카쿠 라멘",
        isHot: true,
      },
      {
        name: "들깨 해장 라멘",
        price: "₩10,500",
        description: "들깨의 고소함이 가득한 해장 라멘",
        isHot: true,
      },
      {
        name: "카라이 산카쿠 라멘",
        price: "₩9,900",
        description: "매콤한 카라이 산카쿠 라멘",
      },
      {
        name: "미소 돈코츠",
        price: "₩9,500",
        description: "진한 돼지뼈 국물의 미소 라멘",
      },
      {
        name: "카라이 미소 돈코츠",
        price: "₩9,900",
        description: "매콤한 미소 돈코츠 라멘",
      },
      {
        name: "쇼유 라멘",
        price: "₩9,500",
        description: "깔끔한 간장 맛의 라멘",
      },
      {
        name: "차슈폭탄 라멘",
        price: "₩13,900",
        description: "부드러운 차슈가 가득한 라멘",
        isNew: true,
      },
    ],
  },
  {
    title: "온우동",
    items: [
      {
        name: "들깨 크림 우동",
        price: "₩10,900",
        description: "고소한 들깨의 진한 맛",
        isHot: true,
      },
      {
        name: "카케 우동",
        price: "₩10,900",
        description: "전통적인 카케 우동",
      },
      {
        name: "유부 우동",
        price: "₩10,500",
        description: "유부가 들어간 우동",
      },
      {
        name: "니꾸 우동",
        price: "₩8,500",
        description: "고기와 야채가 가득한 우동",
        isHot: true,
      },
      {
        name: "김치 유부 우동",
        price: "₩8,900",
        description: "김치와 유부의 조화",
      },
    ],
  },
  {
    title: "냉라멘",
    items: [
      {
        name: "히야시츄카",
        price: "₩9,500",
        description: "시원한 여름 라멘",
        isNew: true,
        isHot: true,
      },
      {
        name: "참깨마요 히야시츄카",
        price: "₩9,500",
        description: "참깨마요가 들어간 시원한 라멘",
        isNew: true,
      },
    ],
  },
  {
    title: "덮밥·사이드",
    items: [
      {
        name: "미니 차슈 덮밥",
        price: "₩3,900",
        description: "부드러운 차슈 덮밥",
      },
      {
        name: "치킨 마요 덮밥",
        price: "₩4,900",
        description: "치킨과 마요네즈의 조화",
        isNew: true,
      },
      {
        name: "수제 가라아게",
        price: "₩5,900",
        description: "바삭한 일본식 치킨",
        isNew: true,
      },
      {
        name: "타코야끼",
        price: "₩4,900",
        description: "전통 일본 타코야끼",
      },
    ],
  },
];

export default menuCategories;
