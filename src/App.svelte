<script type="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Confetti from "./Confetti.svelte";
  type ToGo = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  type Plural = {
    days: "s" | "";
    hours: "s" | "";
    minutes: "s" | "";
    seconds: "s" | "";
  };
  const arrive: number = Date.UTC(2022, 11, 17, 5, 55, 0);
  const emojies: string[] = [
    "😊",
    "😘",
    "🤗",
    "🥰",
    "😎",
    "🥳",
    "😋",
    "🤣",
    "💗",
  ];

  let now: number = Date.now();
  let index: number = 0;
  export let emoji_size = 3;
  let tap = true;
  $: secstogo = secs(now);
  $: togo = elapsed(now, secstogo);
  $: s = plural(togo);
  $: emoji = emojies[index];

  function secs(now: number): number {
    return Math.round((arrive - now) / 1000);
  }

  function elapsed(now: number, togo: number): ToGo {
    const days = Math.floor(togo / (24 * 60 * 60));
    togo -= days * (24 * 60 * 60);
    const hours = Math.floor(togo / (60 * 60));
    togo -= hours * (60 * 60);
    const minutes = Math.floor(togo / 60);
    togo -= minutes * 60;
    const seconds = Math.floor(togo);
    return { days, hours, minutes, seconds };
  }
  function plural(togo: ToGo): Plural {
    const ret = {};
    for (const [key, value] of Object.entries(togo)) {
      ret[key] = value === 1 ? "" : "s";
    }
    return ret as Plural;
  }

  onMount(() => {
    const i = setInterval(() => {
      now = Date.now();
      index = (index + 1) % emojies.length;
    }, 1000);
    return () => clearInterval(i);
  });
</script>

<div class="how-long-now">
  <h1 on:touchstart={() => (tap = !tap)}>
    {#if tap}
      {#if secstogo >= 0}How Long Now?{:else}Hello Gorgeous!{/if}
    {:else}
      I ❤️ you Stephanie!
    {/if}
  </h1>
  {#if secstogo >= 0}
    <div class="ticktick">
      <b>{togo.days}</b> day{s.days}
      <b>{togo.hours}</b> hour{s.hours}
      <b>{togo.minutes}</b> minute{s.minutes}
      and
      <b>{togo.seconds}</b> second{s.seconds}
    </div>
    <div class="wrapper" style:height="{emoji_size + 1.5}em">
      {#key emoji}
        <div class="emoji" style:font-size="{emoji_size}em" transition:fade>
          {emoji}
        </div>
      {/key}
    </div>
  {:else}
    <Confetti />
  {/if}
</div>

<style>
  .how-long-now {
    margin: 0 auto;
    width: 80%;

    border: thick double white;
    padding: 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ticktick {
    border: solid white 1px;
    width: 80%;
    margin: 0 auto;
    padding: 1em;
  }
  .ticktick b {
    color: var(--number-color, yellow);
  }
  .wrapper {
    padding: 0.5em;
    position: relative;
  }
  .emoji {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
