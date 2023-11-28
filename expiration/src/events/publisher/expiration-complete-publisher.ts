import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@sgticketingchano/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
