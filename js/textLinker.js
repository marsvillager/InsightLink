function calculateSimilarity() {
    console.log("rgerger")

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    console.log(input1)
    console.log(input2)

    // 这里是调用外部相似度计算的逻辑
    var similarity = calculateSimilarityExternally(input1, input2);

    document.getElementById("result").innerHTML = "Similarity: " + similarity;
}

function calculateSimilarityExternally(text1, text2) {
    // 这里是调用外部JavaScript文件进行相似度计算的代码
    // 可以根据你选择的相似度计算方法和第三方库进行实现
    // 使用相关函数和参数来计算并返回相似度结果
    // 这个函数要确保可以在 text-linker.html 中正确被调用

    // 假设这是一个示例结果，可以根据实际情况进行修改
    return 0.75;
}
