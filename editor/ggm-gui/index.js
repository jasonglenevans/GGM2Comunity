window.shared = false;
function loadDefaultGame() {
    setTimeout(() => {
		if (!(window.IsWeb)) { //check if its website community before loading
			readFileAsResource(
				"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDguNDgzMzEiIGhlaWdodD0iMTA3LjQyMzU4IiB2aWV3Qm94PSIwLDAsMTA4LjQ4MzMxLDEwNy40MjM1OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS43NjgzLC0xMjUuMTA4MjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM5NDk0OTQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjE1LjQ1NjI0LDE5Ny4yMjYxOGMwLDAgLTQuNzc2MDcsLTMuODQ0MjQgLTcuMjAxNjcsLTExLjA5ODY1Yy0xLjgwMjI5LC01LjM5MDIzIC0xLjU2MjE3LC0xMy41MTQzMyAtMS4wNDU2OSwtMTguODM0NzdjMC4zNTM4MSwtMy42NDQ2OSAwLjE3NTc4LC0zLjkzOTYzIDAuOTY2NDgsLTYuNTk2NzJjMS42ODIyOCwtNS42NTMxNyA0LjY1NzY0LC0yLjM5MzQgNy43Nzg4NiwtMi45ODk0YzEuNjI1MzgsLTAuMzEwMzcgNi42Mjc4LDIuOTQwNSA2LjYyNzgsMi45NDA1YzAsMCAtMy41MDExNiwwLjE2NDQgNy4yNDAwMSwwLjIzMzI1YzAuNDM4ODcsMC4wMDI4MSAyMS41NDA5MSwtMC40NzA3OCAyMS45NzU3MSwtMC40NzA3OGM0LjUwMzIxLDAgMTcuMzM5NDEsLTIuMTM3NzQgMTcuMzM5NDEsLTIuMTM3NzRjMCwwIDIuMzA2Nyw1LjAzODk0IDQuNDgyNjIsOS43MTM4NWMwLjgxMTQzLDEuNzQzMzQgMS42MDQ2OCwzLjIzMTU2IDIuMjUzMzMsNC42ODQxNmMxLjgwMDgzLDQuMDMyOCAxLjU2NTEsNC4yMTg1MSAyLjY5Njc5LDYuNjI3NTljMy4xNDgyNyw2LjcwMTg1IC0zLjQ5NDU5LDE4LjY0MTI3IC0zLjQ5NDU5LDE4LjY0MTI3eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjM0LjYzNTMzLDE2MS41MzUyM2wtMC4yMzc1MywxLjY2MjY4YzAsMCA1LjU5NDc2LDAuNjQyMDIgOC4xMzk3MywwLjkzNDA3YzIuMjQ3NzIsMC4yNTc5MyA2LjM0OTM3LDAuNzI4NjEgNi4zNDkzNywwLjcyODYxbDMuMzI1MzcsLTQuMjc1NDdsLTQuMDM3OTUsNC45ODgwNWMwLDAgLTQuNzc2MTYsOC43NzY2IC01LjEzNzQsMTMuMDcxMzZjLTAuMzUxMDUsOS4zNzM1NCA4Ljc5OTY3LDE4LjM0Mzk0IDguNzk5NjcsMTguMzQzOTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjIuNTIxNSwxNjguMTg1OThjMCwwIDYuMjM5NzMsMC4zNTA0IDguMDA5MTEsMi43MjI5OGMwLjk0ODk3LDEuMjcyNDggMy4zNzEwMiw4LjA2NzUyIDIuNTg4NzEsMTMuNDUwMTJjLTAuMjg0MDIsMS45NTQxOSAtMy45Nzc1NCwxMC4wODg0IC04LjQ2NzA5LDEwLjYwNjY5Yy0xLjY1NTU5LDAuMTkxMTMgLTcuMzM0MzEsLTEuMjI1ODYgLTEwLjc2MDg5LC00LjgzOTk1Yy0yLjc3NjkyLC0yLjkyODg3IC0zLjU4NTU3LC03LjcwODM0IC0zLjQ1MzM4LC0xMS4wMTI0MmMwLjEzMzI3LC0zLjMzMTA3IDMuMDUzNTgsLTYuNzc0ODQgNi4zMDExNiwtOC43NzQxOGMyLjY2NDU5LC0xLjY0MDQzIDUuNzgyMzgsLTIuMTUzMjQgNS43ODIzOCwtMi4xNTMyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI3Mi42Mzk1MSwxODEuMjQ5OTJjMCw2LjQyNzkyIC00Ljk0NSwxMi44MjY0MiAtMTEuMDQ0OTcsMTIuODI2NDJjLTYuMDk5OTcsMCAtMTEuNzU3NTUsLTYuMTYwOTYgLTExLjc1NzU1LC0xMi41ODg4OWMwLC02LjQyNzkzIDMuOTk0OSwtMTEuMTYzNzMgMTAuMDk0ODYsLTExLjE2MzczYzEuNDM4ODgsMCA0LjIzODY1LDEuMDAyNTEgNS40OTkyNSwxLjUyOTk3YzQuMDgzNjEsMS43MDg2MyA3LjIwODQsNC40ODQ1NSA3LjIwODQsOS4zOTYyNHoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMjkzLjI1MTYxLDE1Ni43OTk3OWMwLDAgLTcuNzkxMyw0LjU4NzAyIC0xMS42MDM0NSw1LjQzODg1Yy0yLjE3NDgyLDAuNDg1OTcgLTcuNDAxOTEsMC42NDM3NSAtOS44NjA3MSwtMC4zNTA0Yy0wLjM2NDUzLC0wLjE0NzM5IC0xLjM0Nzg3LC0xLjQ3NDk4IC0wLjI0MzA4LC0yLjg4MTQ3YzAuOTUxNTMsLTEuMjExNCAzLjc2NDY2LC0yLjQ4OTEyIDYuMjAwMTYsLTMuMDMwNzZjNS42NjI2LC0xLjI1OTMgMTUuMjczMDgsMC43ODMwMiAxNS4yNzMwOCwwLjc4MzAyIiBmaWxsPSIjZDhkOGQ4Ii8+PHBhdGggZD0iTTI3NS43MjEwNywxNTYuMzk3NThsMC42MTg3NSw2LjEzNTQyIiBmaWxsPSJub25lIi8+PC9nPjxwYXRoIGQ9Ik0yMTYuMTI2ODksMjAyLjQ5MDIyYzAsMCAtMC44NDA4OSwtOS4xNzE4MSAtMS4xNDkzNCwtMTIuNTM2MDJjLTAuMjA3ODMsLTIuMjY2NzIgLTAuNTIxNzcsLTUuNjkwOTMgLTAuNTIxNzcsLTUuNjkwOTNjMCwwIDEuMDAzNjQsLTQuMjQ3NjkgMS40NzkxLC00LjQ2NjE0YzEuMDg4OTcsLTAuNTAwMyAyLjk0ODc2LC0yLjkyNjQ0IDUuNTMzMTEsLTIuNjMxMzFjMi4wNjM4MiwwLjIzNTcgNS4yNzExOSwyLjQyNDExIDYuMjU1MDgsMi45NTIzN2MxLjczMzA3LDAuOTMwNTIgMi4wNzU0NSw2LjQzMTE2IDIuMDc1NDUsNi40MzExNmwtMC4zODg0OCwxNS4yNDMwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjOTQ5NDk0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ij48Zz48cGF0aCBkPSJNMjYzLjY2NDY5LDIwNS41MzE1NGwtMi45MDQyMywtNS4xNzk0OWw0LjM1MDc3LC0yLjQzOTU2bDIuOTA0MjMsNS4xNzk0OXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjY4Ljg0MzQ1LDIxMC4yNjQzNWw2Ljk2OTgzLDguMTkwMjNsLTAuNzE1MSw5LjcxNTE5bC0yLjk2MzQzLDIuMjMyNTRsLTEuNDcwMDYsMC44NzkwMmwtOS45ODczOSwtMC4wMTUwM2wtMy43Mzc1NywtMS4zNzI2OGwxLjUyODM0LC0yLjA2NTIzbDEuNDcwMDYsLTAuODc5MDJsMS45OTExNiwtMS44MDQ2OGwzLjM1NjMzLC0wLjU0ODU1bC0zLjY3OTI5LC0yLjU1ODg4bC0xLjIwMiwtNC41Nzc0OWwtMS45MTM3MiwtNC42MTI0NnoiIGZpbGw9IiM5NDk0OTQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNTguNDkwNjIsMjEyLjg0NzNsLTAuNjE4NDgsLTEuOTMyODlsMi42MTcxNSwtNC44NjU0OWwzLjUwNzg0LC0zLjYzMjY3bDMuNTU4NiwwLjE3NDgzbDIuMjY3NSwyLjI1MTcxbC0wLjY5NTkyLDQuNDg0MjZ6IiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjY0LjUxNDg1LDIxMS4yNDA3NmwtMy40MDcwOSwtMy4yNTg5NGwwLjM2NTQ1LC0yLjU5Nzk5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCI+PHBhdGggZD0iTTI2Ny4wMzAzOSwyMjQuOTYxOThsLTQuODIwNDMsLTMuNzU2MjlsLTIuMTgzMDcsLTcuODY1NThsNy40ODA1NiwtMi4yNjgwOGw4LjA4MzgzLDguNjk3MzRsLTAuODI3NDcsNS43Mzc5NXoiIGZpbGw9IiM4YzYyMDAiIHN0cm9rZS13aWR0aD0iTmFOIi8+PHBhdGggZD0iTTI2MC45NDI5MiwyMTYuMDkwNjZsLTEuMjI2NDMsLTIuODkyMjNsNy4xOTYzNiwtMi40Mjg4MWw0Ljg4Mzg3LDIuMzIxMDF6IiBmaWxsPSIjOGMwMDgxIiBzdHJva2Utd2lkdGg9Ik5hTiIvPjxwYXRoIGQ9Ik0yNTcuNjk5NTgsMjI5LjM5Mzc1bDEuNDEzNjMsLTIuMzUyMDZsMC45NjMyOSwtMC45NTkzN2wzLjQyNTgsLTAuNTMxNzhsMy4xMzE5OCwtMS4xOTM1MWw3LjMxNTkyLDAuMzI4NDJsLTEuMzk5NjYsNS41NjMwMmwtMTEuMzA0NzgsMC43MjY1OXoiIGZpbGw9IiM4YzAwODEiIHN0cm9rZS13aWR0aD0iMCIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMjY1LjYzMDA1LDIxNS4xMTU3M2MwLjM5ODE2LC0wLjI3NTkzIDAuNzE3MzIsLTAuNDYyNjEgMS4yODAzOCwtMC41MjA0OGMwLjQzMzU0LC0wLjAwOTUzIDEuMDQwMTEsMC4wMDIyOCAxLjQxODIsMC4yODQxNGMwLjI2ODQsMC4yMDAxIDAuMzI2MTgsMC42MjczNyAwLjI1ODE0LDEuMDkwNjFjLTAuODc1OTEsMC40MzkzNiAtMS43MTQ0LDAuOTQ0NjMgLTIuNTY0ODQsMS40MzU0YzAsMCAtMC4xMjUzOSwwLjA3MjM2IC0wLjEwNDc4LDAuMjAwODVjLTEuMDYyMzksLTAuMzIzOTUgLTEuNTIyOTYsLTEuNDI1MjYgLTAuNjczNzEsLTIuNDU3ODZjMCwwIDAuMTc2MDIsLTAuMjA5NTUgMC4zODU1OCwtMC4wMzM1NGMwLjAwMDM1LDAuMDAwMjkgMC4wMDA3LDAuMDAwNTkgMC4wMDEwNSwwLjAwMDg3ek0yNjcuMjk5MjcsMjE1LjQ0Mzg3YzAuMDk4MTcsLTAuMDU2NjYgMC4xMzE4NSwtMC4xODIxOSAwLjA3NTE5LC0wLjI4MDM3Yy0wLjA1NjY2LC0wLjA5ODE3IC0wLjE4MjE4LC0wLjEzMTg1IC0wLjI4MDM3LC0wLjA3NTE5Yy0wLjA5ODE3LDAuMDU2NjYgLTAuMTMxODUsMC4xODIxOSAtMC4wNzUxOCwwLjI4MDM4YzAuMDU2NjYsMC4wOTgxNyAwLjE4MjE5LDAuMTMxODUgMC4yODAzNywwLjA3NTE5ek0yNjUuODMwMzIsMjE2LjI1MjA4YzAuMDk4MTcsLTAuMDU2NjYgMC4xMzE4NSwtMC4xODIxOSAwLjA3NTE5LC0wLjI4MDM3Yy0wLjA1NjY2LC0wLjA5ODE3IC0wLjE4MjE5LC0wLjEzMTg1IC0wLjI4MDM4LC0wLjA3NTE4Yy0wLjA5ODE3LDAuMDU2NjYgLTAuMTMxODUsMC4xODIxOCAtMC4wNzUxOCwwLjI4MDM3YzAuMDU2NjYsMC4wOTgxNyAwLjE4MjE4LDAuMTMxODYgMC4yODAzNywwLjA3NTJ6Ii8+PHBhdGggZD0iTTI2NC45MzIyNywyMTguMDUxNTljMC4wNTE0OSwtMC4wMjk3MyAwLjA5OTYsLTAuMDQ2NzQgMC4xNDQxMSwtMC4wNTQyOWMwLjAyNTA0LC0wLjExMjk1IDAuMTA1MzQsLTAuMjg4MzYgMC4zNjI1MSwtMC4yOTI1NWMwLjM4MDAyLC0wLjAwNjE5IDAuMzg2MjEsMC4zNzM4NCAwLjM4NjIxLDAuMzczODRjMC4wMDIxNCwwLjIyMzkzIC0wLjAxMTMyLDAuNDUwMzkgLTAuMDQ4NTcsMC42NzE5N2MwLjA1NTU5LC0wLjAwNjUyIDAuMDk1NjQsLTAuMDAxNyAwLjA5NTY0LC0wLjAwMTdjMC42OTk3NiwwLjA4NjkyIDEuMzk5OTUsMC4xMDA4OCAyLjA5OTgyLDAuMTQ5MzljMC4zNTkxNCwtMC41OTA4NiAwLjczODgzLC0xLjE2Nzk5IDEuMTIzODQsLTEuNzQ5NjVjLTAuMTYyOTksLTAuMDk3NjYgLTAuMzAyMDUsLTAuMTkwNjUgLTAuMzk1NzcsLTAuMjUyMjZjMCwwIC0wLjE4MjI0LC0wLjEyMDM3IC0wLjE3OTE3LC0wLjMxNjc3Yy0wLjAxMjI5LC0wLjAxODMyIC0wLjAyMzQ2LC0wLjAzODgxIC0wLjAzMzIxLC0wLjA2MTc1Yy0wLjE3OTk5LDAuNTI5ODcgLTAuNDgwNiwxLjAwNDE5IC0wLjc3MjgxLDEuMTMyMDdjLTAuMDk4NDQsMC4wNDMwOCAtMS4wMTA4NSwwLjAyODIzIC0xLjExODczLDAuMDI3MjJjLTAuMDcwMDksLTAuMDAwNjYgLTAuMTM4NywtMC4wMDQyMSAtMC4yMDU3NSwtMC4wMTA0OWMwLjY5MjQyLC0wLjQwMTEyIDEuMzc4MzIsLTAuODA5NzUgMi4wODUxNywtMS4xODA3N2MtMC4wMDYyMiwtMC4wMTg1OSAtMC4wMTE2MSwtMC4wMzg1NSAtMC4wMTU5OCwtMC4wNmMtMC4wNzYxMywtMC4zNzIzNyAwLjI5NjI1LC0wLjQ0ODUgMC4yOTYyNSwtMC40NDg1bDAuMjYwMDcsLTAuMDM2MDJjMC40MTM0MSwwLjA0MDU0IDIuNTMyMzMsMC41NTIyOSAxLjYxNjA0LDEuNDg3NjFjLTAuMTk3MzYsMC4yMDE0NSAtMC41MTY2NCwwLjE3NDE2IC0wLjg0NTU1LDAuMDU4NTZjLTAuMzIyMjIsMC40OTgwNCAtMC42MzI3NCwwLjk5NjQ3IC0wLjkzNjU1LDEuNDk3NTljMC4wODk3MSwwLjAxMjM0IDAuMTc5NDIsMC4wMjU5OCAwLjI2OTEyLDAuMDQxMTZjMC40ODg1MiwwLjA4MjY4IDAuOTQ1NjMsMC4yNTY1MSAxLjQyMzE0LDAuMzY3MTRjMC4xNTQ1MywtMC4xODA4NyAwLjMyNjQ2LC0wLjM3NDI1IDAuNTA5NTEsLTAuNjE1NzNjMCwwIDAuMjMwODEsLTAuMzAxOTYgMC41MzI3NywtMC4wNzExNmMwLjAyOTk4LDAuMDIyOSAwLjA1NDcxLDAuMDQ2NTMgMC4wNzQ5NCwwLjA3MDQ5YzAuMDMwODEsMC4wMDE1MiAwLjA2NDAzLDAuMDA2NyAwLjA5OTc4LDAuMDE2MjhjMC4zNjcxLDAuMDk4NDUgMC4yNjg2NiwwLjQ2NTU1IDAuMjY4NjYsMC40NjU1NWwtMC4wNTI0MiwwLjE4MDdjLTAuMzUwOTgsMC44MTk5OCAtMC42NTY2NiwxLjI0NjQ0IC0xLjE0MTc5LDEuNjU4MjVsMC4wMjI5NiwwLjAxOTY2bC0wLjQ4ODY1LDAuNTcwNjhjLTAuMDI4MzUsMC4wMzQ3MiAtMC4wNjMzNSwwLjA2NDk3IC0wLjEwNDQ4LDAuMDg4NzFjLTAuMTgxODEsMC4xMDQ5MyAtMC40MTQyNCwwLjA0MjU5IC0wLjUxOTE2LC0wLjEzOTI0Yy0wLjA1MjQ1LC0wLjA5MDkgLTAuMDYzMSwtMC4xOTQ0OCAtMC4wMzc5MSwtMC4yODg0bDAuMTE2NTksLTAuNDM0NzVjMC4wNDQ2MiwtMC4zNjQwMyAwLjEzMTM0LC0wLjYzNDg5IDAuMjUwNzYsLTAuODY2MjdjLTAuMzU2NTEsLTAuMDk5MTggLTAuNzA5LC0wLjIxIC0xLjA3ODUzLC0wLjI3MTkyYy0wLjE5MTE0LC0wLjAzMjAyIC0wLjM4MTkyLC0wLjA1NzI4IC0wLjU3MjQ5LC0wLjA3Nzg2Yy0wLjMzMzM1LDAuNTYyOTQgLTAuNjYxMjYsMS4xMzA1NyAtMC45OTA2NCwxLjcwNjE2Yy0wLjA3MDc5LDAuMTIzNzIgLTAuNDU0OTQsMC44MzI5NCAtMC43NDI4MSwxLjMzMjAxYzAuMDM5ODEsMC4wMDk0OSAwLjA4MTQyLDAuMDE3IDAuMTI1MTQsMC4wMjEzNGwwLjMwNzQsMC4yMjg1MmMwLDAgMC4xODk5NiwwLjMyOTIgLTAuMTM5MjQsMC41MTkxNmMtMC4xNzk0NSwwLjEwMzU2IC0wLjMxNzU0LDAuMDUyODMgLTAuNDA2MDIsLTAuMDE0NzRjLTAuNDc2NTQsLTAuMDc3MTIgLTAuNzE2MzcsLTAuMTg5MDYgLTAuOTIzMzYsLTAuNDQ3MTJsLTAuMDQ4NzUsMC4wNDcxMWwtMC4yNjYzNCwtMC4yNzU1N2MtMC4wMjM1NywtMC4wMjMzMyAtMC4wNDQ0NCwtMC4wNTAxOCAtMC4wNjE4MSwtMC4wODAzYy0wLjEwNDkzLC0wLjE4MTgxIC0wLjA0MjU5LC0wLjQxNDIzIDAuMTM5MjEsLTAuNTE5MTZjMC4wNzI3NSwtMC4wNDE5NyAwLjE1MzU5LC0wLjA1NzE4IDAuMjMxMTMsLTAuMDQ4NjdsMC40MDIzNywwLjAzOTFsLTAuMDA1NDUsMC4wNTYxNGwwLjEzMzg5LC0wLjAyMDE0YzAuMDA0NjgsMC4wNTc1MSAwLjAxNTcyLDAuMTkzMTcgMC4wMjAxNiwwLjI0NzY2Yy0wLjA2MTQxLC0wLjc5NjQ4IDAuNTg2NzcsLTEuMzk4NDcgMC45NDMwNiwtMi4xMDVjMC4xMjkzMSwtMC4yNTY0MyAwLjI2NDE1LC0wLjUwODA0IDAuNDAzNSwtMC43NTYwOWMtMC41ODYyOCwtMC4wMzQ2MiAtMS4xNzI2LC0wLjA1NTc4IC0xLjc2MzAyLC0wLjEyNTI0YzAsMCAtMC4wMDM3NSwtMC4wMDA0NiAtMC4wMTA0MiwtMC4wMDE2NWMtMC4wMjA0OCwwLjEwMzkgLTAuMDg0MDMsMC4xOTg3NyAtMC4xODI5NywwLjI1NTg1Yy0wLjE4MTgxLDAuMTA0OTMgLTAuNDE0MjQsMC4wNDI1OSAtMC41MTkxNSwtMC4xMzkyM2MtMC4wMDcyNSwtMC4wMTI1NiAtMC4wMTM3LC0wLjAyNTM2IC0wLjAxOTM3LC0wLjAzODM2bC0wLjE5NDIxLC0wLjQzMDU3bDAuMTAzNCwtMC4wNDY2NGwtMC4wMDIwOSwtMC4wMTI1NGwwLjAxOTAyLC0wLjAwMzE2Yy0wLjEwMDk4LC0wLjE5MDE2IC0wLjE3MDI0LC0wLjM5MTg1IC0wLjE4NDk5LC0wLjYwMTQ1bDAuMDAyNywwLjA4NDk3YzAsMCAtMC4xODk5NywtMC4zMjkxOSAwLjEzOTIzLC0wLjUxOTE1eiIvPjwvZz48L2c+PC9nPjxwYXRoIGQ9Ik0yNTUuMDQ4MjEsMTc4LjI0MTEzbDIuNjYzNzcsLTIuMDQ2NDZsNS4zMzU2LC0wLjQ5ODUybDQuNDAxNTksMi45NzI0M2wwLjc4NDM0LDYuODEwNGwtMy40MTkzNCwxNS4xMjMxbC0xLjUwNTY3LDAuNTIxMzRsLTExLjAzODIxLC0xLjY4NjJsMS4wNDQ3NywtMTcuMTExMjF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzk0OTQ5NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iPjxnPjxwYXRoIGQ9Ik0yMTIuMzM1NzUsMjA2Ljg0MzdsMi41MDc2LC01LjI3ODc5bDQuNjA0NywxLjkwOTM4bC0yLjUwNzU5LDUuMjc4Nzd6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTk3Ljk5OTA5LDIzMS43NjM3NWwxLjg1NDcxLC00LjIxMzc5YzAsMCAyLjcxODMxLC0wLjg2MzM4IDQuMjM5OTUsLTEuMDg3MTVjMC41NDAwNiwtMC4wNzk0MSAzLjI1OTU4LDAuNjQ4MiAzLjIyMzA1LC0wLjIzNDczYy0wLjAzMjM0LC0wLjc4MTk4IC0yLjg1NDYyLC0zLjE4NDc2IC0yLjAyMTIyLC0zLjI2OGMwLjgwMTc3LC0wLjA4MDA5IDYuNTg1MDYsLTkuODkwODMgNy43MDczNywtOS42MjQ4M2MyLjg5MjkzLDAuNjg1NjYgMTAuMjQ0MTksMS43MzM0NCAxMC4yNDQxOSwxLjczMzQ0bC04LjExNzU4LDE1LjMzNTEyYzAsMCAtMTMuMjM3MDMsMi4yODAxOCAtMTUuOTkwNDcsMi40OTg3NWMtMS4wNTA3NiwwLjA4MzQxIC0xLjEzOTk4LC0xLjEzODg1IC0xLjEzOTk4LC0xLjEzODg1eiIgZmlsbD0iIzk0OTQ5NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjEyLjAxNjg5LDIxMy4yNDI3NWwtMC42ODAzMywtMy4xNDU1NGwxLjIxODI5LC0yLjQ4MDM2bDIuMzQ3MDQsLTEuMTYxMTlsMy4wMjA1MiwwLjEyM2w2Ljg3MjAxLDcuMzM1MjF6IiBmaWxsPSIjMjQyNDI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMTkuODkyNTksMjEwLjIzbC0wLjQzMzQ4LDIuMTUwMThsLTEuNzg2MzcsMS4xODk5OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwNy4xNTQxNywyMjUuNjY1MDRsMi42Njg5LDUuMTcxMzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjA2Ljk4MTA4LDIyMy4yMTI0OGw0LjM3MDE3LC02Ljg3ODU1bDAuOTY5OTMsLTMuMDc3ODhsOS43ODcwNiwyLjk5MjA2bC04LjU0MDU1LDEzLjcyMTA2eiIgZmlsbD0iIzhjNjIwMCIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMjExLjM1MjMsMjE2Ljg5NzIxbDAuOTY2OTEsLTMuMjY4ODhsOS41MjgsMi40NzQ2MWwtMS44NDc1NSwzLjM5ODM2eiIgZmlsbD0iIzhjMDA4MSIgc3Ryb2tlLXdpZHRoPSJOYU4iLz48cGF0aCBkPSJNMTk5LjAwOTA1LDIzMi4yMDE4N2wwLjk4Mzg5LC0yLjUwNTI0bDAuNzg3NTMsLTEuMDk3MTVsMy4zMjQ2NCwtMS4xNzEzNmwzLjEyNjQ1LC0wLjE4NzJsLTAuMzY4NTksLTQuMTI0MDJsMS45OTkwOCwtMi4yNDU5N2w1LjEzNDI5LDkuMjQ5MDN6IiBmaWxsPSIjOGMwMDgxIiBzdHJva2Utd2lkdGg9IjAiLz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTIxNi41MTg3MywyMTguMDY1MTVjMC40NDUxOCwwLjE4OTYgMC43NzE3NSwwLjM1ODk5IDEuMTA5NTYsMC43OTQ4MmMwLjIyOTM1LDAuMzUzMjUgMC41MjgxOCwwLjg2MDE5IDAuNDczNDYsMS4zMTQ3MWMtMC4wMzg4NCwwLjMyMjY2IC0wLjM4NDUsMC41ODU5OSAtMC44MjU4NSwwLjc2MzU0Yy0wLjgzMjE4LC0wLjUwMTcyIC0xLjcwMzE1LC0wLjkzOTI1IC0yLjU2NzUxLC0xLjM5Mzk4YzAsMCAtMC4xMjc0NCwtMC4wNjcwNSAtMC4yMjk3NCwwLjAxNDhjLTAuMjU3MTUsLTEuMDQwOSAwLjQ3NDkzLC0xLjk3NzA1IDEuODE0MzIsLTEuNzk2NzRjMCwwIDAuMjczNzEsMC4wMzk2MyAwLjIyNiwwLjMwMTU0Yy0wLjAwMDA5LDAuMDAwNDUgLTAuMDAwMTUsMC4wMDA4OCAtMC4wMDAyMywwLjAwMTMxek0yMTcuMDgxNTIsMjE5LjYwOTM3YzAuMDk5OCwwLjA1MjUxIDAuMjI3MTMsMC4wMTY5NiAwLjI4NDQ2LC0wLjA3OTM5YzAuMDU3MzIsLTAuMDk2MzUgMC4wMjI4OSwtMC4yMTcgLTAuMDc2OSwtMC4yNjk1Yy0wLjA5OTgsLTAuMDUyNTEgLTAuMjI3MTQsLTAuMDE2OTUgLTAuMjg0NDYsMC4wNzkzOWMtMC4wNTczMiwwLjA5NjM1IC0wLjAyMjg5LDAuMjE3IDAuMDc2OSwwLjI2OTUxek0yMTUuNjIzMjQsMjE4LjgwNGMwLjA5OTgsMC4wNTI1MSAwLjIyNzEzLDAuMDE2OTYgMC4yODQ0NiwtMC4wNzkzOWMwLjA1NzMyLC0wLjA5NjM1IDAuMDIyODcsLTAuMjE3IC0wLjA3NjksLTAuMjY5NWMtMC4wOTk4LC0wLjA1MjUxIC0wLjIyNzE0LC0wLjAxNjk1IC0wLjI4NDQ2LDAuMDc5MzljLTAuMDU3MzIsMC4wOTYzNSAtMC4wMjI4OCwwLjIxNzAxIDAuMDc2OSwwLjI2OTV6Ii8+PHBhdGggZD0iTTIxMy41ODU3MSwyMTguOTcwMzhjMC4wNTIzNiwwLjAyNzU0IDAuMDkxODEsMC4wNTg2OCAwLjEyMTEsMC4wOTE2MWMwLjExMTk0LC0wLjAzNjMyIDAuMzA2ODQsLTAuMDU4NTIgMC40NDE2LDAuMTUxNzhjMC4xOTkxNSwwLjMxMDc1IC0wLjEzMTMzLDAuNTA3NjIgLTAuMTMxMzMsMC41MDc2MmMtMC4xOTU0OSwwLjExNDc2IC0wLjQwMTE2LDAuMjE3OTUgLTAuNjE0NjYsMC4yOTljMC4wMzQwNywwLjA0MjYyIDAuMDUwMjQsMC4wNzgxNCAwLjA1MDI0LDAuMDc4MTRjMC4yODAzNywwLjYyMTggMC42MjUwMywxLjIwNzE0IDAuOTM5MjEsMS44MDk2NGMwLjcwMTc5LC0wLjAwMTU1IDEuNDAxOTgsMC4wMjA4IDIuMTA4ODYsMC4wNDUyNmMwLjAwMjY1LC0wLjE4Mzg4IDAuMDEzNDEsLTAuMzQ1NjcgMC4wMTk3MywtMC40NTQxNmMwLDAgMC4wMTI3NywtMC4yMTEyNiAwLjE4Njc2LC0wLjMwNzg0YzAuMDA5ODIsLTAuMDE5MzggMC4wMjIxMSwtMC4wMzg5NyAwLjAzNzI3LC0wLjA1ODU4Yy0wLjU1NjkzLDAuMTE4NzMgLTEuMTI2NTYsMC4xMDk4IC0xLjM4Nzc2LC0wLjA2N2MtMC4wODgsLTAuMDU5NTYgLTAuNTQwMDMsLTAuODIwNjEgLTAuNTk0MTQsLTAuOTEwMjNjLTAuMDM1MTYsLTAuMDU4MjEgLTAuMDY3MDEsLTAuMTE2NjggLTAuMDk1NjYsLTAuMTc1MjNjMC43MDUwNywwLjM2OTQ3IDEuNDEzNDQsMC43Mjk3MyAyLjA5OTQ1LDEuMTI2M2MwLjAxMzE1LC0wLjAxNDUxIDAuMDI3OTIsLTAuMDI5MDIgMC4wNDQ1MiwtMC4wNDM0OGMwLjI4ODA5LC0wLjI1MDc4IDAuNTQ0NzQsMC4wMTgzNiAwLjU0NDc0LDAuMDE4MzZsMC4xNjQxOCwwLjE5NjYyYzAuMTc1MTQsMC4zNjE4OCAwLjgwNTk4LDIuMzcwMTUgLTAuNDgyMjEsMi4wODU0Yy0wLjI3NzQ2LC0wLjA2MTM0IC0wLjQxNjI0LC0wLjMzODgzIC0wLjQ4MjQxLC0wLjY2ODc4Yy0wLjYwMTQ2LC0wLjAxNDc5IC0xLjE5NzMxLC0wLjAxOTcyIC0xLjc5MjEsLTAuMDE3NzhjMC4wMzQ5MSwwLjA4MDMzIDAuMDY4NjQsMC4xNjEzIDAuMTAxMDMsMC4yNDMwM2MwLjE3NjQ1LDAuNDQ1MTcgMC4yNTY4MSwwLjkxMDQ1IDAuNDAzMSwxLjM2MDY2YzAuMjM3NTYsMC4wMzYzNyAwLjQ5NDk1LDAuMDgwNzcgMC44MDAyNywwLjExMDA5YzAsMCAwLjM4Mjc0LDAuMDM4MjUgMC4zMzQwNCwwLjQwNDExYy0wLjAwNDg0LDAuMDM2MzIgLTAuMDEyOTcsMC4wNjg2NyAtMC4wMjM2OCwwLjA5NzQ2YzAuMDE0MzcsMC4wMjYyMSAwLjAyNjc1LDAuMDU2MjYgMC4wMzY1NiwwLjA5MDY0YzAuMTAwNywwLjM1Mjg4IC0wLjI3MTc2LDAuNDU2ODIgLTAuMjcxNzYsMC40NTY4MmwtMC4xODUzNiwwLjA0Nzg5Yy0wLjg5ODc2LDAuMTIzOSAtMS40Mjg5NSwwLjA4NjY2IC0yLjAzNzc4LC0wLjEwNjIybC0wLjAwNTU1LDAuMDI4ODlsLTAuNzUwMDgsLTAuMTE1NjFjLTAuMDQ0OTMsLTAuMDA1ODkgLTAuMDg5MzMsLTAuMDE5NTQgLTAuMTMxMTMsLTAuMDQxNTNjLTAuMTg0NzcsLTAuMDk3MjEgLTAuMjQ4NTIsLTAuMzIwNjQgLTAuMTQyNCwtMC40OTkwNGMwLjA1MzA3LC0wLjA4OTE5IDAuMTM4NTQsLTAuMTUwMjYgMC4yMzM4NSwtMC4xNzY4NWwwLjQ0MTA4LC0wLjEyMzA4YzAuMzQyMzMsLTAuMTQ2ODYgMC42MjQzMiwtMC4yMTE5MiAwLjg4ODMxLC0wLjIzMDA1Yy0wLjA5NDY1LC0wLjM0NDUgLTAuMTc3MDIsLTAuNjkxNTYgLTAuMzExMDQsLTEuMDI3OThjLTAuMDY5MywtMC4xNzQwMiAtMC4xNDQzOSwtMC4zNDQzNCAtMC4yMjM0NCwtMC41MTIxMmMtMC42NjQwOSwwLjAwODc1IC0xLjMyOTU5LDAuMDI0MzkgLTIuMDAyNzcsMC4wNDI4MWMtMC4xNDQ2OSwwLjAwMzk3IC0wLjk2MzEzLDAuMDQ0NTggLTEuNTQ3OTksMC4wNTg2OGMwLjAxMTk0LDAuMDM3NjYgMC4wMjY1NywwLjA3NTg0IDAuMDQ1MDUsMC4xMTQxNGwtMC4wNDM5MywwLjM2OTE5YzAsMCAtMC4xOTIxNSwwLjMyMzAyIC0wLjUyNjc0LDAuMTQ3MDFjLTAuMTgyMzksLTAuMDk1OTUgLTAuMjA4MjQsLTAuMjM1NTkgLTAuMTk0MDIsLTAuMzQyNzhjLTAuMTc1MjEsLTAuNDMyNDkgLTAuMTk5MiwtMC42ODcwOCAtMC4wNzgxNSwtMC45ODgyNWwtMC4wNjYyMSwtMC4wMTY0OWwwLjEwNjE3LC0wLjM1OTAzYzAuMDA4NDcsLTAuMDMxMjQgMC4wMjEzOSwtMC4wNjIwMyAwLjAzODk3LC0wLjA5MTU5YzAuMTA2MTMsLTAuMTc4NCAwLjM0MTk2LC0wLjI0NDIxIDAuNTI2NzMsLTAuMTQ2OTljMC4wNzM5MiwwLjAzODg5IDAuMTI4NDcsMC4wOTggMC4xNjA1NCwwLjE2NjMxbDAuMTcwNzgsMC4zNTIwNWwtMC4wNTIwOCwwLjAyMzgybDAuMDg1OTMsMC4xMDA0MmMtMC4wNDgxLDAuMDMyODggLTAuMTYxNTcsMC4xMTA0NiAtMC4yMDcxMywwLjE0MTYyYzAuNjY3OTEsLTAuNDUyNjUgMS41MjY4MSwtMC4yMjEwNyAyLjMyODY3LC0wLjI4MzM1YzAuMjkxMDMsLTAuMDIyNTkgMC41ODA2NSwtMC4wMzgyMSAwLjg2OTQ1LC0wLjA0ODMxYy0wLjI2ODQ1LC0wLjUwMTY3IC0wLjU0ODc2LC0wLjk5NjYyIC0wLjc4ODczLC0xLjUxOTNjMCwwIC0wLjAwMTUxLC0wLjAwMzMxIC0wLjAwMzg4LC0wLjAwOTQzYy0wLjEwMTY1LDAuMDM1NTIgLTAuMjE3MzIsMC4wMzA5IC0wLjMxNzg3LC0wLjAyMTk5Yy0wLjE4NDc3LC0wLjA5NzIxIC0wLjI0ODU0LC0wLjMyMDY0IC0wLjE0MjQxLC0wLjQ5OTAzYzAuMDA3MzIsLTAuMDEyMzIgMC4wMTUyOCwtMC4wMjQxMSAwLjAyMzc5LC0wLjAzNTM1bDAuMjc5LC0wLjM3NzY4bDAuMDkzNjcsMC4wNjE4NWwwLjAwOTk0LC0wLjAwODA1bDAuMDEyNDcsMC4wMTQxMmMwLjExNTQ3LC0wLjE3OTM3IDAuMjU3MjIsLTAuMzM4MzUgMC40MzM3MSwtMC40NTYzbC0wLjA3MzIxLDAuMDQ1MTFjMCwwIDAuMTkyMTYsLTAuMzIzMDEgMC41MjY3MiwtMC4xNDd6Ii8+PC9nPjwvZz48L2c+PHBhdGggZD0iTTIwOC41NDMxNSwxNTguOTE4MjVsMC45NjY5MiwtNy4zMzQyNGwtMjAuODgwNzcsLTAuNjA4MjJsLTEuNTM0NDEsLTEzLjY3ODQ4YzAsMCA1LjQ1MDc2LC0zLjY3NzMxIDExLjI3NTA5LC02LjAzMjA0YzQuMTMyODMsLTEuNjcwODcgOC41NDM3NiwtMS45NjMwMiA5LjI1MjA1LC0yLjIyMTExYzAuOTE2MywtMC4zMzM4OSA3LjkwMTU3LDAuMjU5MzEgMTEuMjE0MzIsMy43Mjc0N2M0LjYzNDgxLDQuODUyMjMgNS43OTYwNiwxMy4xODUxNCA1LjgxOTcyLDEzLjU2Njc0YzAuMjA4MzYsMy4zNjE3MiAtNC43MzM5OCw2LjU1Njc2IC00LjczMzk4LDYuNTU2NzZjMCwwIC0xLjg5OTA5LDIuNzMzMyAtMi4yNjc5NSwzLjcyNDE4Yy0wLjQxMjQsMS4xMDc4NSAtMC4wOTAzOSwyLjYxMTIyIC0wLjA5MDM5LDIuNjExMjJ6IiBmaWxsPSIjOTQ5NDk0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xODcuNjY0NCwxMzcuMjgwNmw4Ljk1NTc4LC00LjY4MDk5bDExLjI4MDMyLC0zLjE3NDUxbC0zLjY2ODU1LDkuODU1MDdsLTMuNDM4NDQsMy4yMDgzM2wtMTMuMTQ2NTIsMi4xNTkyM3oiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMDUuMTIzOTksMTQwLjk3NDczbC0xLjY2MTY5LC0wLjA1NzUzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjAzLjYwOTI4LDE0My41MzY2OGwyLjM4MjA2LC0wLjE1NTIxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjA2LjYyMTMxLDE0NS43Nzk5N2wtMS40MzI1MiwwLjE4ODA4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTg5Ljk0NTUzLDE1MC41MTlsOC4yMTg5OSwtMy45OTM0OWw5Ljk3ODM0LDAuMTA3NzhsNS43MzgzMSwtMC45ODk2OGw1LjUyNTU4LC0xLjcxMDA1bDMuOTc1MDIsLTEuMzk4NGMwLDAgMS42NjkzMiwxLjgyMTQyIDEuNzgwODUsMi41NzY2OGMwLjA4NjczLDAuNTg3MzUgLTIuMjE4MTYsMy43OTk2NSAtNC4zMDgxNCw2LjE5MTJjLTAuODQxNDYsMC45NjI4OCAtMS44MTYxMSwyLjk3Nzg2IC0xMC41NDE4NCwyLjU3OTEzYy0wLjk4NDgzLC0wLjA0NSAwLjQ0NzE2LC0xLjgzNzI1IC0xLjEyODU5LC0yLjAzMDQ3Yy02LjQwNDM4LC0wLjc4NTMzIC0xOC45MDIyNSwtMC44MjE3OCAtMTguOTAyMjUsLTAuODIxNzgiIGZpbGw9IiMzNzM3MzciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMDEuOTAwNTQsMTUzLjIxNzk3bDAuOTcwMywtMS4xNzExOWwxLjIxMTg2LC0xLjQwNDYxbDEuNDMzMDksLTAuNDUwNTdsMS4xNjMwNSwxLjQ0NTI5bDAuNDQyNDMsMS45MDgwNmwtMC45OTA2NCwyLjM1ODY0bC0yLjYyMDU0LDAuNDMwMjRsLTEyLjM0OTU0LC0wLjIxMTUzbC0wLjkwOTI4LC0yLjM5MTE4eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxMy41Nzc1MiwxNTcuNjY2NTZsLTAuMTQ2OTgsLTIuNjE5NDQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMTcuNDgyNTEsMTU0LjcxMjA0bC04LjU3MDQ4LDAuNDE2MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxNC4yMTk0OCwxMzIuMjU4MjVsMC4zNTI0NCwtMy4zMTUxNmwxLjQ5MDA2LC0xLjg0OTc3bDMuMTkxODksMy45MTMybDAuMDgxMjQsNC41MTg1MmwtMy42MjY1LDEuNzc1OGwwLjU0ODczLC0yLjEyMDAzbC0xLjExMjk2LC0yLjE3NzU1eiIgZmlsbD0iIzE1MTUxNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIxMS4yODQ1MiwxMzQuNjU0MDhsMC41NjUxNywtMi41OTQ3OGwxLjIyODAxLC0xLjE0NTgybDEuMjE5OCwtMC45MDg0NGwxLjg5MDg1LDAuMzAzMTRsMi4yOTk4OCwyLjIxODY1bDAuOTAwMjIsMS40NTcxOGwtMS43NzY3NCwzLjI2NTg1bC0zLjMwNjk0LC0wLjU4OTgyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwMS4xNTA2NiwxMzkuMTYwNjNjLTAuOTE3MTcsLTAuMzk4NDcgLTAuNTE4NywtMS4zMTU2NSAtMC41MTg3LC0xLjMxNTY1bDAuMjgxMzIsLTAuMzUwODVjLTAuMTA0MTQsLTEuMjkxMSAtMC4xNjIxNCwtMi4zMTk2MiAtMC44NjMwMSwtMy40MzA3N2MwLDAgLTAuNTE4MzgsLTAuODU1MTQgMC4zMzY3NiwtMS4zNzM1M2MwLjg1NTE0LC0wLjUxODM4IDEuMzczNTMsMC4zMzY3NiAxLjM3MzUzLDAuMzM2NzZjMC44MzE5MSwxLjQxMzMzIDEuMDEyNjEsMi42ODI1MiAxLjE0NjExLDQuMzA1MDlsLTAuNDQwMzUsMS4zMTAyNGMwLDAgLTAuMzk4NDcsMC45MTcxNyAtMS4zMTU2NSwwLjUxODd6IiBmaWxsPSIjNTRmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xOTYuMzc2NDksMTM4LjEyNDhjMCwxLjQ1ODI0IC0xLjQzNTgsMi42NDAzOCAtMy4yMDY5NCwyLjY0MDM4Yy0xLjc3MTE0LDAgLTMuMjA2OTQsLTEuMTgyMTQgLTMuMjA2OTQsLTIuNjQwMzhjMCwtMS40NTgyNCAxLjQzNTgsLTIuNjQwMzggMy4yMDY5NCwtMi42NDAzOGMxLjc3MTE0LDAgMy4yMDY5NCwxLjE4MjE0IDMuMjA2OTQsMi42NDAzOHoiIGZpbGw9IiM1NGZmMDAiIHN0cm9rZT0iIzU0ZmYwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=",
				"Sprite1.svg",
				"image");
			var sampleCode = '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="=6qWCv8dc.gx1,u}!t4J">sprite</variable><variable id="@/b9Q3%416WxKm==$-QF">aibo sprite</variable></variables><block type="variables_set" id="q%++%2!:{t:)Dn7;i;D3" x="170" y="110"><field name="VAR" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="VALUE"><block type="gvbvdxx_game_sprites_empty" id="J?AXJekjQL1GD7e_LjSS"></block></value><next><block type="variables_set" id=",t}W]qSk;=|Shhda$aVR"><field name="VAR" id="@/b9Q3%416WxKm==$-QF">aibo sprite</field><value name="VALUE"><block type="gvbvdxx_files_makeimage" id="tCDW[-WI#j[Ii:2b6idP"><value name="dataURI"><block type="gvbvdxx_files_dataurl" id="ZiNoI7N(dpgzc|CbdmdH"><field name="name">Sprite1.svg</field></block></value></block></value><next><block type="gvbvdxx_game_sprites_set_img" id="RbgJmPE2%5?Iv4)*m4x/"><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="image"><block type="variables_get" id="1Czt8VKRV,w!_+*.^(7q"><field name="VAR" id="@/b9Q3%416WxKm==$-QF">aibo sprite</field></block></value><next><block type="gvbvdxx_game_sprites_size" id="9#P*35GBf[vD57-HlEi}"><field name="NAME">width</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_number" id="MyB4#Z7U3?giF|C0@OC*"><field name="NAME">109</field></block></value><next><block type="gvbvdxx_game_sprites_size" id="8z,y/l2h%WnQ7YF){b_j"><field name="NAME">height</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_number" id="2{]c+TtO{qt?oY$%/d^p"><field name="NAME">108</field></block></value></block></next></block></next></block></next></block></next></block><block type="gvbvdxx_game_ontick" id="L`pt/h[o5gCkBlfNfmFW" x="170" y="390"><statement name="event"><block type="gvbvdxx_game_sprites_set_position" id="8z2@DfvOz}=Q0QaoUN%P"><field name="NAME">x</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><comment pinned="true" h="309" w="856">Hello There!\nOn the right side is the game area! Unlike scratch, to update the code, you must click start (reset the game).\nTo see the code in action, press "Start" on the game area on the top right.\nIf you want to stop the game, then press "Stop".\nIf you want to view the game on the fullscreen press "Toggle Fullscreen".\nThis is a massive WIP thing that will change and may break some games!\nWe will try our best to not break any games!\nAlso, there is a question mark for each comment on a block, if you click it it will hide the comment.\n\n\n- Gvbvdxx.</comment><value name="pos"><block type="gvbvdxx_operators_math" id="tle1xo`pk}$4^w}1i(^W"><field name="operator">+</field><value name="first"><block type="gvbvdxx_game_sprite_get" id="=)!t#z*s}C-E#2xGL1,w"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value><value name="last"><block type="gvbvdxx_operators_math" id="k?USsN+tII;61QR/2Pn@"><field name="operator">/</field><value name="first"><block type="gvbvdxx_operators_math" id="@o`2{K*``QIS-i2v+irr"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_x" id="2pYYBhM=HPr$lNg!z^UO"></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="F-i5T(:i5|%z|3cp%=X;"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value></block></value><value name="last"><block type="gvbvdxx_operators_number" id="!vxqM}h5teU9e-g=E_3["><field name="NAME">3</field></block></value></block></value></block></value><next><block type="gvbvdxx_game_sprites_set_position" id="8z|(AZ|S(4IiS]CaE(9?"><field name="NAME">y</field><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><value name="pos"><block type="gvbvdxx_operators_math" id="E^q3V;0YH+p6YOY0zjtq"><field name="operator">+</field><value name="first"><block type="gvbvdxx_game_sprite_get" id="d?DWPt00I65f[P^D0@zD"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">y</field></block></value><value name="last"><block type="gvbvdxx_operators_math" id="14+8k,$Y08i[VN~3=ly6"><field name="operator">/</field><value name="first"><block type="gvbvdxx_operators_math" id="=/r=g87$f6/klnXm|b*%"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_y" id=")^PT?lN0JDJ(Yu-ZV:i("></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="{W*Y3:A]M^J[aY;SYh)$"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">y</field></block></value></block></value><value name="last"><block type="gvbvdxx_operators_number" id="410-~C$MUo;xnGLts*$j"><field name="NAME">3</field></block></value></block></value></block></value><next><block type="gvbvdxx_control_if_then_else" id="qls[U.ha)Mx%6jeR~O@{"><value name="if"><block type="gvbvdxx_operators_compare" id="pG:Qe4$1wDec!@_$0T9t"><field name="operator">&lt;</field><value name="1"><block type="gvbvdxx_operators_math" id="}Ftj[SNV%YhSVt5#joE_"><field name="operator">-</field><value name="first"><block type="gvbvdxx_game_mouse_x" id="`ukx-ppSVEde.obWEIc{"></block></value><value name="last"><block type="gvbvdxx_game_sprite_get" id="9^meIr]]|?#te:JXCsD@"><field name="sprite1" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="value">x</field></block></value></block></value><value name="2"><block type="gvbvdxx_operators_number" id="?*;$TO~g^Q;9Xvr.@M$i"><field name="NAME">0</field></block></value></block></value><statement name="then"><block type="gvbvdxx_game_sprites_flip" id="|c?Xl5rqsS!QVBiTO]c("><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="NAME">none</field></block></statement><statement name="else"><block type="gvbvdxx_game_sprites_flip" id="~Gey^ub,9U7hm40P?UU5"><field name="sprite" id="=6qWCv8dc.gx1,u}!t4J">sprite</field><field name="NAME">hor</field></block></statement></block></next></block></next></block></statement></block></xml>';
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(sampleCode), workspace);
		} else {
			clearResources();
			workspace.clear();
		}
    }, 70);
}
window.gui = {
    loadScript: function (src, callback) {
        var tmpscript = document.createElement("script");
        tmpscript.src = window.getDirectory().gui + "/" + src + "?n=1"; //added update so they update once changed
        document.body.appendChild(tmpscript);
        tmpscript.onload = callback;
        return tmpscript;
    },
    blocks: {
        addExtension: function (json) {
            Blockly.defineBlocksWithJsonArray(json.blocks);
            toolboxHTML += "<category name='" + json.title + "' colour='" + json.color + "'>" + json.contents + "</category>";
            workspace.updateToolbox("<xml>" + toolboxHTML + "</xml>")
        }
    },
    editorToJsonText: function (type) {
        var loadingScreen = document.getElementById("loadingscreen");
        return JSON.stringify({
            blocklyXML: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),
            files: fileResourcesArray,
            title: document.getElementById("gameTitle").value,
            thumb: document.getElementById("gameScreen").toDataURL(),
            shared: window.shared,
            dis: document.getElementById("discription").value,
            code: vm.code
        });
    },
    jsonTextToEditor: function (JsonText, type) {
        var loadingScreen = document.getElementById("loadingscreen");
        loadingScreen.hidden = false;
        clearResources();
        var JsonTextParsed = JSON.parse(JsonText);
        var i = 0;
        while (JsonTextParsed.files.length > i) {
            readFileAsResource(JsonTextParsed.files[i].data, JsonTextParsed.files[i].name, JsonTextParsed.files[i].type);
            i += 1;
        }
        workspace.clear();
        document.getElementById("gameTitle").value = JsonTextParsed.title
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(JsonTextParsed.blocklyXML), workspace);
        if (type == "file") {}
        else {
            if (JsonTextParsed.shared) {
                window.shared = JsonTextParsed.shared;
            }
        }
        document.getElementById("discription").value = JsonTextParsed.dis;
        loadingScreen.hidden = true;
    }
}
console.log("[gui]:starting up.");
var toolbox = document.getElementById('toolbox');
var toolboxHTML = document.getElementById('toolbox').innerHTML;
//blockly injection starts
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
window.workspace = Blockly.inject(blocklyDiv, {
    toolbox: toolbox,
    collapse: false,
    sounds: true,
    move: {
        scrollbars: {
            horizontal: true,
            vertical: true
        },
        drag: true,
        wheel: false
    },
    zoom: {
        controls: true,
        wheel: false,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: false
    },
    trashcan: false,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#bac8ff',
        snap: true
    },
    theme: Blockly.Themes.GGM,
    renderer: "custom_renderer",
    media: "./blockly/media/"
});
console.log("[gui]:injected blockly.");
var onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
console.log("[gui]:loading blocks...");
gui.loadScript("blocks/index.js");
renderer.canvas = document.getElementById("gameScreen");
vm.code = "";
vm.attachRenderer(renderer);
vm.attachAudioEngine(audioEngine);
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width) / 2,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
document.getElementById("gameScreen").onmousemove = function (event) {
    var pos = getMousePos(document.getElementById("gameScreen"), event); // get adjusted coordinates as above
    var x = Math.round(pos.x / 1) - (document.getElementById("gameScreen").width / 2) / 2;
    var y = Math.round(pos.y * -1) + (document.getElementById("gameScreen").height / 2);

    vm.setMousePos({
        x: x,
        y: y
    });
}
document.getElementById("gameScreen").onmousedown = function (event) {
    event.preventDefault();
    vm.setMouseDown(true);
}
document.body.onmouseup = function (event) {
    event.preventDefault();
    vm.setMouseDown(false);
}
setInterval(function () {
    document.getElementById("testPos").innerHTML = vm.project.mouseX + "," + vm.project.mouseY + ", down:" + vm.project.mouseDown;
}, 1);
document.body.onkeydown = function (event) {
    vm.simulateKey({
        key: event.key,
        down: true
    });
    //event.preventDefault();
}
document.body.onkeyup = function (event) {
    vm.simulateKey({
        key: event.key,
        down: false
    });
}
/*
some test to test if the mouse on center:
var sprite = vm.project.block.makeSprite();
sprite.image = document.getElementById("testImage");
function test(){sprite.x=vm.project.mouseX*1;sprite.y=vm.project.mouseY*1;}vm.project.events.tick.push(test);*/

/*overide the console with the html one*/
vm.console.log = function (text) {
    document.getElementById('console').innerHTML += text + "<br>";
}
vm.console.error = function (text) {
    document.getElementById('console').innerHTML += "Error:" + text + "<br>";
    vm.stop();
}
vm.console.clear = function (text) {
    document.getElementById('console').innerHTML = "";
}
/*resources*/
var resoureupload = document.getElementById('resourceupload');
var files = document.getElementById('files');
window.fileResources = [];
window.fileResourcesArray = [];
resoureupload.accept = "audio/*,image/*";
function clearResources() {
    files.innerHTML = "";
    window.fileResources = [];
    window.fileResourcesArray = [];
}
function readFileAsResource(data, name, type) {
    var div = document.createElement("div");
    div.innerHTML = name + `:
	`;
    resourceupload.files[0]
    if (type == "image") {
        var image = document.createElement("img");
        image.src = data;
        div.appendChild(image);
        image.width = "200";
    }
    if (type == "audio") {
        var audio = document.createElement("audio");
        audio.src = data;
        audio.controls = true;
        div.appendChild(audio);
    }
    div.innerHTML += "<br>";
    files.appendChild(div);
    window.fileResources[name] = ({
        data: data,
        name: name,
        type: type
    });
    window.fileResourcesArray.push({
        data: data,
        name: name,
        type: type
    });
    window.vm.project.resources = fileResources;
}
resoureupload.onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        readFileAsResource(reader.result, resourceupload.files[0].name, resourceupload.files[0].type.split('/')[0]);
        resourceupload.value = "";
    }
    if (resourceupload.files[0]) {
        console.log(resourceupload.files[0].size);
        if (resourceupload.files[0].size > 7000000 && window.options.addMaxFileSize) {
            window.alert("file is too big! for reasons you cant upload something too big, if its music, please compress and find loops, it should help you");
        } else {
            reader.readAsDataURL(resourceupload.files[0]);
        }
    }
};

function save() {
    var a = document.createElement("a");
    const contents = gui.editorToJsonText();
    const blob = new Blob([contents], {
        type: 'ggm2g'
    });
    a.href = URL.createObjectURL(blob);
    a.download = document.getElementById("gameTitle").value + ".ggm2g";
    a.click();
}
function load() {
    document.getElementById("gameFileUpload").click();
}
document.getElementById("gameFileUpload").onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        gui.jsonTextToEditor(reader.result, "file");
        document.getElementById("gameFileUpload").value = "";
    };
    if (document.getElementById("gameFileUpload").files[0]) {
        reader.readAsText(document.getElementById("gameFileUpload").files[0]);
    }
}
//dialogs
var dialogBox = document.getElementById("dialogBox");
var dialogBackground = document.getElementById("dialogBackground");
var dialogOptions = {
    inputs: {
        txt: document.getElementById("dialogInput")
    },

    buttons: {
        ok: document.getElementById("dialogButtonOk"),

        cancel: document.getElementById("dialogButtonCancel")

    },
    name: document.getElementById("dialogName"),

    txt: document.getElementById("dialogText"),

    hideAll: function () {
        document.getElementById("dialogInput").hidden = true;
        document.getElementById("dialogText").hidden = true;
        document.getElementById("dialogButtonOk").hidden = false;
        document.getElementById("dialogButtonCancel").hidden = false;
    }
};
var app = document.getElementById("app");
dialogBackground.style.display = "none";
window.gui.dialogs = {
    alert: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        document.getElementById("dialogButtonCancel").hidden = true;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    confirm: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback(true);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback(false);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    prompt: (function (message, defaultValue, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.inputs.txt.value = defaultValue;

        dialogOptions.inputs.txt.hidden = false;

        let dialogInput = dialogOptions.inputs.txt;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                callback(dialogInput.value);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                callback(null);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };
    })
}
Blockly.alert = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    document.getElementById("dialogButtonCancel").hidden = true;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.confirm = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(true);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(false);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.prompt = (function (message, defaultValue, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.inputs.txt.value = defaultValue;

    dialogOptions.inputs.txt.hidden = false;

    let dialogInput = dialogOptions.inputs.txt;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(dialogInput.value);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(null);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

//Toolbox Management

window.toolboxManagement = class {
    constructor() {
        this.blockly = Blockly;
        this.workspace = workspace;
        this.addCategory = function (info) {
            document.getElementById("toolbox").innerHTML += `
			<category name='${info.name}' colour='${info.color}'>
			${this.blockXML}
			</category>
			`;
            this.workspace.updateToolbox("<xml>" + document.getElementById("toolbox").innerHTML + "</xml>")
        };
        this.blockXML = "";
        this.log = function (text) {
            console.log("extension: " + text)
        };
        this.vm = window.vm;
    }
};

/*var vardiv = variables.newVarDiv(0,0,{dragable:true});
vardiv.inside.style.height = 32+"px";
vardiv.inside.style.width = 32+"px";
vardiv.inside.style.background = "black";
document.body.appendChild(vardiv.inside);*/

//exporting

function exportGame() {
    var html = `
<!DOCTYPE HTML>
<html>
	<head>
		<title>Loading...</title>
		<style>
			/* The animation code */
			@keyframes logo {
			  0%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			  50%  {width:300px;margin-left:-150px;filter: brightness(1);transition: 0.01s;}
			  100%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			}
			/* The element to apply the animation to */
			#logo {
			  animation: rotation 0 linear;
			  animation-name: logo;
			  animation-duration: 2s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  transition: 0.5s;
			}
			/* The animation code */
			@keyframes example {
			  0%   {transform: rotate(0deg);}
			  100%  {transform: rotate(360deg);}
			}
			/* The element to apply the animation to */
			.loading {
			  width: 100px;
			  height: 100px;
			  animation: rotation 8s infinite linear;
			  animation-name: example;
			  animation-duration: 0.5s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  position:fixed;
			  top:50%;
			  left:50%;
			  margin-top:-50px;
			  margin-left:-50px;
			  transition: 0.5s;
			}
		</style>
	</head>
	<body style="background:black;overflow:hidden;">
		<img id="loading" class="loading" selectable=false draggable=false src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NyIgaGVpZ2h0PSI4NyIgdmlld0JveD0iMCwwLDg3LDg3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjUsLTEzNi41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjAxLjUsMTgwYzAsLTIxLjI2Mjk2IDE3LjIzNzA0LC0zOC41IDM4LjUsLTM4LjVjMjEuMjYyOTYsMCAzOC41LDE3LjIzNzA0IDM4LjUsMzguNWMwLDIxLjI2Mjk2IC0xNy4yMzcwNCwzOC41IC0zOC41LDM4LjVjLTIxLjI2Mjk2LDAgLTM4LjUsLTE3LjIzNzA0IC0zOC41LC0zOC41eiIgc3Ryb2tlPSIjZmZmZmZmIi8+PHBhdGggZD0iTTIwNi40MjE0NiwxOTguNDQxOTdjLTMuMTM3NzgsLTUuNDE1MzggLTQuOTIxNDYsLTExLjYyOTE3IC00LjkyMTQ2LC0xOC4yMzYwNmMwLC0xMC4wNzQ3NSA0LjE0NzU2LC0xOS4yMzU0NyAxMC45MTk0NywtMjYuMDQ0OTIiIHN0cm9rZT0iI2E3YTdhNyIvPjwvZz48L2c+PC9zdmc+">
		<div id="app" hidden>
			<!--<img id="logo" style="position:fixed;top:50%;left:50%;margin-left:-150px;margin-top:-100px;" width=300 height=200 src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMDMuOTEwNDYiIGhlaWdodD0iMTEwLjM3NzExIiB2aWV3Qm94PSIwLDAsMzAzLjkxMDQ2LDExMC4zNzcxMSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMzUuMjgzMTEiIHkxPSIxMzUuMTQzOTUiIHgyPSIxMzUuMjgzMTEiIHkyPSIyMzIuODcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYjBiMGIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTY1ZTYzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOC42MTY0NSIgeTE9IjEyOC4xNDM5NSIgeDI9IjEyOC42MTY0NSIgeTI9IjIyNS44NzA2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZmYwZjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MThkOTQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBjeD0iMTQ3Ljc0NTYxIiBjeT0iMTM1LjMzMzMzIiByPSI2LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEzLjk0OTc4IiB5MT0iMTM0Ljk3NzI4IiB4Mj0iMjEzLjk0OTc4IiB5Mj0iMjMyLjcwMzk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2IwYjBiMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2NWU2MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMDguNjE2NDUiIHkxPSIxMjguNjQzOTUiIHgyPSIyMDguNjE2NDUiIHkyPSIyMjYuMzcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWZmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODE4ZDk0Ii8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjIyNi40MTIyOCIgY3k9IjEzNiIgcj0iNi41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI3My41Njk3MyIgeTE9IjE5Ny41MDY0NiIgeDI9IjI3My41Njk3MyIgeTI9IjIzMS4wMDY0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci03Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiMGIwYjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NjVlNjMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjY5LjkwMzA3IiB5MT0iMTkyLjUwNjQ2IiB4Mj0iMjY5LjkwMzA3IiB5Mj0iMjI2LjAwNjQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VmZjBmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgxOGQ5NCIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIzODAuNzQ1NjEiIGN5PSIxMzciIHI9IjYuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci05Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MS4wNTMxNSwtMTI0LjYyOTM1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48Zz48cGF0aCBkPSJNMTAxLjQwODU3LDE3Mi4wNjIxYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM2LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDQsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMiwtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik05NC43NDE5MSwxNjUuMDYyMWMyLjEyODM0LC0xNC40ODAzNiAxMy45MzAzNiwtMjguNjQyODEgMjUuMzM5MzIsLTMzLjIzNDE3YzE2LjM5MzIzLC02LjU5NzE5IDM0LjA3MTg0LC0yLjMyMTQ3IDM0LjA3MTg0LC0yLjMyMTQ3bDAuMTYyODcsMTcuNTEzOTZjMCwwIC0xNy4xNTcyMiwtMC4xNzk0NyAtMjkuNDMwNzgsNC41ODQwNGMtNy4yMTc1MiwyLjgwMTIgLTEyLjA5MjA0LDguMjkzMDEgLTEyLjU0ODE4LDEzLjkwNzA0Yy0wLjcyNTc2LDguOTMyNDcgLTIuMTgwNjcsMjQuNTc0MiA2LjI1MDk4LDMzLjQ3NzIxYzUuMTE0NCw1LjQwMDMyIDIzLjY3Mzc1LDYuNTg2NzkgMjMuNjczNzUsNi41ODY3OWwtMC4zNDk0NSwtMTguODk3MTRsLTIwLjA5MTM0LDAuNDY4MzNsMC42NzY4NywtMTkuOTM4NWw0MS4xODE5MywtMC42MjU1MmwtMC41MjY2Niw1OC45MjM3OWwtMzEuNDYyMTQsMC4zNjMwN2MwLDAgLTQ2LjA0MDUsMS4wNDcxNCAtMzYuOTQ5MDIsLTYwLjgwNzQzeiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTEzOC4xNjY2NiwxMzcuNWMwLC0zLjU4OTg1IDIuOTEwMTUsLTYuNSA2LjUsLTYuNWMzLjU4OTg1LDAgNi41LDIuOTEwMTUgNi41LDYuNWMwLDMuNTg5ODUgLTIuOTEwMTUsNi41IC02LjUsNi41Yy0zLjU4OTg1LDAgLTYuNSwtMi45MTAxNSAtNi41LC02LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTMpIi8+PHBhdGggZD0iTTE0My44Njg0MiwxMzUuNTYxNGMwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc2LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0xODAuMDc1MjQsMTcxLjg5NTQzYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM3LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDUsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMywtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTQpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0xNzQuNzQxOTEsMTY1LjU2MjFjMi4xMjgzNCwtMTQuNDgwMzYgMTMuOTMwMzcsLTI4LjY0MjgxIDI1LjMzOTMyLC0zMy4yMzQxN2MxNi4zOTMyMywtNi41OTcxOSAzNC4wNzE4NCwtMi4zMjE0NyAzNC4wNzE4NCwtMi4zMjE0N2wwLjE2Mjg3LDE3LjUxMzk2YzAsMCAtMTcuMTU3MjIsLTAuMTc5NDcgLTI5LjQzMDc4LDQuNTg0MDRjLTcuMjE3NTIsMi44MDEyIC0xMi4wOTIwNSw4LjI5MzAxIC0xMi41NDgxOCwxMy45MDcwNGMtMC43MjU3Niw4LjkzMjQ3IC0yLjE4MDY3LDI0LjU3NDIgNi4yNTA5OCwzMy40NzcyMWM1LjExNDQsNS40MDAzMiAyMy42NzM3NSw2LjU4Njc5IDIzLjY3Mzc1LDYuNTg2NzlsLTAuMzQ5NDUsLTE4Ljg5NzE0bC0yMC4wOTEzNCwwLjQ2ODMzbDAuNjc2ODcsLTE5LjkzODVsNDEuMTgxOTMsLTAuNjI1NTJsLTAuNTI2NjYsNTguOTIzNzlsLTMxLjQ2MjE0LDAuMzYzMDdjMCwwIC00Ni4wNDA1LDEuMDQ3MTQgLTM2Ljk0OTAzLC02MC44MDc0M3oiIGZpbGw9InVybCgjY29sb3ItNSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yMTYuODMzMzMsMTM4LjE2NjY3YzAsLTMuNTg5ODUgMi45MTAxNSwtNi41IDYuNSwtNi41YzMuNTg5ODUsMCA2LjUsMi45MTAxNSA2LjUsNi41YzAsMy41ODk4NSAtMi45MTAxNSw2LjUgLTYuNSw2LjVjLTMuNTg5ODUsMCAtNi41LC0yLjkxMDE1IC02LjUsLTYuNXoiIGZpbGw9InVybCgjY29sb3ItNikiLz48cGF0aCBkPSJNMjIyLjUzNTA5LDEzNi4yMjgwN2MwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM0LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0yNTUuODE5NzMsMjMyLjUwNjQ2bDU5LjE1ODcxLC04OS44OTUyNmMwLDAgMy40NDE2MywtMTAuOTE4OTMgMTUuMDgwMTgsLTEwLjQ2ODI3YzkuNTYyMywwLjM3MDI2IDcuOTYyNTUsNjAuOTg4OTggNy45NjI1NSw2MC45ODg5OGMwLDAgOC44OTc1MiwtMTMuNTUxOTIgMTcuNzMwMDEsLTI4LjI2Njg0YzkuNTQxNTQsLTE1Ljg5NjIyIDE1LjQyNDY5LC0zMi4wNjYxNiAyNS42NTM4NywtMzIuNjMwNTljMy45MjgxOCwtMC4yMTY3NSAxMC40MzM2OSw5LjM3NzY1IDEwLjQzMzY5LDkuMzc3NjVsMC42MDgxMSw4OC4zODI5NmwtMTkuNzk1NSwwLjU3NTAzbDEuMTY4MzksLTYwLjA2MzY2bC0yOC40NjU3OCw0NS41MjY5MWMwLDAgLTEzLjAzNzQ5LDE2LjI4MDYxIC0xNy4xMzE1NywxNi4xMjE3MmMtOS4zMjA3NiwtMC4zNjE3NSAtMTIuOTM5MzUsLTExLjM1ODE4IC0xMi45MzkzNSwtMTEuMzU4MThsLTAuNDY3MzgsLTQ3LjY1MjgzbC0zNi45OTU5Myw1OS4zNjIzOHoiIGZpbGw9InVybCgjY29sb3ItNykiIHN0cm9rZT0iIzQyNDI0MiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI1Mi4xNTMwNywyMjcuNTA2NDZsNTkuMTU4NzEsLTg5Ljg5NTI2YzAsMCAzLjQ0MTYzLC0xMC45MTg5MyAxNS4wODAxOCwtMTAuNDY4MjdjOS41NjIzLDAuMzcwMjYgNy45NjI1NSw2MC45ODg5OCA3Ljk2MjU1LDYwLjk4ODk4YzAsMCA4Ljg5NzUyLC0xMy41NTE5MiAxNy43MzAwMSwtMjguMjY2ODRjOS41NDE1NCwtMTUuODk2MjIgMTUuNDI0NjksLTMyLjA2NjE2IDI1LjY1Mzg3LC0zMi42MzA1OWMzLjkyODE4LC0wLjIxNjc1IDEwLjQzMzY5LDkuMzc3NjUgMTAuNDMzNjksOS4zNzc2NWwwLjYwODExLDg4LjM4Mjk2bC0xOS43OTU1LDAuNTc1MDNsMS4xNjgzOSwtNjAuMDYzNjZsLTI4LjQ2NTc4LDQ1LjUyNjkxYzAsMCAtMTMuMDM3NDksMTYuMjgwNjEgLTE3LjEzMTU3LDE2LjEyMTcyYy05LjMyMDc2LC0wLjM2MTc1IC0xMi45MzkzNSwtMTEuMzU4MTggLTEyLjkzOTM1LC0xMS4zNTgxOGwtMC40NjczOCwtNDcuNjUyODNsLTM2Ljk5NTkzLDU5LjM2MjM4eiIgZmlsbD0idXJsKCNjb2xvci04KSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTM3MS4xNjY2NywxMzkuMTY2NjdjMCwtMy41ODk4NSAyLjkxMDE1LC02LjUgNi41LC02LjVjMy41ODk4NSwwIDYuNSwyLjkxMDE1IDYuNSw2LjVjMCwzLjU4OTg1IC0yLjkxMDE1LDYuNSAtNi41LDYuNWMtMy41ODk4NSwwIC02LjUsLTIuOTEwMTUgLTYuNSwtNi41eiIgZmlsbD0idXJsKCNjb2xvci05KSIvPjxwYXRoIGQ9Ik0zNzYuODY4NDIsMTM3LjIyODA3YzAsLTAuNjcwMTIgMS4zNjY0MywtMC40MDE4NSAxLjc4NzExLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzYsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzUsMC4zNzgwNSAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MSwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTY5LC0xLjgyNzMyYy0wLjYwODMxLC0wLjQ2OTE3IC0xLjc4NjEsMC4wODkxNyAtMS43ODYxLC0wLjczODQ3eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=">-->
			<center id="text">
				<h1 style="font-family:arial;color:white;position:fixed;top:50%;left:50%;margin-left:-150px;margin-top:100px;">
				please click to play</h1>
			</center>
			<center>
				<canvas id="gameScreen" hidden width=600 height=360 style="width:88.5%;height:calc(100vh - 20px);image-rendering:pixelated;"></canvas>
			</center>
		</div>
		<!--TODO: replace the vm src with the compressed vm-->
		<script src="
		data:text/javascript;base64,LyoqDQogICogVEhJUyBTQ1JJUFQgQ09OVEFJTlM6DQogICogZ3ZidmR4eCBnYW1lIG1ha2VyIDIgcnVudGltZSBzY3JpcHRzLg0KICAqIGd2YnZkeHggZ2FtZSBtYWtlciAyIHJlbmRlcmVyIHNjcmlwdHMuDQogICogZ3ZidmR4eCBnYW1lIG1ha2VyIDIgYXVkaW8gZW5naW5lIHNjcmlwdHMuDQogICogRE8gTk9UIEVESVQ6IHJlc3VsdGluZyBpbnRvIGEgaXNzdWUgd2l0aCB0aGUgZW5naW5lLg0KICAqIGlmIHVzaW5nLCBwbGVhc2UgYXR0YWNoIHRoZXNlIHdpdGggdGhlIHJ1bnRpbWUgZW5naW5lLQ0KICAqIGJlY2F1c2UgdGhleSBhcmUgbm90IGdyb3VwZWQgYW5kIGp1c3QgdGhlcmUgY29kZSBpcy4NCiovDQp3aW5kb3cuYXVkaW9FbmdpbmU9e3NmeDp7YXVkaW86bnVsbCxhdWRpb2VsZW1lbnRzOltdLHBsYXk6ZnVuY3Rpb24odCl7dGhpcy5hdWRpbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJhdWRpbyIpLHRoaXMuYXVkaW8uc3JjPXQsdGhpcy5hdWRpby5wbGF5KCksdGhpcy5hdWRpb2VsZW1lbnRzLnB1c2godGhpcy5hdWRpbyksdGhpcy5hdWRpby5vbmVuZGVkPWZ1bmN0aW9uKCl7YXVkaW9FbmdpbmUuc2Z4LmF1ZGlvZWxlbWVudHMuaW5kZXhPZih0aGlzLmF1ZGlvKTt2YXIgdCxlPVtdO2Zvcih0IGluIGF1ZGlvRW5naW5lLnNmeC5hdWRpb2VsZW1lbnRzKWF1ZGlvRW5naW5lLnNmeC5hdWRpb2VsZW1lbnRzJiZlLnB1c2goYXVkaW9FbmdpbmUuc2Z4LmF1ZGlvZWxlbWVudHNbdF0pO2F1ZGlvRW5naW5lLnNmeC5hdWRpb2VsZW1lbnRzPWV9fX0sYmdtOnthdWRpbzpkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJhdWRpbyIpLGlzUGxheWluZzohMSxwbGF5OmZ1bmN0aW9uKCl7dHJ5e3RoaXMuYXVkaW8ucGxheSgpLHRoaXMuaXNQbGF5aW5nPSEwfWNhdGNoKHQpe2NvbnNvbGUud2FybigiW0F1ZGlvRW5naW5lXTplcnJvciBpZ25vcmVkIit0KX19LHNldFNyYzpmdW5jdGlvbih0KXt0aGlzLmF1ZGlvLnNyYz10fX0sc3RvcDpmdW5jdGlvbigpe3RyeXtmb3IodmFyIHQgaW4gdGhpcy5zZnguYXVkaW8mJih0aGlzLnNmeC5hdWRpby5wYXVzZSgpLHRoaXMuc2Z4LmF1ZGlvPW51bGwpLHRoaXMuYmdtLmlzUGxheWluZz0hMSx0aGlzLnNmeC5hdWRpb2VsZW1lbnRzKXRoaXMuc2Z4LmF1ZGlvZWxlbWVudHNbdF0ucGF1c2UoKTt0aGlzLnNmeC5hdWRpb2VsZW1lbnRzPVtdfWNhdGNoKHQpe2NvbnNvbGUud2FybigiW0F1ZGlvRW5naW5lXTplcnJvciBpZ25vcmVkIit0KX19LHRpY2tBdWRpbzpmdW5jdGlvbigpezE9PXdpbmRvdy5hdWRpb0VuZ2luZS5iZ20uaXNQbGF5aW5nP3dpbmRvdy5hdWRpb0VuZ2luZS5iZ20uYXVkaW8ucGxheSgpOndpbmRvdy5hdWRpb0VuZ2luZS5iZ20uYXVkaW8ucGF1c2UoKX19LHdpbmRvdy5hdWRpb0VuZ2luZS5iZ20uYXVkaW8ubG9vcD0hMCxzZXRJbnRlcnZhbCh3aW5kb3cuYXVkaW9FbmdpbmUudGlja0F1ZGlvLDEpLHdpbmRvdy52bT17aWRjb3VudGVyOjAsY29udHJvbDp7c3RhcnQ6ZnVuY3Rpb24oYSl7aWYoIXZtLmF1ZGlvRW5naW5lKXRocm93IEVycm9yKCJBdWRpb0VuZ2luZSBNdXN0IEJlIEF0dGFjaGVkIik7aWYoIXZtLnJlbmRlcmVyKXRocm93IEVycm9yKCJSZW5kZXJlciBNdXN0IEJlIEF0dGFjaGVkIik7dm0uY29udHJvbC5zdG9wKCksdm0uY29udHJvbC5ydW5uaW5nPSEwLHZtLmlkY291bnRlcj0wLHZtLnByb2plY3QubW9uaXRvcnM9W10sd2luZG93LnZtLnJlbmRlcmVyLmJnLnNyYz0iIjt0cnl7ZXZhbCh2bS5jb2RlKX1jYXRjaChlKXt2bS5jb25zb2xlLmVycm9yKCJFcnJvciBpbiBzY3JpcHQ6IitlKX19LHN0b3A6ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdm0ucHJvamVjdC50aW1lb3V0cyljbGVhclRpbWVvdXQodm0ucHJvamVjdC50aW1lb3V0c1t0XSk7dm0ucHJvamVjdC50aW1lb3V0cz1bXSx2bS5pZGNvdW50ZXI9MCx2bS5jb250cm9sLnJ1bm5pbmc9ITEsdm0ucHJvamVjdC5zcHJpdGVzPVtdLHZtLnByb2plY3QuZXZlbnRzLnRpY2s9W10sdm0ucHJvamVjdC5zcHJpdGVzPVtdLHZtLnByb2plY3Qua2V5c1ByZXNzZWQ9W10sdm0uYXVkaW9FbmdpbmUuc3RvcCgpO3RyeXt3aW5kb3cudm0ub25zdG9wKCl9Y2F0Y2godCl7Y29uc29sZS5lcnJvcih0KX19LHJ1bm5pbmc6ITF9LGNvZGU6IiIscmVuZGVyZXI6bnVsbCxhdHRhY2hSZW5kZXJlcjpmdW5jdGlvbih0KXtyZXR1cm4gdm0ucmVuZGVyZXI9dCx2bS5yZW5kZXJlci5zdGFydCgpLHR9LGF0dGFjaEF1ZGlvRW5naW5lOmZ1bmN0aW9uKHQpe3JldHVybiB2bS5hdWRpb0VuZ2luZT10fSxzZXRDb21waWFkaWJsaXR5TW9kZTpmdW5jdGlvbih0KXt0aGlzLmNvbXBpYWRpYmxpdHlNb2RlPXR9LGNvbXBpYWRpYmxpdHlNb2RlOiExLHByb2plY3Q6e21vdXNlRG93bjohMSxtb3VzZVg6MCxtb3VzZVk6MCxrZXlzUHJlc3NlZDpbXSxzcHJpdGVzOltdLGV2ZW50czp7dGljazpbXX0sbW9uaXRvcnM6W10scmVzb3VyY2VzOltdLHRpbWVvdXRzOltdLGJsb2NrOnttb3ZlU3RlcHM6ZnVuY3Rpb24odCxlKXt0cnl7dmFyIG89ZSxpPTkwLXQuZGlyZWN0aW9uLG49TWF0aC5jb3MoaSooTWF0aC5QSS8xODApKSpvLG89TWF0aC5zaW4oaSooTWF0aC5QSS8xODApKSpvLG49bituO3QueD10Lngrbix0Lnk9dC55KyhvK28pfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IoIkVycm9yIGluIHNjcmlwdDoiK3QpfX0sZGVsZXRlTGlzdDpmdW5jdGlvbih0LGUpe3RyeXtkZWxldGUgdFtlXTtmb3IodmFyIG89MCxpPVtdO3QubGVuZ3RoPm87KW51bGwhPXRbb10mJmkucHVzaCh0W29dKSxvKz0xO3JldHVybiBpfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IoIkVycm9yIGluIHNjcmlwdDoiK3QpfX0sbWFrZVNwcml0ZTpmdW5jdGlvbigpe3RyeXt2bS5pZGNvdW50ZXIrPTE7dmFyIHQ9e2RpcmVjdGlvbjo5MCx4OjAseTowLHdpZHRoOjMyLGhlaWdodDozMixpbWFnZTpudWxsLGZsaXA6Im5vbmUiLGlkOnZtLmlkY291bnRlcixnaG9zdDowLGNsaWNrZWQ6W119O3JldHVybiB0aGlzLnNob3dTcHJpdGUodCksdH1jYXRjaCh0KXt9fSxtYWtlTW9uaXRvcjpmdW5jdGlvbigpe3RyeXt2YXIgdD17eDowLHk6MCx2YWx1ZTowLG5hbWU6Im1vbml0b3IiLHZpc2libGU6ITAsY2xpY2tlZDpbXX07cmV0dXJuIHdpbmRvdy52bS5wcm9qZWN0Lm1vbml0b3JzLnB1c2godCksdH1jYXRjaCh0KXt2bS5jb25zb2xlLmVycm9yKCJFcnJvciBpbiBzY3JpcHQ6Iit0KX19LHNob3dTcHJpdGU6ZnVuY3Rpb24odCl7dHJ5e3RoaXMuaGlkZVNwcml0ZSh0KSx2bS5wcm9qZWN0LnNwcml0ZXMucHVzaCh0KX1jYXRjaCh0KXt2bS5jb25zb2xlLmVycm9yKCJFcnJvciBpbiBzY3JpcHQ6Iit0KX19LGhpZGVTcHJpdGU6ZnVuY3Rpb24odCl7dHJ5e3ZhciBlPXZtLnByb2plY3Quc3ByaXRlcy5pbmRleE9mKHQpOy0xPGUmJnZtLnByb2plY3Quc3ByaXRlcy5zcGxpY2UoZSwxKX1jYXRjaCh0KXt9fSxjb3M6ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBNYXRoLmNvcyh0KihNYXRoLlBJLzE4MCkpfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IodCl9fSxzaW46ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBNYXRoLnNpbih0KihNYXRoLlBJLzE4MCkpfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IodCl9fSxnZXRNb3NlRGF0YTpmdW5jdGlvbigpe3RyeXtyZXR1cm57eDp2bS5wcm9qZWN0Lm1vdXNlWCx5OnZtLnByb2plY3QubW91c2VZLGRvd246dm0ucHJvamVjdC5tb3VzZURvd259fWNhdGNoKHQpe319LGRhdGFUb0ltZzpmdW5jdGlvbih0KXt0cnl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW1nIik7cmV0dXJuIGUuc3JjPXQsZS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwiaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7IiksZX1jYXRjaCh0KXt9fSxyYW5kb206ZnVuY3Rpb24odCxlKXt2YXIgbztyZXR1cm4gZTx0JiYobz10LHQ9ZSxlPW8pLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooZS10KzEpK3QpfSxpc1RvdWNoaW5nOmZ1bmN0aW9uKHQsZSxvKXt0cnl7cmV0dXJuIHZtLl9fX0NIRUNLQ09MTElERSh0LGUpfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IoIkVycm9yIGluIHNjcmlwdDoiK3QpfX0sZ2V0S2V5UHJlc3NlZDpmdW5jdGlvbih0KXt0cnl7cmV0dXJuISF2bS5wcm9qZWN0LmtleXNQcmVzc2VkW3RdfWNhdGNoKHQpe319LHdhaXQ6ZnVuY3Rpb24odCxlKXt0cnl7dm0ucHJvamVjdC50aW1lb3V0cy5wdXNoKHNldFRpbWVvdXQoKCk9Pnt3aW5kb3cudm0uY29udHJvbC5ydW5uaW5nJiZlKCl9LDFlMyp0KSl9Y2F0Y2godCl7fX0sZ2V0VG91Y2hNb3VzZTpmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LnZtLl9fX0NIRUNLQ09MTElERSh7eDp3aW5kb3cudm0ucHJvamVjdC5tb3VzZVgseTp3aW5kb3cudm0ucHJvamVjdC5tb3VzZVksd2lkdGg6MSxoZWlnaHQ6MX0sdCl9fX0sdmFyaWFibGVzOntjYW5EcmFnOiExfSx2bVRpY2s6ZnVuY3Rpb24oKXtpZih2bS5jb250cm9sLnJ1bm5pbmcpe2Zvcih2YXIgdCBpbiB2bS5wcm9qZWN0LmV2ZW50cy50aWNrKXRyeXt2bS5wcm9qZWN0LmV2ZW50cy50aWNrW3RdKCl9Y2F0Y2godCl7dm0uY29uc29sZS5lcnJvcih0KX10cnl7dm0ucmVuZGVyZXIudGljayh2bS5wcm9qZWN0LnNwcml0ZXMsdm0ucHJvamVjdC5tb25pdG9ycyl9Y2F0Y2godCl7fXRoaXMudGlja3MrPTA7dHJ5e3dpbmRvdy52bS5vbnRpY2soKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfX1lbHNlIHRoaXMudGlja3M9MDt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHZtLnZtVGljayl9LHN0YXJ0OmZ1bmN0aW9uKCl7dm0uY29udHJvbC5zdGFydCgpfSxzdG9wOmZ1bmN0aW9uKCl7dm0uY29udHJvbC5zdG9wKCl9LHNldE1vdXNlUG9zOmZ1bmN0aW9uKHQpe3RoaXMucHJvamVjdC5tb3VzZVg9dC54LHRoaXMucHJvamVjdC5tb3VzZVk9dC55fSxzZXRNb3VzZURvd246ZnVuY3Rpb24odCl7aWYoMT09dClmb3IodmFyIGUgaW4gdm0ucHJvamVjdC5zcHJpdGVzKXRyeXtpZih0aGlzLl9fX0NIRUNLQ09MTElERSh7eDp0aGlzLnByb2plY3QubW91c2VYLHk6dGhpcy5wcm9qZWN0Lm1vdXNlWSx3aWR0aDoxLGhlaWdodDoxfSx2bS5wcm9qZWN0LnNwcml0ZXNbZV0pKXt2YXIgbyxpPXZtLnByb2plY3Quc3ByaXRlc1tlXTtmb3IobyBpbiBpLmNsaWNrZWQpdHJ5e2kuY2xpY2tlZFtvXSgpfWNhdGNoKHQpe3ZtLmNvbnNvbGUuZXJyb3IodCl9fX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfXRoaXMucHJvamVjdC5tb3VzZURvd249dH0sY29uc29sZTp7bG9nOmZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKCJbdm0gLSBwcm9ncmFtXTogIit0KX0sZXJyb3I6ZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcigiW3ZtIC0gcHJvZ3JhbV06ICIrdCksdm0uc3RvcCgpfSxjbGVhcjpmdW5jdGlvbih0KXtjb25zb2xlLmNsZWFyKCl9fSxzaW11bGF0ZUtleTpmdW5jdGlvbih0KXt0LmRvd24/dGhpcy5wcm9qZWN0LmtleXNQcmVzc2VkW3Qua2V5XT0hMDp0aGlzLnByb2plY3Qua2V5c1ByZXNzZWRbdC5rZXldPSExfSxjb2xsaWRlV2lkdGg6MCxjb2xsaWRlSGVpZ2h0OjAsX19fQ0hFQ0tDT0xMSURFOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITF9LGNvbGxpZGVEaXY6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IiksYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbih0LGUpe3RoaXNbIm9uIit0XT1lfSxvbnRpY2s6ZnVuY3Rpb24oKXt9LG9uc3ByaXRlY3JlYXRlOmZ1bmN0aW9uKHQpe30sb25zdG9wOmZ1bmN0aW9uKCl7fSxfX2RlY29kZURhdGFCYXNlNjRVUkk6ZnVuY3Rpb24odCl7cmV0dXJuIGF0b2IodC5zcGxpdCgiOyIpLnBvcCgpLnNwbGl0KCIsIikucG9wKCkpfX0sdm0uX19fQ0hFQ0tDT0xMSURFPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbyh0LGUsbyxpLG4pe2k9ZS1pLzI7cmV0dXJue3g6dC1vLzItbi53aWR0aC8yLHk6aS1uLmhlaWdodC8yfX12YXIgaT10LndpZHRoLzIsbj10LmhlaWdodCxyPW8odC54LHQueSx0LndpZHRoLzIsdC5oZWlnaHQsdm0ucmVuZGVyZXIuY2FudmFzKS54LGM9byh0LngsdC55LHQud2lkdGgvMix0LmhlaWdodCx2bS5yZW5kZXJlci5jYW52YXMpLnkscz1lLndpZHRoLzIsYT1lLmhlaWdodCx0PW8oZS54LGUueSxlLndpZHRoLzIsZS5oZWlnaHQsdm0ucmVuZGVyZXIuY2FudmFzKS54LGU9byhlLngsZS55LGUud2lkdGgvMixlLmhlaWdodCx2bS5yZW5kZXJlci5jYW52YXMpLnk7cmV0dXJuIHQ8PXIraSYmcjw9dCtzJiZlPD1jK24mJmM8PWUrYX0sd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh2bS52bVRpY2spLHdpbmRvdy5yZW5kZXJlcj17Y2FudmFzOm51bGwsYmc6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW1nIiksYmFja2dyb3VuZEltZzpudWxsLHN0YXJ0OmZ1bmN0aW9uKCl7dGhpcy5jb250ZXh0PXRoaXMuY2FudmFzLmdldENvbnRleHQoIjJkIiksdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhPTEsdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlPXRoaXMuY29sb3IsdGhpcy5jb250ZXh0LmZpbGxTdHlsZT10aGlzLmNvbG9yLHRoaXMuY29udGV4dC5iZWdpblBhdGgoKSx0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoKzIsdGhpcy5jYW52YXMuaGVpZ2h0KzIpLHRoaXMuY29udGV4dC5zdHJva2UoKSx0aGlzLnRlc3Q9MCx0aGlzLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZz0iUGl4ZWxhdGVkIn0sdGljazpmdW5jdGlvbih0LGUpe3RoaXMuY29udGV4dC5nbG9iYWxBbHBoYT0xLHRoaXMuY29udGV4dC5maWxsU3R5bGU9dGhpcy5jb2xvcix0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGU9dGhpcy5jb2xvcix0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCksdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCsyLHRoaXMuY2FudmFzLmhlaWdodCsyKSx0aGlzLmNvbnRleHQuc3Ryb2tlKCksdGhpcy5jb250ZXh0LndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZD0hMSx0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkPSExLHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQ9ITE7dHJ5e3RoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5iZywwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KX1jYXRjaCh0KXt9Zm9yKHZhciBvIGluIHQpdFtvXSx0aGlzLl9kcmF3U3ByaXRlKHRbb10pO2Zvcih2YXIgbyBpbiBlKWVbb10sdGhpcy5fZHJhd01vbml0b3IoZVtvXSl9LF9kcmF3U3ByaXRlOmZ1bmN0aW9uKHQpe3RoaXMuY29udGV4dC5zYXZlKCk7dHJ5e3ZhciBlPXQueCxvPTAtdC55LGk9dC5naG9zdDsxMDA8aSYmKGk9MTAwKSxpPDAmJihpPTApLHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYT0xLWkvMTAwLHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5jYW52YXMud2lkdGgvMit0LngrZSx0aGlzLmNhbnZhcy5oZWlnaHQvMitvKSx0aGlzLmNvbnRleHQucm90YXRlKCh0LmRpcmVjdGlvbi05MCkqTWF0aC5QSS8xODApLCJob3IiPT10LmZsaXA/dGhpcy5jb250ZXh0LnNjYWxlKC0xLDEpOiJ2ZXIiPT10LmZsaXAmJnRoaXMuY29udGV4dC5zY2FsZSgxLC0xKSx0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHQuaW1hZ2UsdC53aWR0aC8tMix0LmhlaWdodC8tMix0LndpZHRoLHQuaGVpZ2h0KX1jYXRjaCh0KXt9dGhpcy5jb250ZXh0LnJlc3RvcmUoKX0sX2RyYXdNb25pdG9yOmZ1bmN0aW9uKHQpe3RoaXMuY29udGV4dC5zYXZlKCk7dHJ5e2lmKHQudmlzaWJsZSl7dGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhPTEsdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgwLDApLHJlbmRlcmVyLmNvbnRleHQuZm9udD0iMTVweCBhcmlhbCI7dmFyIGU9cmVuZGVyZXIuY29udGV4dC5tZWFzdXJlVGV4dCh0LnZhbHVlKS53aWR0aCxvPXJlbmRlcmVyLmNvbnRleHQubWVhc3VyZVRleHQodC5uYW1lKS53aWR0aC0yNTtyZXR1cm4gdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhPTEscmVuZGVyZXIuY29udGV4dC5maWxsU3R5bGU9IiM4NjhlOTYiLHJlbmRlcmVyLmNvbnRleHQuZmlsbFJlY3QodC54LTIsdC55LTIsNzQrbytlLDI0KSxyZW5kZXJlci5jb250ZXh0LmZpbGxTdHlsZT0iI2NlZDRkYSIscmVuZGVyZXIuY29udGV4dC5maWxsUmVjdCh0LngsdC55LDcwK28rZSwyMCkscmVuZGVyZXIuY29udGV4dC5maWxsU3R5bGU9IiNmZjhjMDAiLHJlbmRlcmVyLmNvbnRleHQuZmlsbFJlY3QodC54KzYwLHQueSszLDUrbytlLDE1KSxyZW5kZXJlci5jb250ZXh0LmZpbGxTdHlsZT0id2hpdGUiLHJlbmRlcmVyLmNvbnRleHQuZmlsbFRleHQodC52YWx1ZSx0LngrNjAsdC55KzE1KSxyZW5kZXJlci5jb250ZXh0LmZpbGxTdHlsZT0iYmxhY2siLHJlbmRlcmVyLmNvbnRleHQuZmlsbFRleHQodC5uYW1lLHQueCs2LHQueSsxNSkse3dpZHRoOjc0K28rZSxoZWlnaHQ6MjQseDp0LngseTp0Lnl9fX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfXRoaXMuY29udGV4dC5yZXN0b3JlKCl9LGNvbG9yOiIjZmZmZmZmIn07
		"></script>
		<script>
			
			document.getElementById("app").hidden = false;
			document.getElementById("loading").hidden = true;
			var file = (${gui.editorToJsonText()});
			document.title = file.title;
			document.onclick = function () {
				renderer.canvas = document.getElementById("gameScreen");
				vm.code = "";
				vm.attachRenderer(renderer);
				vm.attachAudioEngine(audioEngine);
				function getMousePos(canvas, evt) {
					var rect = canvas.getBoundingClientRect();
					return {
						x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width)/2,
						y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
					};
				}
				function readFiles(files) {
					var index = 0;
					while (index < files.length) {
						window.vm.project.resources[files[index].name] = {
							name:files[index].name,
							data:files[index].data,
							type:files[index].type
						};
						index += 1;
					}
				}
				document.getElementById("gameScreen").onmousemove = function (event) {
					var pos = getMousePos(document.getElementById("gameScreen"), event);// get adjusted coordinates as above
					var x = Math.round(pos.x/1)-(document.getElementById("gameScreen").width/2)/2;
					var y = Math.round(pos.y*-1)+(document.getElementById("gameScreen").height/2);
					
					vm.setMousePos({
						x:x,
						y:y
					});
				}
				document.getElementById("gameScreen").onmousedown = function (event) {
					event.preventDefault();
					vm.setMouseDown(true);
				}
				document.body.onmouseup = function (event) {
					event.preventDefault();
					vm.setMouseDown(false);
				}
				document.body.onkeydown = function (event) {
					vm.simulateKey({
						key:event.key,
						down:true
					});
					event.preventDefault();
				};
				document.body.onkeyup = function (event) {
					vm.simulateKey({
						key:event.key,
						down:false
					});
				};
				readFiles(file.files)
				vm.code = file.code;
				document.getElementById("gameScreen").hidden = false;
				//document.getElementById("logo").hidden = true;
				document.getElementById("text").hidden = true;
				vm.start();
				document.onclick = null;
			};
		</script>
	</body>
</html>
	`;
    var a = document.createElement("a");
    const contents = html;
    const blob = new Blob([contents], {
        type: 'html'
    });
    a.href = URL.createObjectURL(blob);
    a.download = document.getElementById("gameTitle").value + ".html";
    a.click();
}

//make it so a dailog will show when the user closes the page
window.showSaveDialog = true;
if (window.options.confirmDialog) {
    setInterval(() => {
		if (window.showSaveDialog) {
			window.onbeforeunload = function () {
				return "empty";
			};
		} else {
			window.onbeforeunload = null;
		}
    });
}

//new game
document.getElementById("New_Game").onclick = function () {
    if (window.confirm('Do You Want To Start Over? Once You Click Ok, You Cannot Recover It.')) {
        workspace.clear();
        clearResources();
        loadDefaultGame();
    }
};

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  vm.code = code;
  window.showSaveDialog = true;
}
workspace.addChangeListener(myUpdateFunction);