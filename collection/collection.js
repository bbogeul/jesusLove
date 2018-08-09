SharonNews = new Mongo.Collection("SharonNews");
SharonNews.attachSchema(new SimpleSchema({
 
    title: {
    optional: false,
    type: String,
    label: "제목"
}, 
     note: {
    optional: true,
    type: String,
    label: "주의사항"
}, 
    linkForScript: {
    optional: true,
    type: String,
    label: "악보 링크"
    
},
       youtubeLink: {
    optional: true,
    type: String,
    label: "비디오 링크"
    
},
    dateInput: {
          type: Date,
    optional: true,
        label: "날짜"
    },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));

qtWords = new Mongo.Collection("qtWords");
qtWords.attachSchema(new SimpleSchema({
 
 
     verse: {
    optional: true,
    type: String,
    label: "구절"
},
 
  words: {
    optional: true,
    type: String,
    label: "본문해설"
},
    
explanation: {
    optional: true,
    type: String,
    label: "말씀",
}, 
    dateInput: {
          type: Date,
    optional: true,
        label: "날짜"
    },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));
PrayerList = new Mongo.Collection("PrayerList");
PrayerList.attachSchema(new SimpleSchema({
 

title: {
    optional: false,
    type: String,
    label: "제목"
}, 
words: {
    optional: true,
    type: String,
    label: "내용"
},
allowed: {
    type: Boolean,
    label: "수락하기",
    defaultValue: false
},
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }  
  }));
  ChurchNews = new Mongo.Collection("ChurchNews");
  ChurchNews.attachSchema(new SimpleSchema({
   
  
  title: {
      optional: false,
      type: String,
      label: "소식 제목"
  }, 
  news: {
      optional: true,
      type: String,
      label: "소식"
  },
    createdAt: {
      type: Date,
      autoValue: function () {
        return new Date();
      }
    }  
    }));


//permissions//
SharonNews.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
qtWords.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
PrayerList.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});
ChurchNews.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});