import type { FnContext } from "$live/types.ts";
import type { Account as AccountBlock } from "$live/blocks/account.ts";
import type { Manifest } from "deco-sites/std/live.gen.ts";

export interface Account extends AccountBlock {
  /**
   * @description URL for the WordPress REST API.
   */
  wordpressApiUrl?: string;

  /**
   * @description Domain for WordPress.com.
   */
  wordpressComDomain?: string;
}

export type Context = FnContext<{
  configWordpress?: Account;
}, Manifest>;

function account(acc: Account) {
  return acc;
}

export default account;
