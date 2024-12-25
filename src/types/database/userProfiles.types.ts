import { Snippet } from "./snippets.types";

export enum UserProfileSubscriptionTier {
  NONE="none",
  FREE="free",
  PAID_STANDARD="paid_standard",
  PAID_PREMIUM="paid_premium"
}

export enum UserProfileAccountStatus {
  OPEN="open",
  UNDER_REVIEW="under_review",
  CLOSED="closed",
  FLAGGED="flagged"
}

export enum UserProfileBillStatus {
  FREE_TIER_NO_CHARGE="free_tier_no_charge",
  PAID="paid",
  PAST_DUE="past_due",
}

export interface UserProfile {
  id: string;
  full_name:string;
  subscriptionTier: UserProfileSubscriptionTier,
  saved_snippets: Array<Snippet>,
  custom_snippets: Array<Snippet>,
  date_created: string,
  account_status: UserProfileAccountStatus,
  bill_status: UserProfileBillStatus,
  username: string
}