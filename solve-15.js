// প্রবলেম ৭০: ক্যারেক্টার কাউন্ট (Frequency Counter)

// একটি ফাংশন লিখো যা একটি স্ট্রিং ইনপুট নিবে এবং ওই স্ট্রিং-এ প্রতিটি ক্যারেক্টার কতবার আছে তা একটি অবজেক্ট আকারে রিটার্ন করবে।

// শর্ত:

// আউটপুট অবজেক্টের 'key' হবে ক্যারেক্টারটি এবং 'value' হবে তার সংখ্যা।

const str = "I am a developer";

function strLetterCounter(getString) {
  const returnResult = {};

  const splitStr = getString.split("");

  for (const x of splitStr) {
    if (!returnResult.hasOwnProperty(x)) {
      returnResult[x] = 1;
    } else {
      returnResult[x]++;
    }
  }

  console.log(returnResult);
}

const result = strLetterCounter(str);
console.log(result);
