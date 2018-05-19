export interface Fcmessage {
  to:string,
  collapse_key:string,
  notification:Notification
}

interface Notification{
  title:string,
  body:string
}
