Component Hierarchy

AuthFormContainer
  AuthForm

HomeContainer
  Home
  Sidebar

GroupsContainer -container holding all the groups
  GroupHeader
  MeetUpGroupIndex

MeetUpContainer -container holding all the events, members, etc. for a group
  MeetUpGroupHeader
  EventIndexContainer
  Tags

SearchResultsContainer
  MeetupGroupIndex -will be filtered by tags

TagContainer
  Tag -each tag will be a container holding all the groups with tags in that category
    MeetupGroupIndex

EventIndexContainer
  EventIndex
  EventItemContainer

EventContainer
  EventForm
  EventItemContainer

EventItemContainer
  EventItem
  EvenItemComment


========================================================================

"/sign-up"                      {AuthFormContainer}
"/sign-in"                      {AuthFormContainer}
"/members/memberid"             {HomeContainer}
"/home"                         {HomeContainer}
"/search"                       {SearchResultsContainer}
"/meetupname"                   {MeetUpContainer}
"/meetupname/eventid"           {EventIndexContainer}

========================================================================
