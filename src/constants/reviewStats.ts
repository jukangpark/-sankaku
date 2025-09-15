// 태그 매핑을 위한 상수
export const TAG_MAPPING = {
  맛있어요: "🍜 맛있어요",
  가성비좋아요: "💰 가성비좋아요",
  혼밥하기좋아요: "👤 혼밥하기좋아요",
  친절해요: "😊 친절해요",
  깔끔해요: "✨ 깔끔해요",
  분위기좋아요: "🏮 분위기좋아요",
  특별한메뉴: "🎯 특별한 메뉴가 있어요",
  재방문의사있어요: "🔄 재방문의사있어요",
  데이트: "💕 데이트하기 좋아요",
  가족모임: "👨‍👩‍👧‍👦 가족모임에 좋아요",
  특별한날: "🎉 특별한날에 좋아요",
};

const reviewStats = [
  { label: '🍜 "맛있어요"', value: 98, maxValue: 105 },
  { label: '💰 "가성비좋아요"', value: 87, maxValue: 105 },
  { label: '👤 "혼밥하기좋아요"', value: 76, maxValue: 105 },
  { label: '😊 "친절해요"', value: 65, maxValue: 105 },
  { label: '✨ "깔끔해요"', value: 58, maxValue: 105 },
  { label: '🎯 "특별한 메뉴가 있어요"', value: 52, maxValue: 105 },
  { label: '🔄 "재방문의사있어요"', value: 49, maxValue: 105 },
  { label: '🏮 "분위기좋아요"', value: 43, maxValue: 105 },
];

export default reviewStats;
