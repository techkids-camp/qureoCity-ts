// 将棋のゲーム作成
function Start () {
    playerX = player.position().getValue(0)
    playerY = player.position().getValue(1)
    playerZ = player.position().getValue(2)
    // 将棋の盤の作成
    blocks.fill(
        Block.PlanksBirch,
        positions.createWorld(playerX - 4, playerY - 1, playerZ),
        positions.createWorld(playerX + 3, playerY - 1, playerZ + 8),
        FillOperation.Replace
    )
}
let playerX
let playerY
let playerZ
