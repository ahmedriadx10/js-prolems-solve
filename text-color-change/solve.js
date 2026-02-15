//প্রবলেম নং: ১৫ (The Text & Color Switcher)

/**
 * দৃশ্যপট (Scenario):
একটি বক্স থাকবে যাতে কিছু লেখা থাকবে। আর নিচে তিনটি বাটন থাকবে:
১. "Change Text" বাটনে ক্লিক করলে বক্সের ভেতরের লেখা বদলে যাবে।
২. "Red" বাটনে ক্লিক করলে বক্সের ব্যাকগ্রাউন্ড লাল হবে।
৩. "Blue" বাটনে ক্লিক করলে বক্সের ব্যাকগ্রাউন্ড নীল হবে।
 */

const box=document.getElementById('display-box')

document.getElementById('text-btn').addEventListener('click',function(){

document.querySelector('div h2').innerText='Hey I am changed'

})


document.getElementById('red-btn').addEventListener('click',function(){
box.style.backgroundColor='red'



})

document.getElementById('blue-btn').addEventListener('click',function(){

  box.style.backgroundColor='blue'
})