const OPENAI_API_KEY = 'your-api-key';

async function getEmbeddings(input) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };

    const data = {
        "model": "text-embedding-ada-002",
        "input": input
    };

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch('https://api.openai.com/v1/embeddings', requestOptions);
        const data = await response.json();
        const vectList = data.data[0].embedding;

        return vectList; // 返回 vectList
    } catch (error) {
        console.error(error);
        throw error; // 抛出错误
    }
}

async function calculateSimilarity() {
    // document.getElementById("result").innerHTML = "⌛️"
    document.getElementById("result").innerHTML = "<img src='./assets/loading.png' alt='loading' class='inline-image'>"

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    // embeddings
    var embedding1 = await getEmbeddings(input1)
    var embedding2 = await getEmbeddings(input2)
    console.log(embedding1)
    console.log(embedding2)

    var similarity = cosineSimilarity(embedding1, embedding2);

    document.getElementById("result").innerHTML = "Similarity: " + similarity;
}

// 计算两个向量的点积
function dotProduct(vector1, vector2) {
    var dot = 0;
    for (var i = 0; i < vector1.length; i++) {
        dot += vector1[i] * vector2[i];
    }
    return dot;
}

// 计算向量的范数（Euclidean norm）
function norm(vector) {
    var sumOfSquares = 0;
    for (var i = 0; i < vector.length; i++) {
        sumOfSquares += vector[i] * vector[i];
    }
    return Math.sqrt(sumOfSquares);
}

// 计算余弦相似度
function cosineSimilarity(embedding1, embedding2) {
    var dot = dotProduct(embedding1, embedding2);
    console.log("Dot Product:\n" + dot)

    var norm1 = norm(embedding1);
    var norm2 = norm(embedding2);
    console.log("Euclidean Norm:\n" + norm1)
    console.log("Euclidean Norm:\n" + norm2)

    return dot / (norm1 * norm2);
}
