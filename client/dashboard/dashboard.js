Template.dashboard.helpers({
  SchoolsCount: function(){
    var countG = 0;
    Meteor.call('getSchoolsCount', function(error, count){
      console.log('count '+count);
      Session.set('schoolsCount',count);
    });
    countG = Session.get('schoolsCount');
    return countG;
  },
  BranchesCount: function(){
    Meteor.call('getBranchesCount',function(e,c){
      Session.set('branchesCount',c);
    });
    return Session.get('branchesCount');
  },
  TeachersCount: function(){
    Meteor.call('getTeachersCount',function(e,c){
      Session.set('teachersCount',c);
    });
    return Session.get('teachersCount');
  },
  SubjectsCount: function(){
    Meteor.call('getSubjectsCount', function(e,c){
      Session.set('subjectsCount', c);
    });
    return Session.get('subjectsCount');
  },
  GroupsCount: function(){
    Meteor.call('getGroupsCount', function(c,t){
      Session.set('groupsCount', c);
    });
    return Session.get('groupsCount');
  }
});
