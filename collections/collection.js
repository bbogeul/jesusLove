AboutChurch = new Mongo.Collection("aboutChurch");
AboutChurch.attachSchema(new SimpleSchema({
 
    introduction: {
    optional: true,
    type: String,
    label: "환영합니다 내용" ,
         autoform: {
      afFieldInput: {
         type: 'froala',
          width: "100%",
           theme: "dark"
        // froala options goes here
      }
    }
}, 
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));

AddJubo = new Mongo.Collection("addJubo");
AddJubo.attachSchema(new SimpleSchema({
  title: {
      optional: true, 
      type: String,
      label: "제목은 뭘로 하시겠습니까?"
  },
  speaker: {
    optional: true, 
      type: String,
      label: "2"
  },
 content: {
     optional: true,
     type: String,
     label: "3"

 },        
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
  }));
AddJubo2 = new Mongo.Collection("addJubo2");
AddJubo2.attachSchema(new SimpleSchema({
  title: {
      optional: true, 
      type: String,
      label: "제목은 뭘로 하시겠습니까?"
  },
  speaker: {
    optional: true, 
      type: String,
      label: "언행자"
  },
 content: {
     optional: true,
     type: String,
     label: "내용"

 },        
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
  }));
DateForService = new Mongo.Collection('dateForService');
DateForService.attachSchema(new SimpleSchema({
    dateDate: {
     type: Date,
    optional: true,
        label: "주보 날짜"
 },
     createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
}));
ServiceMembers = new Mongo.Collection("serviceMembers");
ServiceMembers.attachSchema(new SimpleSchema({
  prayer1: {
      optional: true, 
      type: String,
      label: "금주 기도"
  },
  prayer2: {
      optional: true, 
      type: String,
      label: "내주 기도"
  },
  month1: {
      optional: true,
      type: Number,
      label: "월"
  },
  month2: {
      optional: true,
      type: Number,
      label: "2번째 월"
      
  },
  bongHun1: {
      optional: true,
      type: String,
      label: "봉현위원 (금월)"
  },
  bongHun2: {
      optional: true, 
      type: String,
      label: "봉헌위원 (내월)"
  },
  serviceMember1: {
      optional: true,
      type: String, 
      label: "금월 안내위원"
  },
  serviceMember2: {
      optional: true,
      type: String,
      label: "내월 안내위원"
  },    
     
    
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));

SharonNews = new Mongo.Collection("sharonNews");
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
SharonNews2 = new Mongo.Collection("sharonNews2");
SharonNews2.attachSchema(new SimpleSchema({
 
    title: {
    optional: false,
    type: String,
    label: "제목"
}, 
     note2: {
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
Sermon1 = new Mongo.Collection("Sermon1");
Sermon1.attachSchema(new SimpleSchema({
 
    title: {
    optional: true,
    type: String,
    label: "제목"
}, 
     verse: {
    optional: true,
    type: String,
    label: "구절"
},
       summary: {
    optional: true,
    type: String,
    label: "본문요약"
}, 
  words: {
    optional: true,
    type: String,
    label: "말씀",
       autoform: {
      afFieldInput: {
         type: 'froala',
          width: "100%",
           theme: "dark"
        // froala options goes here
      }
    }
},
explanation: {
    optional: true,
    type: String,
    label: "본문해설"
},  
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));
Sermon2 = new Mongo.Collection("Sermon2");
Sermon2.attachSchema(new SimpleSchema({
 
    title: {
    optional: true,
    type: String,
    label: "제목"
}, 
     verse: {
    optional: true,
    type: String,
    label: "구절"
},
       summary: {
    optional: true,
    type: String,
    label: "본문요약"
}, 
  words: {
    optional: true,
    type: String,
    label: "말씀",
       autoform: {
      afFieldInput: {
         type: 'froala',
          width: "100%",
           theme: "dark"
        // froala options goes here
      }
    }
},
explanation: {
    optional: true,
    type: String,
    label: "본문해설"
},  
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  } 
  }));
WordForTheWeek = new Mongo.Collection("WordForTheWeek");
WordForTheWeek.attachSchema(new SimpleSchema({
 
  verse: {
    optional: true,
    type: String,
    label: "구절"
},
words: {
    optional: true,
    type: String,
    label: "암송구절을 여기다가 입력"
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
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }  
  }));
AboutChurch.allow({
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
WordForTheWeek.allow({
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
SharonNews2.allow({
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
Sermon1.allow({
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
AddJubo.allow({
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
AddJubo2.allow({
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
Sermon2.allow({
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

ServiceMembers.allow({
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
DateForService.allow({
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