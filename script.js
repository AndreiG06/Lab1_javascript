// let name = "Andrei";
// let birthYear = 2006;
// let isStudent = true;

let score = prompt("Введите ваш балл:");
if (score >= 90) {
 console.log("Отлично!");
} else if (score >= 70) {
 console.log("Хорошо");
} else {
 console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
 console.log(`Итерация: ${i}`);
}

// Задание: Какие есть хорошие процессоры Intel на DDR4, но МОЩНЕЕ чем Ryzen 7 5700X?

const processors = [
 { name: "AMD Ryzen 7 5700X",      brand: "AMD",   memoryType: "DDR4", cores: 8,  threads: 16, baseClock: 3.4, boostClock: 4.6, passmark: 25067 },
 { name: "Intel Core i9-10900K",   brand: "Intel", memoryType: "DDR4", cores: 10, threads: 20, baseClock: 3.7, boostClock: 5.3, passmark: 22696 },
 { name: "Intel Core i9-11900K",   brand: "Intel", memoryType: "DDR4", cores: 8,  threads: 16, baseClock: 3.5, boostClock: 5.2, passmark: 26027 },
 { name: "Intel Core i7-11700K",   brand: "Intel", memoryType: "DDR4", cores: 8,  threads: 16, baseClock: 3.6, boostClock: 5.0, passmark: 24560 },
 { name: "Intel Core i5-11600K",   brand: "Intel", memoryType: "DDR4", cores: 6,  threads: 12, baseClock: 3.9, boostClock: 4.9, passmark: 19200 },
 { name: "Intel Core i7-12700K",   brand: "Intel", memoryType: "DDR4", cores: 12, threads: 20, baseClock: 3.6, boostClock: 5.0, passmark: 34500 },
 { name: "Intel Core i9-12900K",   brand: "Intel", memoryType: "DDR4", cores: 16, threads: 24, baseClock: 3.2, boostClock: 5.2, passmark: 40200 },
 { name: "Intel Core i5-12600K",   brand: "Intel", memoryType: "DDR4", cores: 10, threads: 16, baseClock: 3.7, boostClock: 4.9, passmark: 27800 },
 { name: "Intel Core i7-13700K",   brand: "Intel", memoryType: "DDR4", cores: 16, threads: 24, baseClock: 3.4, boostClock: 5.4, passmark: 42600 },
 { name: "Intel Core i9-13900K",   brand: "Intel", memoryType: "DDR4", cores: 24, threads: 32, baseClock: 3.0, boostClock: 5.8, passmark: 60900 },
 { name: "Intel Core i5-13600K",   brand: "Intel", memoryType: "DDR4", cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.1, passmark: 35800 },
 { name: "Intel Core i9-14900K",   brand: "Intel", memoryType: "DDR4", cores: 24, threads: 32, baseClock: 3.2, boostClock: 6.0, passmark: 62500 },
 { name: "Intel Core i7-14700K",   brand: "Intel", memoryType: "DDR4", cores: 20, threads: 28, baseClock: 3.4, boostClock: 5.6, passmark: 48700 },
 { name: "Intel Core i5-14600K",   brand: "Intel", memoryType: "DDR4", cores: 14, threads: 20, baseClock: 3.5, boostClock: 5.3, passmark: 36900 },
];

const referenceProcessor = processors.find(p => p.name === "AMD Ryzen 7 5700X");

if (!referenceProcessor) {
 console.error("Эталонный процессор AMD Ryzen 7 5700X не найден в списке.");
} else {

const betterIntelDDR4 = processors.filter(
 p => p.brand === "Intel" &&
      p.memoryType === "DDR4" &&
      p.passmark > referenceProcessor.passmark
);

betterIntelDDR4.sort((a, b) => b.passmark - a.passmark);

console.log(`Эталон: ${referenceProcessor.name} — PassMark: ${referenceProcessor.passmark}`);
console.log("Процессоры Intel на DDR4, мощнее чем Ryzen 7 5700X:");
betterIntelDDR4.forEach(p => {
 console.log(
  `${p.name} | Ядра: ${p.cores}/${p.threads} | ` +
  `Частота: ${p.baseClock}/${p.boostClock} ГГц | PassMark: ${p.passmark}`
 );
});

// Экспортируем данные для использования в HTML
if (typeof window !== "undefined") {
 window.referenceProcessor = referenceProcessor;
 window.betterIntelDDR4 = betterIntelDDR4;
}

}