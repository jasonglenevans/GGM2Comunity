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
        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * renderer.width) / 2,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * renderer.height
    };
}
document.getElementById("gameScreen").onmousemove = function (event) {
    var pos = getMousePos(document.getElementById("gameScreen"), event); // get adjusted coordinates as above
    var x = Math.round(pos.x / 1) - (renderer.width / 2) / 2;
    var y = Math.round(pos.y * -1) + (renderer.height / 2);

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
resoureupload.multiple = true;
resoureupload.onchange = function () {
    if (resourceupload.files[0]) {
		for (const file of resourceupload.files) {
			const reader = new FileReader();
			console.log(file.name)
			reader.onload = function () {
				readFileAsResource(reader.result, file.name, file.type.split('/')[0]);
				resourceupload.value = "";
			}
			console.log(file.size);
			if (file.size > 7000000 && window.options.addMaxFileSize) {
				window.alert("file is too big! for reasons you cant upload something too big, if its music, please compress and find loops, it should help you");
			} else {
				reader.readAsDataURL(file);
			}
		}
    }
};

function save() {
/*     var a = document.createElement("a");
    const contents = gui.editorToJsonText();
    const blob = new Blob([contents], {
        type: 'ggm2g'
    });
    a.href = URL.createObjectURL(blob);
    a.download = document.getElementById("gameTitle").value + ".ggm2g";
    a.click(); */
	gui.requestSaveFile();
}
function load() {
   // document.getElementById("gameFileUpload").click();
   gui.requestLoadFile();
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
			<center style="width: 100%;height: 100vh;position: fixed;top: 0;left: 0;">
				<canvas id="gameScreen" hidden width=600 height=360 style="image-rendering:pixelated;"></canvas>
			</center>
		</div>
		<!--TODO: replace the vm src with the compressed vm-->
		<script src="
			data:text/javascript;base64,ZXZhbChhdG9iKCJkMmx1Wkc5M0xuWnRJRDBnZXdvSlpHRjVjMU5wYm1ObE1qQXdNRHBtZFc1amRHbHZiaUFvS1NCN0Nna0pZMjl1YzNRZ2JYTlFaWEpFWVhrZ1BTQXlOQ0FxSURZd0lDb2dOakFnS2lBeE1EQXdPd29KQ1dOdmJuTjBJSE4wWVhKMElEMGdibVYzSUVSaGRHVW9NakF3TUN3Z01Dd2dNU2s3SUM4dklFMXZiblJvY3lCaGNtVWdNQzFwYm1SbGVHVmtMZ29KQ1dOdmJuTjBJSFJ2WkdGNUlEMGdibVYzSUVSaGRHVW9LVHNLQ1FsamIyNXpkQ0JrYzNSQlpHcDFjM1FnUFNCMGIyUmhlUzVuWlhSVWFXMWxlbTl1WlU5bVpuTmxkQ2dwSUMwZ2MzUmhjblF1WjJWMFZHbHRaWHB2Ym1WUFptWnpaWFFvS1RzS0NRbHNaWFFnYlZObFkzTlRhVzVqWlZOMFlYSjBJRDBnZEc5a1lYa3VkbUZzZFdWUFppZ3BJQzBnYzNSaGNuUXVkbUZzZFdWUFppZ3BPd29KQ1cxVFpXTnpVMmx1WTJWVGRHRnlkQ0FyUFNBb0tIUnZaR0Y1TG1kbGRGUnBiV1Y2YjI1bFQyWm1jMlYwS0NrZ0xTQmtjM1JCWkdwMWMzUXBJQ29nTmpBZ0tpQXhNREF3S1RzS0NRbHlaWFIxY200Z2JWTmxZM05UYVc1alpWTjBZWEowSUM4Z2JYTlFaWEpFWVhrN0NnbDlMQW9KYVdSamIzVnVkR1Z5T2pBc0NnbHpkR0Z5ZEZScGJXVTZNQ3dLQ1hKbGMyVjBWR2x0WlhJNktDa2dQVDRnZXdvSkNYWnRMbk4wWVhKMFZHbHRaU0E5SUhadExtUmhlWE5UYVc1alpUSXdNREFvS1NvNE5qUXdNRHNLQ1FsMmJTNXdjbTlxWldOMExuUnBiV1Z5SUQwZ01Ec0tDWDBzQ2dsamIyNTBjbTlzT2lCN0Nna0pjM1JoY25RNllYTjVibU1nWm5WdVkzUnBiMjRnS0dFcElIc0tDUWtKYVdZZ0tIWnRMbUYxWkdsdlJXNW5hVzVsS1NCN0Nna0pDUWxwWmlBb2RtMHVjbVZ1WkdWeVpYSXBJSHNLQ1FrSkNRbG1iM0lnS0haaGNpQnVZVzFsSUc5bUlIWnRMbkJ5YjJwbFkzUXVjbVZ6YjNWeVkyVnpLU0I3Q2drSkNRa0pDV2xtSUNoMmJTNXdjbTlxWldOMExuSmxjMjkxY21ObGMxdHVZVzFsWFM1MGVYQmxJRDA5SUNKaGRXUnBieUlwSUhzS0NRa0pDUWtKQ1dGM1lXbDBJSFp0TG1GMVpHbHZSVzVuYVc1bExtRmtaRlJ2VUhKbGJHOWhaQ2gyYlM1d2NtOXFaV04wTG5KbGMyOTFjbU5sYzF0dVlXMWxYUzVrWVhSaEtUc0tDUWtKQ1FrSmZRb0pDUWtKQ1gwS0NRa0pDUWwyYlM1amIyNTBjbTlzTG5OMGIzQW9LVHNLQ1FrSkNRbDJiUzV5WlhObGRGUnBiV1Z5S0NrN0Nna0pDUWtKZG0wdVkyOXVkSEp2YkM1eWRXNXVhVzVuSUQwZ2RISjFaVHNLQ1FrSkNRbDJiUzVwWkdOdmRXNTBaWElnUFNBd093b0pDUWtKQ1hadExuQnliMnBsWTNRdWJXOXVhWFJ2Y25NZ1BTQmJYVHNLQ1FrSkNRbDNhVzVrYjNjdWRtMHVjbVZ1WkdWeVpYSXVZMkZ0WjJodmMzUWdQU0F3T3dvSkNRa0pDWGRwYm1SdmR5NTJiUzV5Wlc1a1pYSmxjaTVpWnk1emNtTWdQU0FpSWpzS0NRa0pDUWwwY25sN0Nna0pDUWtKQ1M4cUtnb0pDUWtKQ1FrZ1puVjBkWEpsSUhWd1pHRjBaVG9nYVNCdFlYa2dZV1JrSUdabGRHTm9JR0pzYjJOcmN5d0tDUWtKQ1FrSklITnZJR2tnZDJsc2JDQnVaV1ZrSUdGemVXNWpJR1oxYm1OMGFXOXVjeTRLQ1FrSkNRa0pLaThLQ1FrSkNRa0paWFpoYkNoMmJTNWpiMlJsS1RzS0NRa0pDUWw5WTJGMFkyZ29aU2w3Q2drSkNRa0pDWFp0TG1OdmJuTnZiR1V1WlhKeWIzSW9Ja1Z5Y205eUlHbHVJSE5qY21sd2REb2lLMlVwT3dvSkNRa0pDWDBLQ1FrSkNYMGdaV3h6WlNCN0Nna0pDUWtKZEdoeWIzY2dSWEp5YjNJb0lsSmxibVJsY21WeUlFMTFjM1FnUW1VZ1FYUjBZV05vWldRaUtUc0tDUWtKQ1gwS0NRa0pmU0JsYkhObElIc0tDUWtKQ1hSb2NtOTNJRVZ5Y205eUtDSkJkV1JwYjBWdVoybHVaU0JOZFhOMElFSmxJRUYwZEdGamFHVmtJaWs3Q2drSkNYMEtDUWw5TEFvSkNYTjBiM0E2SUdaMWJtTjBhVzl1SUNncElIc0tJQWtKQ1dadmNpQW9kbUZ5SUdrZ2FXNGdkbTB1Y0hKdmFtVmpkQzUwYVcxbGIzVjBjeWtnZXdvSkNRa0pZMnhsWVhKVWFXMWxiM1YwS0hadExuQnliMnBsWTNRdWRHbHRaVzkxZEhOYmFWMHBPd29KQ1FsOUNna0pDWFp0TG5CeWIycGxZM1F1ZEdsdFpXOTFkSE1nUFNCYlhUc0tDUWtKZG0wdWFXUmpiM1Z1ZEdWeUlEMGdNRHNLQ1FrSmRtMHVZMjl1ZEhKdmJDNXlkVzV1YVc1bklEMGdabUZzYzJVN0Nna0pDWFp0TG5CeWIycGxZM1F1YzNCeWFYUmxjeUE5SUZ0ZE93b0pDUWwyYlM1d2NtOXFaV04wTG1WMlpXNTBjeTUwYVdOcklEMGdXMTA3Q2drSkNYWnRMbkJ5YjJwbFkzUXVjM0J5YVhSbGN5QTlJRnRkT3dvSkNRbDJiUzV3Y205cVpXTjBMbXRsZVhOUWNtVnpjMlZrSUQwZ1cxMDdDZ2tKQ1hadExtRjFaR2x2Ulc1bmFXNWxMbk4wYjNBb0tUc0tDUWtKZEhKNWV3b0pDUWtKZDJsdVpHOTNMblp0TG05dWMzUnZjQ2dwT3dvSkNRbDlZMkYwWTJnb1pTbDdZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdDlDZ2tKZlN3S0NRbHlkVzV1YVc1bk9tWmhiSE5sQ2dsOUxBb0pZMjlrWlRvZ0lpSXNDZ2x5Wlc1a1pYSmxjanB1ZFd4c0xBb0pZWFIwWVdOb1VtVnVaR1Z5WlhJNlpuVnVZM1JwYjI0Z0tHRXBJSHNLQ1FsMmJTNXlaVzVrWlhKbGNpQTlJR0U3Q2drSmRtMHVjbVZ1WkdWeVpYSXVjM1JoY25Rb0tUc0tDUWx5WlhSMWNtNGdZVHNLQ1gwc0NnbGhkSFJoWTJoQmRXUnBiMFZ1WjJsdVpUcG1kVzVqZEdsdmJpQW9ZU2tnZXdvSkNYWnRMbUYxWkdsdlJXNW5hVzVsSUQwZ1lUc0tDUWx5WlhSMWNtNGdZVHNLQ1gwc0NnbHpaWFJEYjIxd2FXRmthV0pzYVhSNVRXOWtaVHBtZFc1amRHbHZiaUFvWVNrZ2V3b0pDWFJvYVhNdVkyOXRjR2xoWkdsaWJHbDBlVTF2WkdVZ1BTQmhPd29KZlN3S0NXTnZiWEJwWVdScFlteHBkSGxOYjJSbE9pQm1ZV3h6WlN3S0NYQnliMnBsWTNRNklIc0tDUWx0YjNWelpVUnZkMjQ2SUdaaGJITmxMQW9KQ1cxdmRYTmxXRG93TEFvSkNXMXZkWE5sV1Rvd0xBb0pDV3RsZVhOUWNtVnpjMlZrT2x0ZExBb0pDWE53Y21sMFpYTTZXMTBzQ2drSlpYWmxiblJ6T2lCN0Nna0pDWFJwWTJzNklGdGRDZ2tKZlN3S0NRbHRiMjVwZEc5eWN6cGJYU3dLQ1FseVpYTnZkWEpqWlhNNlcxMHNDZ2tKZEdsdFpYSTZNQ3dLQ1FsMGFXMWxiM1YwY3pwYlhTd0tDUWxpYkc5amF6cDdDZ2tKQ1hScFkydEJjM2x1WXpwbWRXNWpkR2x2YmlBb0tTQjdDZ2tKQ1FseVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tHRXBJRDArSUhzS0NRa0pDUWx6WlhSVWFXMWxiM1YwS0dFc01TazdDZ2tKQ1FsOUtRb0pDUWw5TEFvSkNRbDNZV2wwUVhONWJtTTZablZ1WTNScGIyNGdLSE1wSUhzS0NRa0pDWEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvWVNrZ1BUNGdld29KQ1FrSkNYWnRMbkJ5YjJwbFkzUXVkR2x0Wlc5MWRITXVjSFZ6YUNoelpYUlVhVzFsYjNWMEtHRXNjeW94TURBd0tTazdDZ2tKQ1FsOUtRb0pDUWw5TEFvSkNRbHRiM1psVTNSbGNITTZablZ1WTNScGIyNGdLSE53Y21sMFpTeHpkR1Z3Y3lrZ2V3b0pDUWtKZEhKNWV3b0pDUWtKZG1GeUlISmxZV3h6ZEdWd2N5QTlJSE4wWlhCek93b0pDUWtKZG1GeUlISmxZV3hrYVhJZ1BTQTVNQzF6Y0hKcGRHVXVaR2x5WldOMGFXOXVPd29KQ1FrSmRtRnlJSGhDZVNBOUlFMWhkR2d1WTI5ektISmxZV3hrYVhJZ0tpQW9UV0YwYUM1UVNTOHhPREFwS1NweVpXRnNjM1JsY0hNN0Nna0pDUWwyWVhJZ2VVSjVJRDBnVFdGMGFDNXphVzRvY21WaGJHUnBjaUFxSUNoTllYUm9MbEJKTHpFNE1Da3BLbkpsWVd4emRHVndjenNLQ1FrSkNYWmhjaUJ5WldGc2VHSjVJRDBnZUVKNUlDc2dlRUo1T3dvSkNRa0pjM0J5YVhSbExuZ2dQU0J6Y0hKcGRHVXVlQ0FySUhKbFlXeDRZbms3Q2drSkNRbHpjSEpwZEdVdWVTQTlJSE53Y21sMFpTNTVJQ3NnS0hsQ2VTdDVRbmtwT3dvSkNRa0pmV05oZEdOb0tHVXBlM1p0TG1OdmJuTnZiR1V1WlhKeWIzSW9Ja1Z5Y205eUlHbHVJSE5qY21sd2REb2lLMlVwTzMwS0NRa0pmU3dLQ1FrSlpHVnNaWFJsVEdsemREcG1kVzVqZEdsdmJpQW9ZWEp5WVhrc2JuVnRZbVZ5S1NCN0Nna0pDUWwwY25sN0Nna0pDUWxrWld4bGRHVWdZWEp5WVhsYmJuVnRZbVZ5WFRzS0NRa0pDWFpoY2lCcGJtUmxlQ0E5SURBN0Nna0pDUWwyWVhJZ1oyVnVZWEpoZEdWa1FYSnlZWGtnUFNCYlhUc0tDUWtKQ1hkb2FXeGxJQ2hoY25KaGVTNXNaVzVuZEdnZ1BpQnBibVJsZUNrZ2V3b0pDUWtKQ1dsbUlDZ2hLR0Z5Y21GNVcybHVaR1Y0WFNBOVBTQjFibVJsWm1sdVpXUXBLU0I3Q2drSkNRa0pDV2RsYm1GeVlYUmxaRUZ5Y21GNUxuQjFjMmdvWVhKeVlYbGJhVzVrWlhoZEtUc0tDUWtKQ1FsOUNna0pDUWtKYVc1a1pYZ2dLejBnTVRzS0NRa0pDWDBLQ1FrSkNYSmxkSFZ5YmlCblpXNWhjbUYwWldSQmNuSmhlVHNLQ1FrSkNYMWpZWFJqYUNobEtYdDJiUzVqYjI1emIyeGxMbVZ5Y205eUtDSkZjbkp2Y2lCcGJpQnpZM0pwY0hRNklpdGxLVHQ5Q2drSkNYMHNDZ2tKQ1cxaGEyVlRjSEpwZEdVNlpuVnVZM1JwYjI0Z0tDa2dld29KQ1FrSmRISjVld29KQ1FrSmRtMHVhV1JqYjNWdWRHVnlJQ3M5SURFN0Nna0pDUWwyWVhJZ2MzQnlJRDBnZXdvSkNRa0pDV1JwY21WamRHbHZiam81TUN3S0NRa0pDUWw0T2pBc0Nna0pDUWtKZVRvd0xBb0pDUWtKQ1hkcFpIUm9Pak15TEFvSkNRa0pDV2hsYVdkb2REb3pNaXdLQ1FrSkNRbHBiV0ZuWlRwdWRXeHNMQW9KQ1FrSkNXWnNhWEE2SW01dmJtVWlMQW9KQ1FrSkNXbGtPblp0TG1sa1kyOTFiblJsY2l3S0NRa0pDUWxuYUc5emREb3dMQW9KQ1FrSkNXTnNhV05yWldRNklGdGRDZ2tKQ1FsOU93b0pDUWtKZEdocGN5NXphRzkzVTNCeWFYUmxLSE53Y2lrN0Nna0pDUWx5WlhSMWNtNGdjM0J5T3dvSkNRa0pkSEo1ZXdvSkNRa0pDWGRwYm1SdmR5NTJiUzV2Ym5Od2NtbDBaV055WldGMFpTaHpjSElwT3dvSkNRa0pmV05oZEdOb0tHVXBlMk52Ym5OdmJHVXVaWEp5YjNJb1pTazdmUW9KQ1FrSmZXTmhkR05vS0dVcGUzMEtDZ2tKQ1gwc0Nna0pDVzFoYTJWTmIyNXBkRzl5T2lCbWRXNWpkR2x2YmlBb0tTQjdDZ2tKQ1FsMGNubDdDZ2tKQ1FsMllYSWdiVzl1YVhSdmNpQTlJSHNLQ1FrSkNRbDRPakFzQ2drSkNRa0plVG93TEFvSkNRa0pDWFpoYkhWbE9qQXNDZ2tKQ1FrSmJtRnRaVG9pYlc5dWFYUnZjaUlzQ2drSkNRa0pkbWx6YVdKc1pUcDBjblZsTEFvSkNRa0pDV05zYVdOclpXUTZJRnRkQ2drSkNRbDlPd29KQ1FrSmQybHVaRzkzTG5adExuQnliMnBsWTNRdWJXOXVhWFJ2Y25NdWNIVnphQ2h0YjI1cGRHOXlLVHNLQ1FrSkNYSmxkSFZ5YmlCdGIyNXBkRzl5T3dvSkNRa0pmV05oZEdOb0tHVXBlM1p0TG1OdmJuTnZiR1V1WlhKeWIzSW9Ja1Z5Y205eUlHbHVJSE5qY21sd2REb2lLMlVwTzMwS0NRa0pmU3dLQ1FrSmMyaHZkMU53Y21sMFpUcG1kVzVqZEdsdmJpQW9jM0J5S1NCN0Nna0pDUWwwY25sN0Nna0pDUWtKZEdocGN5NW9hV1JsVTNCeWFYUmxLSE53Y2lrN0lDOHZaVzV6ZFhKbElIUm9aWEpsSUdseklHOXViSGtnYjI1bElITndjbWwwWlNCM2FHVnVJSE5vYjNkcGJtY2dZV2RoYVc0dUNna0pDUWtKZG0wdWNISnZhbVZqZEM1emNISnBkR1Z6TG5CMWMyZ29jM0J5S1RzS0NRa0pDWDFqWVhSamFDaGxLWHQyYlM1amIyNXpiMnhsTG1WeWNtOXlLQ0pGY25KdmNpQnBiaUJ6WTNKcGNIUTZJaXRsS1R0OUNna0pDWDBzQ2drSkNXaHBaR1ZUY0hKcGRHVTZablZ1WTNScGIyNGdLSE53Y2lrZ2V3b0pDUWtKZEhKNWV3b0pDUWtKZG1GeUlHa2dQU0IyYlM1d2NtOXFaV04wTG5Od2NtbDBaWE11YVc1a1pYaFBaaWh6Y0hJcE93b0pDUWtKYVdZZ0tHa2dQaUF0TVNrZ2V3b0pDUWtKQ1hadExuQnliMnBsWTNRdWMzQnlhWFJsY3k1emNHeHBZMlVvYVN3Z01TazdJQzh2SURKdVpDQndZWEpoYldWMFpYSWdiV1ZoYm5NZ2NtVnRiM1psSUc5dVpTQnBkR1Z0SUc5dWJIa0tDUWtKQ1gwS0NRa0pDWDFqWVhSamFDaGxLWHQ5Q2drSkNYMHNDZ2tKQ1dOdmN6cG1kVzVqZEdsdmJpQW9iblZ0WW1WeUtTQjdDZ2tKQ1FsMGNubDdDZ2tKQ1FseVpYUjFjbTRnVFdGMGFDNWpiM01vS0c1MWJXSmxjaWtxSUNoTllYUm9MbEJKTHpFNE1Da3BPd29KQ1FrSmZXTmhkR05vS0dVcGUzWnRMbU52Ym5OdmJHVXVaWEp5YjNJb1pTazdmUW9KQ1FsOUxBb0pDUWx6YVc0NlpuVnVZM1JwYjI0Z0tHNTFiV0psY2lrZ2V3b0pDUWtKZEhKNWV3b0pDUWtKY21WMGRYSnVJRTFoZEdndWMybHVLQ2h1ZFcxaVpYSXBLaUFvVFdGMGFDNVFTUzh4T0RBcEtUc0tDUWtKQ1gxallYUmphQ2hsS1h0MmJTNWpiMjV6YjJ4bExtVnljbTl5S0dVcE8zMEtDUWtKZlN3S0NRa0paMlYwVFc5elpVUmhkR0U2Wm5WdVkzUnBiMjRnS0NrZ2V3b0pDUWtKZEhKNWV3b0pDUWtKY21WMGRYSnVJSHNLQ1FrSkNRbDRPblp0TG5CeWIycGxZM1F1Ylc5MWMyVllMQW9KQ1FrSkNYazZkbTB1Y0hKdmFtVmpkQzV0YjNWelpWa3NDZ2tKQ1FrSlpHOTNianAyYlM1d2NtOXFaV04wTG0xdmRYTmxSRzkzYmdvSkNRa0pmVHNLQ1FrSkNYMWpZWFJqYUNobEtYdDlDZ2tKQ1gwc0Nna0pDV1JoZEdGVWIwbHRaenBtZFc1amRHbHZiaUFvWkdGMFlWVlNTU2tnZXdvSkNRa0pkSEo1ZXdvSkNRa0pkbUZ5SUdsdFp5QTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ltbHRaeUlwT3dvSkNRa0phVzFuTG5OeVl5QTlJR1JoZEdGVlVrazdDZ2tKQ1FscGJXY3VjMlYwUVhSMGNtbGlkWFJsS0NKemRIbHNaU0lzSW1sdFlXZGxMWEpsYm1SbGNtbHVaem9nY0dsNFpXeGhkR1ZrT3lJcE93b0pDUWtKY21WMGRYSnVJR2x0WnpzS0NRbDlZMkYwWTJnb1pTbDdmUW9KQ1FsOUxBb0pDUWx5WVc1a2IyMDZJR1oxYm1OMGFXOXVJQ2hoTENCaUtTQjdDZ2tKQ1NBZ2FXWWdLR0VnUGlCaUtTQjdDZ2tKQ1Frdkx5QlRkMkZ3SUdFZ1lXNWtJR0lnZEc4Z1pXNXpkWEpsSUdFZ2FYTWdjMjFoYkd4bGNpNEtDUWtKQ1haaGNpQmpJRDBnWVRzS0NRa0pDV0VnUFNCaU93b0pDUWtKWWlBOUlHTTdDZ2tKQ1NBZ2ZRb0pDUWtnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUFvWWlBdElHRWdLeUF4S1NBcklHRXBPd29KQ1FsOUxBb0pDUWxwYzFSdmRXTm9hVzVuT2lCbWRXNWpkR2x2YmlBb2MzQnlhWFJsTVN4emNISnBkR1V5TENCdGIyUmxLU0I3Q2drSkNRa3ZLbWxtSUNoemNERXVlQ0ErSUhOd01pNTRLU0I3Q2drSkNRa0pkbUZ5SUdSbGRtbGtaVTUxYlZnZ1BTQXRNanNLQ1FrSkNYMGdaV3h6WlNCN0Nna0pDUWtKZG1GeUlHUmxkbWxrWlU1MWJWZ2dQU0F5T3dvSkNRa0pmUW9KQ1FrSmMzQXhMbmdnTFQwZ2MzQXhMbmRwWkhSb0wyUmxkbWxrWlU1MWJWZzdDZ2tKQ1FsMllYSWdjbVZ6SUQwZ0tBb0pDUWtKYzNBeExuZ2dQQ0J6Y0RJdWVDQXJJQ2h6Y0RJdWQybGtkR2d2TVNrZ0ppWUtDUWtKQ1hOd01TNTRJQ3NnS0hOd01TNTNhV1IwYUM4eEtTQStJSE53TWk1NElDWW1DZ2tKQ1FsemNERXVlU0E4SUhOd01pNTVJQ3NnYzNBeUxtaGxhV2RvZENBbUpnb0pDUWtKYzNBeExtaGxhV2RvZENBcklITndNUzU1SUQ0Z2MzQXlMbmtLQ1FrSkNTazdDZ2tKQ1FsemNERXVlQ0FyUFNCemNERXVkMmxrZEdndlpHVjJhV1JsVG5WdFdEc0tDUWtKQ1hKbGRIVnliaUJ5WlhNN0tpOEtDUWtKQ1hSeWVYc0tDUWtKQ1hKbGRIVnliaUIyYlM1ZlgxOURTRVZEUzBOUFRFeEpSRVVvYzNCeWFYUmxNU3h6Y0hKcGRHVXlLVHNLQ1FrSkNYMWpZWFJqYUNobEtYdDJiUzVqYjI1emIyeGxMbVZ5Y205eUtDSkZjbkp2Y2lCcGJpQnpZM0pwY0hRNklpdGxLVHQ5Q2drSkNYMHNDZ2tKQ1dkbGRFdGxlVkJ5WlhOelpXUTZJR1oxYm1OMGFXOXVJQ2hyWlhsdVlXMWxLU0I3Q2drSkNRbDBjbmw3Q2drSkNRbHBaaUFvZG0wdWNISnZhbVZqZEM1clpYbHpVSEpsYzNObFpGdHJaWGx1WVcxbFhTa2dld29KQ1FrSkNYSmxkSFZ5YmlCMGNuVmxPd29KQ1FrSmZTQmxiSE5sSUhzS0NRa0pDUWx5WlhSMWNtNGdabUZzYzJVN0Nna0pDUWw5Q2drSkNRbDlZMkYwWTJnb1pTbDdmUW9KQ1FsOUxBb0pDUWwzWVdsME9tWjFibU4wYVc5dUlDaHpaV056TEdOaGJHeGlZV05yS1NCN0Nna0pDUWwwY25sN0Nna0pDUWtKTHlvcVZYQmtZWFJsSUVadmNpQldNUzQxTGpBaENna0pDUWtKUm1sNFpXUWdRU0JDZFdjZ1YyaGxjbVVnU1dZZ1dXOTFJRk4wYjNBZ1ZHaGxJRkJ5YjJwbFkzUWdRVzVrSUZKMWJpQkpkQ3dLQ1FrSkNRbEJiR3dnVkdobElGZGhhWFJ6SUZkcGJHd2dVblZ1SUVsbUlGUm9aWGtnUVhKbElFNXZkQ0JQZG1WeUlGbGxkQzRLQ1FrSkNRbFVieUJHYVhnZ1ZHaHBjeXdnU1NCVmMyVmtJRUZ1SUdOc1pXRnlWR2x0Wlc5MWRDZ3BJRVoxYm1OMGFXOXVJRVp2Y2lCRllXTm9JRTl1WlM0S0NRa0pDUWtxTHdvSkNRa0pDWFp0TG5CeWIycGxZM1F1ZEdsdFpXOTFkSE11Y0hWemFDaHpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIc0tDUWtKQ1FrSmFXWWdLSGRwYm1SdmR5NTJiUzVqYjI1MGNtOXNMbkoxYm01cGJtY3BJSHNLQ1FrSkNRa0pDV05oYkd4aVlXTnJLQ2s3Q2drSkNRa0pDWDBLQ1FrSkNRbDlMSE5sWTNNcU1UQXdNQ2twT3lBdktqRXdNREJ0Y3lBOUlERWdjMlZqYjI1a0tpOEtDUWtKQ1gxallYUmphQ2hsS1h0OUNna0pDWDBzQ2drSkNXZGxkRlJ2ZFdOb1RXOTFjMlU2SUdaMWJtTjBhVzl1SUNoemNISXBJSHNLQ1FrSkNYSmxkSFZ5YmlCM2FXNWtiM2N1ZG0wdVgxOWZRMGhGUTB0RFQweE1TVVJGS0h0NE9uZHBibVJ2ZHk1MmJTNXdjbTlxWldOMExtMXZkWE5sV0N4NU9uZHBibVJ2ZHk1MmJTNXdjbTlxWldOMExtMXZkWE5sV1N4M2FXUjBhRG94TEdobGFXZG9kRG94ZlN4emNISXBPd29KQ1FsOUxBb0pDUWxqYUdGdVoyVkRiMnh2Y2tWbVptVmpkRHBtZFc1amRHbHZiaUFvYVcxbkxISXNaeXhpS1NCN0Nna0pDUWxwYldjdWMzSmpJRDBnZDJsdVpHOTNMblp0TG5KbGJtUmxjbVZ5TG1kbGRFTnZiRzl5UldabVpXTjBLR2x0Wnl4eUxHY3NZaWs3Q2drSkNYMHNDZ2tKQ1cxcFkxWnZiSFZ0WlRwbWRXNWpkR2x2YmlBb0tTQjdDZ2tKQ1FscFppQW9kMmx1Wkc5M0xuWnRMbkpsYm1SbGNtVnlMbU5oYlhKMWJpa2dld29KQ1FrSkNYSmxkSFZ5YmlCM2FXNWtiM2N1ZG0wdWNtVnVaR1Z5WlhJdWJXbGpkbTlzT3dvSkNRa0pmU0JsYkhObElIc0tDUWtKQ1FseVpYUjFjbTRnTURzS0NRa0pDWDBLQ1FrSmZTd0tDUWtKYjNCbGJrTmhiV1Z5WVRwbWRXNWpkR2x2YmlBb0tTQjdDZ2tKQ1FsM2FXNWtiM2N1ZG0wdWNtVnVaR1Z5WlhJdWMzUmhjblJEWVcxbGNtRlRkSEpsWVcwb0tUc0tDUWtKZlN3S0NRa0pjM1J2Y0VOaGJXVnlZVHBtZFc1amRHbHZiaUFvS1NCN0Nna0pDUWwzYVc1a2IzY3VkbTB1Y21WdVpHVnlaWEl1YzNSdmNFTmhiV1Z5WVZOMGNtVmhiU2dwT3dvSkNRbDlDZ2tKZlFvSmZTd0tDWFpoY21saFlteGxjenA3Q2drSlkyRnVSSEpoWnpwbVlXeHpaUW9KZlN3S0NYWnRWR2xqYXpvZ1puVnVZM1JwYjI0Z0tDa2dld29KQ1dsbUlDaDJiUzVqYjI1MGNtOXNMbkoxYm01cGJtY3BJSHNLQ1FrSmRtMHVjSEp2YW1WamRDNTBhVzFsY2lBOUlDaDJiUzVrWVhselUybHVZMlV5TURBd0tDa3FPRFkwTURBcExYWnRMbk4wWVhKMFZHbHRaVHNLQ1FrSlptOXlJQ2gyWVhJZ2FTQnBiaUIyYlM1d2NtOXFaV04wTG1WMlpXNTBjeTUwYVdOcktTQjdDZ2tKQ1FsMGNubDdDZ2tKQ1FrSmRtMHVjSEp2YW1WamRDNWxkbVZ1ZEhNdWRHbGphMXRwWFNncENna0pDUWw5WTJGMFkyZ29aU2w3ZG0wdVkyOXVjMjlzWlM1bGNuSnZjaWhsS1R0OUNna0pDWDBLQ1FrSmRISjVld29KQ1FrSmRtMHVjbVZ1WkdWeVpYSXVkR2xqYXloMmJTNXdjbTlxWldOMExuTndjbWwwWlhNc2RtMHVjSEp2YW1WamRDNXRiMjVwZEc5eWN5azdDZ2tKQ1gxallYUmphQ2hsS1h0OUNna0pDWFJvYVhNdWRHbGphM01nS3owZ01Ec0tDUWtKZEhKNWV3b0pDUWtKZDJsdVpHOTNMblp0TG05dWRHbGpheWdwT3dvSkNRbDlZMkYwWTJnb1pTbDdZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdDlDZ2tKZlNCbGJITmxJSHNLQ1FrSmRHaHBjeTUwYVdOcmN5QTlJREE3Q2drSmZRb0pDWGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvZG0wdWRtMVVhV05yS1RzS0NYMHNDZ2x6ZEdGeWREcG1kVzVqZEdsdmJpQW9LU0I3Q2drSmRtMHVZMjl1ZEhKdmJDNXpkR0Z5ZENncE93b0pmU3dLQ1hOMGIzQTZablZ1WTNScGIyNGdLQ2tnZXdvSkNYWnRMbU52Ym5SeWIyd3VjM1J2Y0NncE93b0pmU3dLQ1hObGRFMXZkWE5sVUc5ek9pQm1kVzVqZEdsdmJpQW9aR0YwWVNrZ2V3b0pDWFJvYVhNdWNISnZhbVZqZEM1dGIzVnpaVmdnUFNCa1lYUmhMbmc3Q2drSmRHaHBjeTV3Y205cVpXTjBMbTF2ZFhObFdTQTlJR1JoZEdFdWVUc0tDWDBzQ2dselpYUk5iM1Z6WlVSdmQyNDZJR1oxYm1OMGFXOXVJQ2hrWVhSaEtTQjdDZ2tKYVdZZ0tHUmhkR0VnUFQwZ2RISjFaU2tnZXdvSkNRbG1iM0lnS0haaGNpQnBJR2x1SUhadExuQnliMnBsWTNRdWMzQnlhWFJsY3lrZ2V3b0pDUWtKZEhKNWV3b0pDUWtKQ1dsbUlDaDBhR2x6TGw5ZlgwTklSVU5MUTA5TVRFbEVSU2g3ZURwMGFHbHpMbkJ5YjJwbFkzUXViVzkxYzJWWUxIazZkR2hwY3k1d2NtOXFaV04wTG0xdmRYTmxXU3gzYVdSMGFEb3hMR2hsYVdkb2REb3hmU3gyYlM1d2NtOXFaV04wTG5Od2NtbDBaWE5iYVYwcEtTQjdDZ2tKQ1FrSkNYWmhjaUJqZFhKeVpXNTBVM0J5YVhSbElEMGdkbTB1Y0hKdmFtVmpkQzV6Y0hKcGRHVnpXMmxkT3dvSkNRa0pDUWxtYjNJZ0tIWmhjaUJwTWlCcGJpQmpkWEp5Wlc1MFUzQnlhWFJsTG1Oc2FXTnJaV1FwSUhzS0NRa0pDUWtKQ1hSeWVYc0tDUWtKQ1FrSkNRbGpkWEp5Wlc1MFUzQnlhWFJsTG1Oc2FXTnJaV1JiYVRKZEtDa0tDUWtKQ1FrSkNYMWpZWFJqYUNobEtYdDJiUzVqYjI1emIyeGxMbVZ5Y205eUtHVXBPMzBLQ1FrSkNRa0pmUW9KQ1FrSkNRa3ZMMk52Ym5OdmJHVXViRzluS0NKamJHbGphMlZrSUhOd2NtbDBaUzRpS1RzS0NRa0pDUWw5Q2drSkNRbDlZMkYwWTJnb1pTbDdZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdDlDZ2tKQ1gwS0NRbDlDZ2tKZEdocGN5NXdjbTlxWldOMExtMXZkWE5sUkc5M2JpQTlJR1JoZEdFN0NnbDlMQW9KWTI5dWMyOXNaVG9nZXdvSkNXeHZaem9nWm5WdVkzUnBiMjRnS0hSbGVIUXBJSHNLQ1FrSlkyOXVjMjlzWlM1c2IyY29JbHQyYlNBdElIQnliMmR5WVcxZE9pQWlJQ3NnZEdWNGRDazdDZ2tKZlN3S0NRbGxjbkp2Y2pvZ1puVnVZM1JwYjI0Z0tIUmxlSFFwSUhzS0NRa0pZMjl1YzI5c1pTNWxjbkp2Y2lnaVczWnRJQzBnY0hKdlozSmhiVjA2SUNJZ0t5QjBaWGgwS1RzS0NRa0pkbTB1YzNSdmNDZ3BPd29KQ1gwc0Nna0pZMnhsWVhJNklHWjFibU4wYVc5dUlDaDBaWGgwS1NCN0Nna0pDV052Ym5OdmJHVXVZMnhsWVhJb0tUc0tDUWw5Q2dsOUxBb0pjMmx0ZFd4aGRHVkxaWGs2SUdaMWJtTjBhVzl1SUNoa1lYUmhLU0I3Q2drSmFXWWdLR1JoZEdFdVpHOTNiaWtnZXdvSkNRbDBhR2x6TG5CeWIycGxZM1F1YTJWNWMxQnlaWE56WldSYlpHRjBZUzVyWlhsZElEMGdkSEoxWlRzS0NRbDlJR1ZzYzJVZ2V3b0pDUWwwYUdsekxuQnliMnBsWTNRdWEyVjVjMUJ5WlhOelpXUmJaR0YwWVM1clpYbGRJRDBnWm1Gc2MyVTdDZ2tKZlFvSmZTd0tDV052Ykd4cFpHVlhhV1IwYURvd0xBb0pZMjlzYkdsa1pVaGxhV2RvZERvd0xBb0pYMTlmUTBoRlEwdERUMHhNU1VSRk9tWjFibU4wYVc5dUlDaHpjSEl4TEhOd2NqSXBld29KQ1hKbGRIVnliaUJtWVd4elpUc0tDWDBzQ2dsamIyeHNhV1JsUkdsMk9tUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSW1ScGRpSXBMQW9KWVdSa1JYWmxiblJNYVhOMFpXNWxjanBtZFc1amRHbHZiaUFvYm1GdFpTeGxkbVZ1ZEU1aGJXVXBJSHNLQ1FsMGFHbHpXeUp2YmlJcmJtRnRaVjBnUFNCbGRtVnVkRTVoYldVN0NnbDlMQW9KYjI1MGFXTnJPaUJtZFc1amRHbHZiaWdwZTMwc0NnbHZibk53Y21sMFpXTnlaV0YwWlRvZ1puVnVZM1JwYjI0b2MzQnlhWFJsS1h0OUxBb0piMjV6ZEc5d09pQm1kVzVqZEdsdmJpZ3BlMzBzQ2dsZlgyUmxZMjlrWlVSaGRHRkNZWE5sTmpSVlVrazZJR1oxYm1OMGFXOXVJQ2hrWVhSaFZWSkpLU0I3Q2drSmNtVjBkWEp1SUdGMGIySW9aR0YwWVZWU1NTNXpjR3hwZENnaU95SXBMbkJ2Y0NncExuTndiR2wwS0NJc0lpa3VjRzl3S0NrcE93b0pmUXA5Q25adExsOWZYME5JUlVOTFEwOU1URWxFUlNBOUlHWjFibU4wYVc5dUlHbHpRMjlzYkdsa1pTaGhNaXdnWWpJcElIc0tDV1oxYm1OMGFXOXVJR2RsZEZKbFlXeERZVzUyWVhOUWIzTW9lQ3g1TEhkcFpIUm9MR2hsYVdkb2RDeGpZVzUyWVhNcElIc0tDUWwyWVhJZ2JXRnBibGdnUFNCNExTaDNhV1IwYUM4eUtUc0tDUWwyWVhJZ2JXRnBibGtnUFNCNUxTaG9aV2xuYUhRdk1pazdDZ2tKY21WMGRYSnVJSHNLQ1FrSmVEcHRZV2x1V0Mwb1kyRnVkbUZ6TG5kcFpIUm9MeklwTEFvSkNRbDVPbTFoYVc1WkxTaGpZVzUyWVhNdWFHVnBaMmgwTHpJcENna0pmVHNLQ1gwS0NYWmhjaUJoSUQwZ2V3b0pDWGRwWkhSb09tRXlMbmRwWkhSb0x6SXNDZ2tKYUdWcFoyaDBPbUV5TG1obGFXZG9kQ3dLQ1FsNE9tZGxkRkpsWVd4RFlXNTJZWE5RYjNNb1lUSXVlQ3hoTWk1NUxHRXlMbmRwWkhSb0x6SXNZVEl1YUdWcFoyaDBMSFp0TG5KbGJtUmxjbVZ5TG1OaGJuWmhjeWt1ZUN3S0NRbDVPbWRsZEZKbFlXeERZVzUyWVhOUWIzTW9ZVEl1ZUN4aE1pNTVMR0V5TG5kcFpIUm9MeklzWVRJdWFHVnBaMmgwTEhadExuSmxibVJsY21WeUxtTmhiblpoY3lrdWVRb0pmVHNLQ1haaGNpQmlJRDBnZXdvSkNYZHBaSFJvT21JeUxuZHBaSFJvTHpJc0Nna0phR1ZwWjJoME9tSXlMbWhsYVdkb2RDd0tDUWw0T21kbGRGSmxZV3hEWVc1MllYTlFiM01vWWpJdWVDeGlNaTU1TEdJeUxuZHBaSFJvTHpJc1lqSXVhR1ZwWjJoMExIWnRMbkpsYm1SbGNtVnlMbU5oYm5aaGN5a3VlQ3dLQ1FsNU9tZGxkRkpsWVd4RFlXNTJZWE5RYjNNb1lqSXVlQ3hpTWk1NUxHSXlMbmRwWkhSb0x6SXNZakl1YUdWcFoyaDBMSFp0TG5KbGJtUmxjbVZ5TG1OaGJuWmhjeWt1ZVFvSmZUc0tDWFpoY2lCeVpYTjFiSFFnUFNBb0Nna0pZUzU0SUNzZ1lTNTNhV1IwYUNBK1BTQmlMbmdnSmlZS0NRbGhMbmdnUEQwZ1lpNTRJQ3NnWWk1M2FXUjBhQ0FtSmdvSkNXRXVlU0FySUdFdWFHVnBaMmgwSUQ0OUlHSXVlU0FtSmdvSkNXRXVlU0E4UFNCaUxua2dLeUJpTG1obGFXZG9kQW9nSUNBZ0tUc0tDUzhxYVdZZ0tHRXlMbWx0WVdkbEtTQjdDZ2tKWkc5amRXMWxiblF1WW05a2VTNWhjSEJsYm1SRGFHbHNaQ2hoTWk1cGJXRm5aU2s3Q2drSllUSXVhVzFoWjJVdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBblptbDRaV1FuT3dvSkNXRXlMbWx0WVdkbExuTjBlV3hsTG5SdmNDQTlJR0V5TG5rcktIWnRMbkpsYm1SbGNtVnlMbU5oYm5aaGN5NW9aV2xuYUhRZ0x5QXlLU3NuY0hnbk93b0pDV0V5TG1sdFlXZGxMbk4wZVd4bExteGxablFnUFNCaE1pNTRLeWgyYlM1eVpXNWtaWEpsY2k1allXNTJZWE11ZDJsa2RHZ2dMeUF5S1NzbmNIZ25Pd29KQ1dFeUxtbHRZV2RsTG5kcFpIUm9JRDBnWVRJdWQybGtkR2c3Q2drSllUSXVhVzFoWjJVdWFHVnBaMmgwSUQwZ1lUSXVhR1ZwWjJoME93b0pmUW9KYVdZZ0tHSXlMbWx0WVdkbEtTQjdDZ2tKWkc5amRXMWxiblF1WW05a2VTNWhjSEJsYm1SRGFHbHNaQ2hpTWk1cGJXRm5aU2s3Q2drSllqSXVhVzFoWjJVdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBblptbDRaV1FuT3dvSkNXSXlMbWx0WVdkbExuTjBlV3hsTG5SdmNDQTlJR0l5TG5rcktIWnRMbkpsYm1SbGNtVnlMbU5oYm5aaGN5NW9aV2xuYUhRZ0x5QXlLU3NuY0hnbk93b0pDV0l5TG1sdFlXZGxMbk4wZVd4bExteGxablFnUFNCaU1pNTRLeWgyYlM1eVpXNWtaWEpsY2k1allXNTJZWE11ZDJsa2RHZ2dMeUF5S1NzbmNIZ25Pd29KQ1dJeUxtbHRZV2RsTG5kcFpIUm9JRDBnWWpJdWQybGtkR2c3Q2drSllqSXVhVzFoWjJVdWFHVnBaMmgwSUQwZ1lqSXVhR1ZwWjJoME93b0pmU292Q2lBZ0lDQnlaWFIxY200Z2NtVnpkV3gwT3dwOU93cDNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSFp0TG5adFZHbGpheWs3Q2k4cUNsUkZVMVFnVTBOU1NWQlVVem9LZDJocGJHVWdhVzRnWkdWMmJHOXdiV1Z1ZENCcElISmhiaUJqYjJSbElIUnZJR05vWldOcklHbG1JR1YyWlhKNWRHaHBibWNnYVhNZ2QyOXlhMmx1Wnk0S1ltRnphV01nZEdWemREb0tkbUZ5SUhOd2NtbDBaU0E5SUhadExuQnliMnBsWTNRdVlteHZZMnN1YldGclpWTndjbWwwWlNncE93cHpjSEpwZEdVdWFXMWhaMlVnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2dpZEdWemRFbHRZV2RsSWlrN0NncG9hV1JsSUhOd2NtbDBaU0IwWlhOME9nb0tkbTB1Y0hKdmFtVmpkQzVpYkc5amF5NW9hV1JsVTNCeWFYUmxLSE53Y21sMFpTazdDZ3B6WldOdmJtUWdjM0J5YVhSbElIUmxjM1E2Q2dwMllYSWdjM0J5YVhSbE1pQTlJSFp0TG5CeWIycGxZM1F1WW14dlkyc3ViV0ZyWlZOd2NtbDBaU2dwT3dwemNISnBkR1V5TG1sdFlXZGxJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JblJsYzNSSmJXRm5aU0lwT3dvS2NtOTBZWFJwYm1jZ2MzQnlhWFJsSUhSbGMzUTZDblpoY2lCemNISnBkR1V6SUQwZ2RtMHVjSEp2YW1WamRDNWliRzlqYXk1dFlXdGxVM0J5YVhSbEtDazdDbk53Y21sMFpUTXVhVzFoWjJVZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnaWRHVnpkRWx0WVdkbElpazdDblp0TG5CeWIycGxZM1F1WlhabGJuUnpMblJwWTJzdWNIVnphQ2htZFc1amRHbHZiaUFvS1NCN0NnbHpjSEpwZEdVekxtUnBjbVZqZEdsdmJpQXJQU0F4T3dwOUtUc0tLaTg9IikpO2V2YWwoYXRvYigiZDJsdVpHOTNMbkpsYm1SbGNtVnlJRDBnZXdvSlkyRnVkbUZ6T2lCdWRXeHNMQW9KWW1jNklHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSW1sdFp5SXBMQW9KWW1GamEyZHliM1Z1WkVsdFp6cHVkV3hzTEFvSloyVjBWWE5sY2sxbFpHbGhPaUJtZFc1amRHbHZiaUFvWVNrZ2V3b0pJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdDZ2tnSUNBZ0lDQWdJRzVoZG1sbllYUnZjaTVuWlhSVmMyVnlUV1ZrYVdFb1lTd2djbVZ6YjJ4MlpTd2dLQ2s5UG50eVpYTnZiSFpsS0NKRFlXMUVaVzVwWldRaUtUdDlLVHNLQ1NBZ0lDQjlLVHNLQ1gwc0NnbGpZVzFqWVc1MllYTTZaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnaVkyRnVkbUZ6SWlrc0NnbGpZVzFqYjI1MFpYaDBPbTUxYkd3c0NnbGpZVzEyYVdRNlpHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2dpZG1sa1pXOGlLU3dLQ1dOaGJYSjFianBtWVd4elpTd0tDWE4wWVhKMFEyRnRaWEpoVTNSeVpXRnRPaUJoYzNsdVl5Qm1kVzVqZEdsdmJpQW9LU0I3Q2drSmFXWWdLQ0VvZEdocGN5NWpZVzF5ZFc0cEtTQjdDZ2tKQ1M4dmJtOTBJSFJ2SUdOeVpXVndJRzkxZENCMGFHVWdkWE5sY2lCbWNtOXRJSFJvYVc1cmFXNW5JSFJvWVhRZ2RHaGxlU0JoY21VZ2RISjVhVzVuSUhSdklHZGxkQ0J6Y0hsbFpDQnZiaTR1TGdvSkNRbDJZWElnYzNSeVpXRnRJRDBnWVhkaGFYUWdkR2hwY3k1blpYUlZjMlZ5VFdWa2FXRW9ld29KQ1FrSmRtbGtaVzg2SUhSeWRXVXNDZ2tKQ1FsaGRXUnBiem9nZEhKMVpRb0pDUWw5S1RzS0NRa0phV1lnS0hOMGNtVmhiU0E5UFNBaVEyRnRSR1Z1YVdWa0lpa2dld29KQ1FrSmNtVjBkWEp1T3lBdkwyUmxibWxsWkNCaFkyTmxjM01nS0dSdklIUm9aWGtnZEdocGJtc2dkR2hoZENCMGFHVjVJR0Z5WlNCMGNubHBibWNnZEc4Z1oyVjBJSE53ZVdWa0lHOXVQeWtLQ1FrSmZRb0pDUWt2TDI5cklTQjNaU0JuYjNRZ1lXTmpaWE56TENCemJ5QnViM2NnZDJVZ2JtVmxaQ0IwYnlCMWMyVWdhWFFoQ2drSkNYUm9hWE11WTJGdGMzUnlaV0Z0SUQwZ2MzUnlaV0Z0T3dvSkNRbDBhR2x6TG1OaGJYWnBaQzV6Y21OUFltcGxZM1FnUFNCemRISmxZVzA3Q2drSkNYUm9hWE11WTJGdFkyRnVkbUZ6TG5kcFpIUm9JRDBnZEdocGN5NWpZVzEyYVdRdWQybGtkR2c3Q2drSkNYUm9hWE11WTJGdFkyRnVkbUZ6TG1obGFXZG9kQ0E5SUhSb2FYTXVZMkZ0ZG1sa0xuZHBaSFJvT3dvSkNRbDBhR2x6TG1OaGJYSjFiaUE5SUhSeWRXVTdDZ2tKQ1haaGNpQmhkV1JwYjBOdmJuUmxlSFFnUFNCM2FXNWtiM2N1ZG0wdVlYVmthVzlGYm1kcGJtVXVZMjl1ZEdWNGREc0tDUWtKZG1GeUlHRnVZV3g1YzJWeUlEMGdZWFZrYVc5RGIyNTBaWGgwTG1OeVpXRjBaVUZ1WVd4NWMyVnlLQ2s3Q2drSkNYWmhjaUJ0YVdOeWIzQm9iMjVsSUQwZ1lYVmthVzlEYjI1MFpYaDBMbU55WldGMFpVMWxaR2xoVTNSeVpXRnRVMjkxY21ObEtITjBjbVZoYlNrN0Nnb0pDUWxoYm1Gc2VYTmxjaTV6Ylc5dmRHaHBibWRVYVcxbFEyOXVjM1JoYm5RZ1BTQXdMamc3Q2drSkNXRnVZV3g1YzJWeUxtWm1kRk5wZW1VZ1BTQXhNREkwT3dvSkNRbDJZWElnY21WdVpDQTlJSFJvYVhNN0Nna0pDVzFwWTNKdmNHaHZibVV1WTI5dWJtVmpkQ2hoYm1Gc2VYTmxjaWs3Q2drSkNYUm9hWE11WTJGdGFXNTBaWEoyWVd3Z1BTQnpaWFJKYm5SbGNuWmhiQ2htZFc1amRHbHZiaUFvS1NCN0Nna0pDUWwyWVhJZ1lYSnlZWGtnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hoYm1Gc2VYTmxjaTVtY21WeGRXVnVZM2xDYVc1RGIzVnVkQ2s3Q2drSkNRbGhibUZzZVhObGNpNW5aWFJDZVhSbFJuSmxjWFZsYm1ONVJHRjBZU2hoY25KaGVTazdDZ2tKQ1FsMllYSWdZWEp5WVhsVGRXMGdQU0JoY25KaGVTNXlaV1IxWTJVb0tHRXNJSFpoYkhWbEtTQTlQaUJoSUNzZ2RtRnNkV1VzSURBcE93b0pDUWtKZG1GeUlHRjJaWEpoWjJVZ1BTQmhjbkpoZVZOMWJTQXZJR0Z5Y21GNUxteGxibWQwYURzS0NRa0pDWEpsYm1RdWJXbGpkbTlzSUQwZ1lYWmxjbUZuWlM4eU1EQXFNVEF3T3dvSkNRa0pMeThnWTI5c2IzSlFhV1J6S0dGMlpYSmhaMlVwT3dvSkNRbDlMREVwT3dvSkNYMEtDWDBzQ2dsemRHOXdRMkZ0WlhKaFUzUnlaV0Z0T2lCaGMzbHVZeUJtZFc1amRHbHZiaUFvS1NCN0Nna0pMeTl4ZFdsamF5QmphR1ZqYXlCMGJ5QnpaV1VnYVdZZ2QyVWdZWEpsSUhKMWJtNXBibWNnZEdobElHTmhiWEpsWVFvSkNXbG1JQ2gwYUdsekxtTmhiWEoxYmlrZ2V3b0pDUWwwYUdsekxtTmhiWEoxYmlBOUlHWmhiSE5sT3lBdkwzTjBiM0FnY21WdVpHVnlhVzVuSUhSb1pTQmpZVzF5WldFaENna0pDUzh2YzNSdmNDQnlaV052Y21ScGJtY2dkbWxrWlc4aENna0pDWEpsYm1SbGNtVnlMbU5oYlhOMGNtVmhiUzVuWlhSV2FXUmxiMVJ5WVdOcmN5Z3BMbVp2Y2tWaFkyZ29LSFFwSUQwK0lIc0tDUWtKQ1hRdWMzUnZjQ2dwT3dvSkNRbDlLVHNLQ1FrSkx5OXpkRzl3SUhKbFkyOXlaR2x1WnlCaGRXUnBieUVLQ1FrSmNtVnVaR1Z5WlhJdVkyRnRjM1J5WldGdExtZGxkRUYxWkdsdlZISmhZMnR6S0NrdVptOXlSV0ZqYUNnb2RDa2dQVDRnZXdvSkNRa0pkQzV6ZEc5d0tDazdDZ2tKQ1gwcE93b0pDUWt2TDJWdVpDQjJhV1JsYnlFS0NRa0pkR2hwY3k1allXMTJhV1F1Y0dGMWMyVW9LVHNLQ1FrSmRHaHBjeTVqWVcxMmFXUXVjM0pqVDJKcVpXTjBJRDBnYm5Wc2JEc0tDUWtKZEdocGN5NWpZVzF6ZEhKbFlXMGdQU0J1ZFd4c093b0pDUWxqYkdWaGNrbHVkR1Z5ZG1Gc0tIUm9hWE11WTJGdGFXNTBaWEoyWVd3cE93b0pDWDBLQ1gwc0NnbHpkR0Z5ZERvZ1puVnVZM1JwYjI0Z0tDa2dld29KQ1hSb2FYTXVZMjl1ZEdWNGRDQTlJSFJvYVhNdVkyRnVkbUZ6TG1kbGRFTnZiblJsZUhRb0lqSmtJaWs3Q2drSmRHaHBjeTVqYjI1MFpYaDBMbWRzYjJKaGJFRnNjR2hoSUQwZ01Uc0tDUWwwYUdsekxtTnZiblJsZUhRdWMzUnliMnRsVTNSNWJHVWdQU0IwYUdsekxtTnZiRzl5T3dvSkNYUm9hWE11WTI5dWRHVjRkQzVtYVd4c1UzUjViR1VnUFNCMGFHbHpMbU52Ykc5eU93b0pDWFJvYVhNdVkyOXVkR1Y0ZEM1aVpXZHBibEJoZEdnb0tUc0tDUWwwYUdsekxtTnZiblJsZUhRdVptbHNiRkpsWTNRb01Dd2dNQ3dnZEdocGN5NWpZVzUyWVhNdWQybGtkR2dnS3lBeUxDQjBhR2x6TG1OaGJuWmhjeTVvWldsbmFIUWdLeUF5S1RzS0NRbDBhR2x6TG1OdmJuUmxlSFF1YzNSeWIydGxLQ2s3Q2drSmRHaHBjeTUwWlhOMFBUQTdDZ2tKZEdocGN5NWpZVzUyWVhNdWMzUjViR1V1YVcxaFoyVlNaVzVrWlhKcGJtY2dQU0FpVUdsNFpXeGhkR1ZrSWpzS0NYMHNDZ2xqWVcxbmFHOXpkRG9nTUN3S0NYUnBZMnM2SUdaMWJtTjBhVzl1SUNoemNISnBkR1Z6TEcxdmJtbDBiM0p6S1NCN0Nna0pkR2hwY3k1bGRtVnVkSE11ZEdsamF5NW1iM0pGWVdOb0tDaG1kVzVqZENrZ1BUNGdld29KQ1FsMGNubDdDZ2tKQ1FsbWRXNWpkQ2dwT3dvSkNRbDlZMkYwWTJnb1pTbDdZMjl1YzI5c1pTNWxjbkp2Y2lnaWNtVnVaR1Z5WlhJZ2NtRnVJR1YyWlc1MExDQmlkWFFnWVc0Z1pYSnliM0lnZDJGeklIUm9jbTkzYmk0aUxHVXBmUW9KQ1gwcE93b0pDWFJvYVhNdVkyOXVkR1Y0ZEM1bmJHOWlZV3hCYkhCb1lTQTlJREU3Q2drSmRHaHBjeTVqYjI1MFpYaDBMbVpwYkd4VGRIbHNaU0E5SUhSb2FYTXVZMjlzYjNJN0Nna0pkR2hwY3k1amIyNTBaWGgwTG5OMGNtOXJaVk4wZVd4bElEMGdkR2hwY3k1amIyeHZjanNLQ1FsMGFHbHpMbU52Ym5SbGVIUXVZbVZuYVc1UVlYUm9LQ2s3Q2drSmRHaHBjeTVqYjI1MFpYaDBMbVpwYkd4U1pXTjBLREFzSURBc0lIUm9hWE11WTJGdWRtRnpMbmRwWkhSb0lDc2dNaXdnZEdocGN5NWpZVzUyWVhNdWFHVnBaMmgwSUNzZ01pazdDZ2tKZEdocGN5NWpiMjUwWlhoMExuTjBjbTlyWlNncE93b0pDWFJvYVhNdVkyOXVkR1Y0ZEM1M1pXSnJhWFJKYldGblpWTnRiMjkwYUdsdVowVnVZV0pzWldRZ1BTQm1ZV3h6WlRzS0NRbDBhR2x6TG1OdmJuUmxlSFF1Ylc5NlNXMWhaMlZUYlc5dmRHaHBibWRGYm1GaWJHVmtJRDBnWm1Gc2MyVTdDZ2tKZEdocGN5NWpiMjUwWlhoMExtbHRZV2RsVTIxdmIzUm9hVzVuUlc1aFlteGxaQ0E5SUdaaGJITmxPd29KQ1dsbUlDaDBhR2x6TG1OaGJYSjFiaWtnZXdvSkNRbDBhR2x6TG1OaGJXTnZiblJsZUhRdVoyeHZZbUZzUVd4d2FHRWdQU0F4T3dvSkNRbDBhR2x6TG1OaGJXTnZiblJsZUhRdVpISmhkMGx0WVdkbEtIUm9hWE11WTJGdGRtbGtMREFzTUN4MGFHbHpMbU5oYldOaGJuWmhjeTUzYVdSMGFDeDBhR2x6TG1OaGJXTmhiblpoY3k1b1pXbG5hSFFwT3dvSkNRbDBhR2x6TG1OdmJuUmxlSFF1WjJ4dlltRnNRV3h3YUdFZ1BTQXhJQzBnS0hSb2FYTXVZMkZ0WjJodmMzUWdMeUF4TURBcE93b0pDUWwwYUdsekxtTnZiblJsZUhRdVpISmhkMGx0WVdkbEtIUm9hWE11WTJGdGRtbGtMREFzTUN4MGFHbHpMbU5oYm5aaGN5NTNhV1IwYUN4MGFHbHpMbU5oYm5aaGN5NW9aV2xuYUhRcE93b0pDUWwwYUdsekxtTnZiblJsZUhRdVoyeHZZbUZzUVd4d2FHRWdQU0F4T3dvSkNYMEtDUWwwY25sN0Nna0pDWFJvYVhNdVkyOXVkR1Y0ZEM1a2NtRjNTVzFoWjJVb2RHaHBjeTVpWnl3d0xEQXNkR2hwY3k1allXNTJZWE11ZDJsa2RHZ3NkR2hwY3k1allXNTJZWE11YUdWcFoyaDBLVHNLQ1FsOVkyRjBZMmdvWlNsN2ZRb0pDV1p2Y2lBb2RtRnlJR2tnYVc0Z2MzQnlhWFJsY3lrZ2V3b0pDUWx6Y0hKcGRHVnpXMmxkT3dvSkNRbDBhR2x6TGw5a2NtRjNVM0J5YVhSbEtITndjbWwwWlhOYmFWMHBPd29KQ1gwS0NRbG1iM0lnS0haaGNpQnBJR2x1SUcxdmJtbDBiM0p6S1NCN0Nna0pDVzF2Ym1sMGIzSnpXMmxkT3dvSkNRbDBhR2x6TGw5a2NtRjNUVzl1YVhSdmNpaHRiMjVwZEc5eWMxdHBYU2s3Q2drSmZRb0pDWFJvYVhNdVpYWmxiblJ6TG5ScFkydGxaQzVtYjNKRllXTm9LQ2htZFc1amRDa2dQVDRnZXdvSkNRbDBjbmw3Q2drSkNRbG1kVzVqZENncE93b0pDUWw5WTJGMFkyZ29aU2w3WTI5dWMyOXNaUzVsY25KdmNpZ2ljbVZ1WkdWeVpYSWdjbUZ1SUdWMlpXNTBMQ0JpZFhRZ1lXNGdaWEp5YjNJZ2QyRnpJSFJvY205M2JpNGlMR1VwZlFvSkNYMHBPd29KZlN3S0NXVjJaVzUwY3pwN0Nna0pZbVZtYjNKbFpISmhkenBiWFN3S0NRbGhablJsY21SeVlYYzZXMTBzQ2drSlpISmhkM053Y21sMFpUcGJYU3dLQ1FsaVpXWnZjbVZ0YjI1cGRHOXlaSEpoZHpwYlhTd0tDUWxoWm5SbGNtMXZibWwwYjNKa2NtRjNPbHRkTEFvSkNYUnBZMnM2VzEwc0Nna0pkR2xqYTJWa09sdGRDZ2w5TEFvSllXUmtSWFpsYm5STWFYTjBaVzVsY2pvZ1puVnVZM1JwYjI0Z0tHNWhiV1VzWm5WdVkzUXBJSHNLQ1FscFppQW9kR2hwY3k1bGRtVnVkSE5iYm1GdFpTNTBiMHh2ZDJWeVEyRnpaU2dwWFNrZ2V3b0pDUWwwYUdsekxtVjJaVzUwYzF0dVlXMWxMblJ2VEc5M1pYSkRZWE5sS0NsZExuQjFjMmdvWm5WdVkzUXBPd29KQ1gwZ1pXeHpaU0I3Q2drSkNXTnZibk52YkdVdWQyRnliaWdpY21WdVpHVnlaWElnZEhKcFpXUWdZV1JrYVc1bklHVjJaVzUwSUZ3aUlpdHVZVzFsS3lKY0lpQmlkWFFnWTJGdWRDQm1hVzVrSUdsMExpQmphR1ZqYXlCMGFHVWdjM0JsYkd4cGJtY2dZVzVrSUhSeWVTQmhaMkZwYmk0aUtUc0tDUWw5Q2dsOUxBb0pkMmxrZEdnNk5qQXdMQW9KYUdWcFoyaDBPak0yTUN3S0NXZGxkRk5qWVd4bFNXNW1iem9nWm5WdVkzUnBiMjRnS0hnc2VTeDNhV1IwYUN4b1pXbG5hSFFwSUhzS0NRbDJZWElnYzNjZ1BTQjBhR2x6TG1OaGJuWmhjeTUzYVdSMGFDOTBhR2x6TG5kcFpIUm9Pd29KQ1haaGNpQnphQ0E5SUhSb2FYTXVZMkZ1ZG1GekxtaGxhV2RvZEM5MGFHbHpMbWhsYVdkb2REc0tDUWx5WlhSMWNtNGdld29KQ1FsNE9uTjNLbmdzQ2drSkNYazZjMmdxZVN3S0NRa0pkenB6ZHlwM2FXUjBhQ3dLQ1FrSmFEcHphQ3BvWldsbmFIUXNDZ2tKQ1hOallXeGxkMmxrZEdnNmMzY3NDZ2tKQ1hOallXeGxhR1ZwWjJoME9uTm9DZ2tKZlRzS0NYMHNDZ2xrY21GM1NXMWhaMlU2SUdaMWJtTjBhVzl1SUNocGJXY3NlQ3g1TEhjc2FDa2dld29KQ1haaGNpQnphU0E5SUhSb2FYTXVaMlYwVTJOaGJHVkpibVp2S0hnc2VTeDNMR2dwT3dvSkNYUm9hWE11WTI5dWRHVjRkQzVrY21GM1NXMWhaMlVvYVcxbkxITnBMbmdzYzJrdWVTeHphUzUzTEhOcExtZ3BPd29KZlN3S0NYUnlZVzV6YkdGMFpUb2dablZ1WTNScGIyNGdLSGdzZVNrZ2V3b0pDWFpoY2lCemFTQTlJSFJvYVhNdVoyVjBVMk5oYkdWSmJtWnZLSGdzZVN3d0xEQXBPd29KQ1hSb2FYTXVZMjl1ZEdWNGRDNTBjbUZ1YzJ4aGRHVW9jMmt1ZUN4emFTNTVLVHNLQ1gwc0NnbGZaSEpoZDFOd2NtbDBaVG9nWm5WdVkzUnBiMjRnS0dwemIyNHBJSHNLQ1FsMGFHbHpMbVYyWlc1MGN5NWlaV1p2Y21Wa2NtRjNMbVp2Y2tWaFkyZ29LR1oxYm1OMEtTQTlQaUI3Q2drSkNYUnllWHNLQ1FrSkNXWjFibU4wS0NrN0Nna0pDWDFqWVhSamFDaGxLWHRqYjI1emIyeGxMbVZ5Y205eUtDSnlaVzVrWlhKbGNpQnlZVzRnWlhabGJuUXNJR0oxZENCaGJpQmxjbkp2Y2lCM1lYTWdkR2h5YjNkdUxpSXNaU2w5Q2drSmZTazdDZ2tKZEdocGN5NWpiMjUwWlhoMExuTmhkbVVvS1RzS0NRa3ZMM1Z6WlNCMGFHVWdkSEo1SUhSdklHNXZkQ0IwYUhKdmR5QmhiaUJsY25KdmNpQjNhR1Z1SUhKbGJtUmxjbVZ5YVc1bklHWmhhV3hsWkN3Z2MyOGdkR2hsSUhKbGJtUmxjbVZ5SUd0bFpYQnpJSFJwWTJ0cGJtY3VDZ2tKZEhKNWV3b0pDUWwwYUdsekxtVjJaVzUwY3k1a2NtRjNjM0J5YVhSbExtWnZja1ZoWTJnb0tHWjFibU4wS1NBOVBpQjdDZ2tKQ1FsMGNubDdDZ2tKQ1FrSlpuVnVZM1FvYW5OdmJpazdDZ2tKQ1FsOVkyRjBZMmdvWlNsN1kyOXVjMjlzWlM1bGNuSnZjaWdpY21WdVpHVnlaWElnY21GdUlHVjJaVzUwTENCaWRYUWdZVzRnWlhKeWIzSWdkMkZ6SUhSb2NtOTNiaTRpTEdVcGZRb0pDUWw5S1RzS0NRa0pkbUZ5SUY5ZlkyRnNZM1ZzWVhSbFpGOTRJRDBnYW5OdmJpNTRPd29KQ1FsMllYSWdYMTlqWVd4amRXeGhkR1ZrWDNrZ1BTQXdJQzBnYW5OdmJpNTVPd29KQ1FsMllYSWdaMmh2YzNRZ1BTQnFjMjl1TG1kb2IzTjBPd29KQ1FscFppQW9aMmh2YzNRZ1BpQXhNREFwSUhzS0NRa0pDV2RvYjNOMElEMGdNVEF3T3dvSkNRbDlDZ2tKQ1dsbUlDaG5hRzl6ZENBOElEQXBJSHNLQ1FrSkNXZG9iM04wSUQwZ01Ec0tDUWtKZlFvSkNRbDBhR2x6TG1OdmJuUmxlSFF1WjJ4dlltRnNRV3h3YUdFZ1BTQXhJQzBnS0dkb2IzTjBJQzhnTVRBd0tUc0tDUWtKTHk5MGFHbHpMbU52Ym5SbGVIUXVkSEpoYm5Oc1lYUmxLSFJvYVhNdVkyRnVkbUZ6TG5kcFpIUm9MeklyYW5OdmJpNTRLMTlmWTJGc1kzVnNZWFJsWkY5NExDQjBhR2x6TG1OaGJuWmhjeTVvWldsbmFIUXZNaXRmWDJOaGJHTjFiR0YwWldSZmVTazdDZ2tKQ1hSb2FYTXVkSEpoYm5Oc1lYUmxLSFJvYVhNdWQybGtkR2d2TWl0cWMyOXVMbmdyWDE5allXeGpkV3hoZEdWa1gzZ3NJSFJvYVhNdWFHVnBaMmgwTHpJclgxOWpZV3hqZFd4aGRHVmtYM2twT3lBdkwzUm9hWE1nYlc5MlpYTWdkR2hsSUdsdFlXZGxJSFJ2SUhSb1pTQnpjSEpwZEdVZ2NHOXphWFJwYjI0dUNna0pDWFJvYVhNdVkyOXVkR1Y0ZEM1eWIzUmhkR1VvS0dwemIyNHVaR2x5WldOMGFXOXVJQzBnT1RBcEtrMWhkR2d1VUVrdk1UZ3dLVHNLQ1FrSmFXWWdLR3B6YjI0dVpteHBjQ0E5UFNBaWFHOXlJaWtnZXdvSkNRa0pkR2hwY3k1amIyNTBaWGgwTG5OallXeGxLQzB4TERFcE93b0pDUWw5SUdWc2MyVWdld29KQ1FrSmFXWWdLR3B6YjI0dVpteHBjQ0E5UFNBaWRtVnlJaWtnZXdvSkNRa0pDWFJvYVhNdVkyOXVkR1Y0ZEM1elkyRnNaU2d4TEMweEtUc0tDUWtKQ1gwS0NRa0pmUW9KQ1FsMGFHbHpMbVJ5WVhkSmJXRm5aU2hxYzI5dUxtbHRZV2RsTENCcWMyOXVMbmRwWkhSb0x5MHlMQ0JxYzI5dUxtaGxhV2RvZEM4dE1pd2dhbk52Ymk1M2FXUjBhQ3dnYW5OdmJpNW9aV2xuYUhRcE95QXZMMlJ5WVhjZ2RHaGxJR2x0WVdkbElHRnVaQ0J2Wm1aelpYUWdhWFFnYzI4Z2FYUWdjbTkwWVhSbGN5QnBiaUIwYUdVZ1kyVnVkR1Z5TGdvSkNYMWpZWFJqYUNobEtYdDlDZ2tKZEdocGN5NWpiMjUwWlhoMExuSmxjM1J2Y21Vb0tUc0tDUWwwYUdsekxtVjJaVzUwY3k1aFpuUmxjbVJ5WVhjdVptOXlSV0ZqYUNnb1puVnVZM1FwSUQwK0lIc0tDUWtKZEhKNWV3b0pDUWtKWm5WdVkzUW9LVHNLQ1FrSmZXTmhkR05vS0dVcGUyTnZibk52YkdVdVpYSnliM0lvSW5KbGJtUmxjbVZ5SUhKaGJpQmxkbVZ1ZEN3Z1luVjBJR0Z1SUdWeWNtOXlJSGRoY3lCMGFISnZkMjR1SWl4bEtYMEtDUWw5S1RzS0NYMHNDZ2xmWkhKaGQwMXZibWwwYjNJNklHWjFibU4wYVc5dUlDaHFjMjl1S1NCN0Nna0pMeTlUWTJGc1pTQlZjR1JoZEdVaElRb0pDUzh2ZEdocGN5QmhiSE52SUdacGVHVnpJSE52YldVZ1luVm5jeUIzYUdWdUlISmxibVJsY21sdVp5QjJZWEp6Q2drSmRHaHBjeTVsZG1WdWRITXVZbVZtYjNKbGJXOXVhWFJ2Y21SeVlYY3VabTl5UldGamFDZ29ablZ1WTNRcElEMCtJSHNLQ1FrSmRISjVld29KQ1FrSlpuVnVZM1FvS1RzS0NRa0pmV05oZEdOb0tHVXBlMk52Ym5OdmJHVXVaWEp5YjNJb0luSmxibVJsY21WeUlISmhiaUJsZG1WdWRDd2dZblYwSUdGdUlHVnljbTl5SUhkaGN5QjBhSEp2ZDI0dUlpeGxLWDBLQ1FsOUtUc0tDUWwwYUdsekxtTnZiblJsZUhRdWMyRjJaU2dwT3dvSkNTOHZkWE5sSUhSb1pTQjBjbmtnZEc4Z2JtOTBJSFJvY205M0lHRnVJR1Z5Y205eUlIZG9aVzRnY21WdVpHVnlaWEpwYm1jZ1ptRnBiR1ZrTENCemJ5QjBhR1VnY21WdVpHVnlaWElnYTJWbGNITWdkR2xqYTJsdVp5NEtDUWwwY25sN0Nna0pDV2xtSUNocWMyOXVMblpwYzJsaWJHVXBJSHNLQ1FrSkNYUm9hWE11WTI5dWRHVjRkQzVuYkc5aVlXeEJiSEJvWVNBOUlERTdDZ2tKQ1FsMGFHbHpMbU52Ym5SbGVIUXVkSEpoYm5Oc1lYUmxLREFzTUNrN0Nna0pDUWwyWVhJZ2RHVjRkSE5qWVd4bElEMGdkR2hwY3k1blpYUlRZMkZzWlVsdVptOG9LUzV6WTJGc1pYZHBaSFJvT3dvSkNRa0pjbVZ1WkdWeVpYSXVZMjl1ZEdWNGRDNW1iMjUwSUQwZ0oySnZiR1FnSnlzb01UVXFkR2hwY3k1blpYUlRZMkZzWlVsdVptOG9LUzV6WTJGc1pYZHBaSFJvS1NzbmNIZ2dZWEpwWVd3bk93b0pDUWtKZG1GeUlIUmxlSFJYYVdSMGFDQTlJSEpsYm1SbGNtVnlMbU52Ym5SbGVIUXViV1ZoYzNWeVpWUmxlSFFvYW5OdmJpNTJZV3gxWlNrdWQybGtkR2d2ZEdWNGRITmpZV3hsT3dvSkNRa0pkbUZ5SUhSbGVIUk9ZVzFsVjJsa2RHZ2dQU0J5Wlc1a1pYSmxjaTVqYjI1MFpYaDBMbTFsWVhOMWNtVlVaWGgwS0dwemIyNHVibUZ0WlNrdWQybGtkR2d2ZEdWNGRITmpZV3hsT3dvSkNRa0pkR2hwY3k1amIyNTBaWGgwTG1kc2IySmhiRUZzY0doaElEMGdNVHNLQ1FrSkNYSmxibVJsY21WeUxtTnZiblJsZUhRdVptbHNiRk4wZVd4bElEMGdJaU00TmpobE9UWWlPd29KQ1FrSmNtVnVaR1Z5WlhJdVptbHNiRkpsWTNRb2FuTnZiaTU0TFRJc2FuTnZiaTU1TFRJc01qUXJkR1Y0ZEU1aGJXVlhhV1IwYUN0MFpYaDBWMmxrZEdnc01qUXBPd29KQ1FrSmNtVnVaR1Z5WlhJdVkyOXVkR1Y0ZEM1bWFXeHNVM1I1YkdVZ1BTQWlJMk5sWkRSa1lTSTdDZ2tKQ1FseVpXNWtaWEpsY2k1bWFXeHNVbVZqZENocWMyOXVMbmdzYW5OdmJpNTVMREl3SzNSbGVIUk9ZVzFsVjJsa2RHZ3JkR1Y0ZEZkcFpIUm9MREl3S1RzSkNna0pDUWx5Wlc1a1pYSmxjaTVqYjI1MFpYaDBMbVpwYkd4VGRIbHNaU0E5SUNJalptWTRZekF3SWpzS0NRa0pDWEpsYm1SbGNtVnlMbVpwYkd4U1pXTjBLR3B6YjI0dWVDdDBaWGgwVG1GdFpWZHBaSFJvS3pFd0xHcHpiMjR1ZVNzekxEVXJkR1Y0ZEZkcFpIUm9MREUxS1RzS0NRa0pDWEpsYm1SbGNtVnlMbU52Ym5SbGVIUXVabWxzYkZOMGVXeGxJRDBnSW5kb2FYUmxJanNLQ1FrSkNYSmxibVJsY21WeUxtWnBiR3hVWlhoMEtHcHpiMjR1ZG1Gc2RXVXNJR3B6YjI0dWVDdDBaWGgwVG1GdFpWZHBaSFJvS3pFd0xHcHpiMjR1ZVNBcklERTFLVHNLQ1FrSkNYSmxibVJsY21WeUxtTnZiblJsZUhRdVptbHNiRk4wZVd4bElEMGdJbUpzWVdOcklqc0tDUWtKQ1hKbGJtUmxjbVZ5TG1acGJHeFVaWGgwS0dwemIyNHVibUZ0WlN3Z2FuTnZiaTU0SUNzZ05peHFjMjl1TG5rZ0t5QXhOU2s3Q2drSkNRbHlaWFIxY200Z2V3b0pDUWtKQ1hkcFpIUm9PamMwSzNSbGVIUk9ZVzFsVjJsa2RHZ3JkR1Y0ZEZkcFpIUm9MQW9KQ1FrSkNXaGxhV2RvZERveU5Dd0tDUWtKQ1FsNE9tcHpiMjR1ZUN3S0NRa0pDUWw1T21wemIyNHVlUW9KQ1FrSmZUc0tDUWtKZlFvSkNYMWpZWFJqYUNobEtYdGpiMjV6YjJ4bExtVnljbTl5S0dVcE8zMEtDUWwwYUdsekxtTnZiblJsZUhRdWNtVnpkRzl5WlNncE93b0pDWFJvYVhNdVpYWmxiblJ6TG1GbWRHVnliVzl1YVhSdmNtUnlZWGN1Wm05eVJXRmphQ2dvWm5WdVkzUXBJRDArSUhzS0NRa0pkSEo1ZXdvSkNRa0pablZ1WTNRb0tUc0tDUWtKZldOaGRHTm9LR1VwZTJOdmJuTnZiR1V1WlhKeWIzSW9JbkpsYm1SbGNtVnlJSEpoYmlCbGRtVnVkQ3dnWW5WMElHRnVJR1Z5Y205eUlIZGhjeUIwYUhKdmQyNHVJaXhsS1gwS0NRbDlLVHNLQ1gwc0NnbG1hV3hzVW1WamREb2dablZ1WTNScGIyNGdLSGdzZVN4M0xHZ3BJSHNLQ1FsMllYSWdjMmtnUFNCMGFHbHpMbWRsZEZOallXeGxTVzVtYnloNExIa3NkeXhvS1RzS0NRbDBhR2x6TG1OdmJuUmxlSFF1Wm1sc2JGSmxZM1FvYzJrdWVDeHphUzU1TEhOcExuY3NjMmt1YUNrN0NnbDlMQW9KWm1sc2JGUmxlSFE2SUdaMWJtTjBhVzl1SUNoMGVIUXNlQ3g1S1NCN0Nna0pkbUZ5SUhOcElEMGdkR2hwY3k1blpYUlRZMkZzWlVsdVptOG9lQ3g1TERBc01DazdDZ2tKZEdocGN5NWpiMjUwWlhoMExtWnBiR3hVWlhoMEtIUjRkQ3h6YVM1NExITnBMbmtwT3dvSmZTd0tDV052Ykc5eU9pSWpabVptWm1abUlpd0tDV2RsZEVOdmJHOXlSV1ptWldOME9pQm1kVzVqZEdsdmJpQW9hVzFuTEhJc1p5eGlLU0I3Q2drSmRISjVld29KQ1FsMllYSWdZM1p6SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2dpWTJGdWRtRnpJaWs3Q2drSkNYWmhjaUJqZEhnZ1BTQmpkbk11WjJWMFEyOXVkR1Y0ZENnaU1tUWlLVHNLQ1FrSlkzWnpMbmRwWkhSb0lEMGdhVzFuTG5kcFpIUm9Pd29KQ1FsamRuTXVhR1ZwWjJoMElEMGdhVzFuTG1obGFXZG9kRHNLQ1FrSlkzUjRMbVJ5WVhkSmJXRm5aU2hwYldjc01Dd3dMR04yY3k1M2FXUjBhQ3hqZG5NdWFHVnBaMmgwS1RzS0NRa0pkbUZ5SUdsdFoyUmhkR0VnUFNCamRIZ3VaMlYwU1cxaFoyVkVZWFJoS0RBc01DeGpkbk11ZDJsa2RHZ3NZM1p6TG1obGFXZG9kQ2s3Q2drSkNYWmhjaUJwYldGblpVUmhkR0VnUFNCcGJXZGtZWFJoTG1SaGRHRTdDZ2tKQ1dadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2FXMWhaMlZFWVhSaExteGxibWQwYURzZ2FTQXJQU0EwS1NCN0Nna0pDUWxwYldGblpVUmhkR0ZiYVYwZ0t6MGdjanNLQ1FrSkNXbHRZV2RsUkdGMFlWdHBLekZkSUNzOUlHYzdDZ2tKQ1FscGJXRm5aVVJoZEdGYmFTc3lYU0FyUFNCbk93b0pDUWw5Q2drSkNXTjBlQzV3ZFhSSmJXRm5aVVJoZEdFb2FXMW5aR0YwWVN3d0xEQXBPd29KQ1FseVpYUjFjbTRnWTNaekxuUnZSR0YwWVZWU1RDZ3BPd29KQ1gxallYUmphQ2hsS1h0amIyNXpiMnhsTG1WeWNtOXlLR1VwTzMwS0NYMHNDZ2xuWlhSU1lXNWtiMjFEYjJ4dmNrVm1abVZqZERvZ1puVnVZM1JwYjI0Z0tHbHRaeXh5WVc1a2IyMXVaWE56S1NCN0Nna0pkSEo1ZXdvSkNRbDJZWElnWTNaeklEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnaVkyRnVkbUZ6SWlrN0Nna0pDWFpoY2lCamRIZ2dQU0JqZG5NdVoyVjBRMjl1ZEdWNGRDZ2lNbVFpS1RzS0NRa0pZM1p6TG5kcFpIUm9JRDBnYVcxbkxuZHBaSFJvT3dvSkNRbGpkbk11YUdWcFoyaDBJRDBnYVcxbkxtaGxhV2RvZERzS0NRa0pZM1I0TG1SeVlYZEpiV0ZuWlNocGJXY3NNQ3d3TEdOMmN5NTNhV1IwYUN4amRuTXVhR1ZwWjJoMEtUc0tDUWtKZG1GeUlHbHRaMlJoZEdFZ1BTQmpkSGd1WjJWMFNXMWhaMlZFWVhSaEtEQXNNQ3hqZG5NdWQybGtkR2dzWTNaekxtaGxhV2RvZENrN0Nna0pDWFpoY2lCcGJXRm5aVVJoZEdFZ1BTQnBiV2RrWVhSaExtUmhkR0U3Q2drSkNXWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dhVzFoWjJWRVlYUmhMbXhsYm1kMGFEc2dhU0FyUFNBMEtTQjdDZ2tKQ1FscGJXRm5aVVJoZEdGYmFWMGdLejBnVFdGMGFDNXlZVzVrYjIwb0tTcHlZVzVrYjIxdVpYTnpPd29KQ1FrSmFXMWhaMlZFWVhSaFcya3JNVjBnS3owZ1RXRjBhQzV5WVc1a2IyMG9LU3B5WVc1a2IyMXVaWE56T3dvSkNRa0phVzFoWjJWRVlYUmhXMmtyTWwwZ0t6MGdUV0YwYUM1eVlXNWtiMjBvS1NweVlXNWtiMjF1WlhOek93b0pDUWw5Q2drSkNXTjBlQzV3ZFhSSmJXRm5aVVJoZEdFb2FXMW5aR0YwWVN3d0xEQXBPd29KQ1FseVpYUjFjbTRnWTNaekxuUnZSR0YwWVZWU1RDZ3BPd29KQ1gxallYUmphQ2hsS1h0amIyNXpiMnhsTG1WeWNtOXlLR1VwTzMwS0NYMHNDZ2xuWlhSSGJHbDBZMmhEYjJ4dmNrVm1abVZqZERvZ1puVnVZM1JwYjI0Z0tHbHRaeXh5WVc1a2IyMXVaWE56S1NCN0Nna0pkSEo1ZXdvSkNRbDJZWElnWTNaeklEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnaVkyRnVkbUZ6SWlrN0Nna0pDWFpoY2lCamRIZ2dQU0JqZG5NdVoyVjBRMjl1ZEdWNGRDZ2lNbVFpS1RzS0NRa0pZM1p6TG5kcFpIUm9JRDBnYVcxbkxuZHBaSFJvT3dvSkNRbGpkbk11YUdWcFoyaDBJRDBnYVcxbkxtaGxhV2RvZERzS0NRa0pZM1I0TG1SeVlYZEpiV0ZuWlNocGJXY3NNQ3d3TEdOMmN5NTNhV1IwYUN4amRuTXVhR1ZwWjJoMEtUc0tDUWtKZG1GeUlHbHRaMlJoZEdFZ1BTQmpkSGd1WjJWMFNXMWhaMlZFWVhSaEtEQXNNQ3hqZG5NdWQybGtkR2dzWTNaekxtaGxhV2RvZENrN0Nna0pDWFpoY2lCcGJXRm5aVVJoZEdFZ1BTQnBiV2RrWVhSaExtUmhkR0U3Q2drSkNXWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dhVzFoWjJWRVlYUmhMbXhsYm1kMGFEc2dhU0FyUFNBMEtTQjdDZ2tKQ1FscGJXRm5aVVJoZEdGYmFWMGdQU0JOWVhSb0xuSmhibVJ2YlNncEtuSmhibVJ2Ylc1bGMzTTdDZ2tKQ1FscGJXRm5aVVJoZEdGYmFTc3hYU0E5SUUxaGRHZ3VjbUZ1Wkc5dEtDa3FjbUZ1Wkc5dGJtVnpjenNLQ1FrSkNXbHRZV2RsUkdGMFlWdHBLekpkSUQwZ1RXRjBhQzV5WVc1a2IyMG9LU3B5WVc1a2IyMXVaWE56T3dvSkNRbDlDZ2tKQ1dOMGVDNXdkWFJKYldGblpVUmhkR0VvYVcxblpHRjBZU3d3TERBcE93b0pDUWx5WlhSMWNtNGdZM1p6TG5SdlJHRjBZVlZTVENncE93b0pDWDFqWVhSamFDaGxLWHRqYjI1emIyeGxMbVZ5Y205eUtHVXBPMzBLQ1gwc0NnbG5aWFJKYm5abGNuUkRiMnh2Y2tWbVptVmpkRG9nWm5WdVkzUnBiMjRnS0dsdFp5a2dld29KQ1hSeWVYc0tDUWtKZG1GeUlHTjJjeUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9JbU5oYm5aaGN5SXBPd29KQ1FsMllYSWdZM1I0SUQwZ1kzWnpMbWRsZEVOdmJuUmxlSFFvSWpKa0lpazdDZ2tKQ1dOMmN5NTNhV1IwYUNBOUlHbHRaeTUzYVdSMGFEc0tDUWtKWTNaekxtaGxhV2RvZENBOUlHbHRaeTVvWldsbmFIUTdDZ2tKQ1dOMGVDNWtjbUYzU1cxaFoyVW9hVzFuTERBc01DeGpkbk11ZDJsa2RHZ3NZM1p6TG1obGFXZG9kQ2s3Q2drSkNYWmhjaUJwYldka1lYUmhJRDBnWTNSNExtZGxkRWx0WVdkbFJHRjBZU2d3TERBc1kzWnpMbmRwWkhSb0xHTjJjeTVvWldsbmFIUXBPd29KQ1FsMllYSWdhVzFoWjJWRVlYUmhJRDBnYVcxblpHRjBZUzVrWVhSaE93b0pDUWxtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdsdFlXZGxSR0YwWVM1c1pXNW5kR2c3SUdrZ0t6MGdOQ2tnZXdvSkNRa0pkbUZ5SUhJZ1BTQnBiV0ZuWlVSaGRHRmJhVjA3Q2drSkNRbDJZWElnWnlBOUlHbHRZV2RsUkdGMFlWdHBLekZkT3dvSkNRa0pkbUZ5SUdJZ1BTQnBiV0ZuWlVSaGRHRmJhU3N5WFRzS0NRa0pDV2x0WVdkbFJHRjBZVnRwWFNBOUlHSTdDZ2tKQ1FscGJXRm5aVVJoZEdGYmFTc3hYU0E5SUdjN0Nna0pDUWxwYldGblpVUmhkR0ZiYVNzeVhTQTlJSEk3Q2drSkNYMEtDUWtKWTNSNExuQjFkRWx0WVdkbFJHRjBZU2hwYldka1lYUmhMREFzTUNrN0Nna0pDWEpsZEhWeWJpQmpkbk11ZEc5RVlYUmhWVkpNS0NrN0Nna0pmV05oZEdOb0tHVXBlMk52Ym5OdmJHVXVaWEp5YjNJb1pTazdmUW9KZlN3S0NXZGxkRWx1ZG1WeWRFTnZiRzl5UldabVpXTjBPaUJtZFc1amRHbHZiaUFvYVcxbktTQjdDZ2tKZEhKNWV3b0pDUWwyWVhJZ1kzWnpJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ2lZMkZ1ZG1GeklpazdDZ2tKQ1haaGNpQmpkSGdnUFNCamRuTXVaMlYwUTI5dWRHVjRkQ2dpTW1RaUtUc0tDUWtKWTNaekxuZHBaSFJvSUQwZ2FXMW5MbmRwWkhSb093b0pDUWxqZG5NdWFHVnBaMmgwSUQwZ2FXMW5MbWhsYVdkb2REc0tDUWtKWTNSNExtUnlZWGRKYldGblpTaHBiV2NzTUN3d0xHTjJjeTUzYVdSMGFDeGpkbk11YUdWcFoyaDBLVHNLQ1FrSmRtRnlJR2x0WjJSaGRHRWdQU0JqZEhndVoyVjBTVzFoWjJWRVlYUmhLREFzTUN4amRuTXVkMmxrZEdnc1kzWnpMbWhsYVdkb2RDazdDZ2tKQ1haaGNpQnBiV0ZuWlVSaGRHRWdQU0JwYldka1lYUmhMbVJoZEdFN0Nna0pDV1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYVcxaFoyVkVZWFJoTG14bGJtZDBhRHNnYVNBclBTQTBLU0I3Q2drSkNRbDJZWElnY2lBOUlHbHRZV2RsUkdGMFlWdHBYVHNLQ1FrSkNYWmhjaUJuSUQwZ2FXMWhaMlZFWVhSaFcya3JNVjA3Q2drSkNRbDJZWElnWWlBOUlHbHRZV2RsUkdGMFlWdHBLekpkT3dvSkNRa0phVzFoWjJWRVlYUmhXMmxkSUQwZ1lqc0tDUWtKQ1dsdFlXZGxSR0YwWVZ0cEt6RmRJRDBnWnpzS0NRa0pDV2x0WVdkbFJHRjBZVnRwS3pKZElEMGdjanNLQ1FrSmZRb0pDUWxqZEhndWNIVjBTVzFoWjJWRVlYUmhLR2x0WjJSaGRHRXNNQ3d3S1RzS0NRa0pjbVYwZFhKdUlHTjJjeTUwYjBSaGRHRlZVa3dvS1RzS0NRbDlZMkYwWTJnb1pTbDdZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdDlDZ2w5TEFvSlkyOXRjRzl1Wlc1MFZHOUlaWGc2Wm5WdVkzUnBiMjRnS0dNcElIc0tDU0FnZG1GeUlHaGxlQ0E5SUdNdWRHOVRkSEpwYm1jb01UWXBPd29KSUNCeVpYUjFjbTRnYUdWNExteGxibWQwYUNBOVBTQXhJRDhnSWpBaUlDc2dhR1Y0SURvZ2FHVjRPd29KZlN3S0NYSm5ZbFJ2U0dWNE9tWjFibU4wYVc5dUlDaHlMQ0JuTENCaUtTQjdDZ2tnSUhKbGRIVnliaUFpSXlJZ0t5QjBhR2x6TG1OdmJYQnZibVZ1ZEZSdlNHVjRLSElwSUNzZ2RHaHBjeTVqYjIxd2IyNWxiblJVYjBobGVDaG5LU0FySUhSb2FYTXVZMjl0Y0c5dVpXNTBWRzlJWlhnb1lpazdDZ2w5TEFvSmFHVjRWRzlTWjJJNlpuVnVZM1JwYjI0Z0tHaGxlQ2tnZXdvSklDQWdJSFpoY2lCeVpYTjFiSFFnUFNBdlhpTS9LRnRoTFdaY1pGMTdNbjBwS0Z0aExXWmNaRjE3TW4wcEtGdGhMV1pjWkYxN01uMHBKQzlwTG1WNFpXTW9hR1Y0S1RzS0NTQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4MElEOGdld29KSUNBZ0lDQWdJQ0J5T2lCd1lYSnpaVWx1ZENoeVpYTjFiSFJiTVYwc0lERTJLU3dLQ1NBZ0lDQWdJQ0FnWnpvZ2NHRnljMlZKYm5Rb2NtVnpkV3gwV3pKZExDQXhOaWtzQ2drZ0lDQWdJQ0FnSUdJNklIQmhjbk5sU1c1MEtISmxjM1ZzZEZzelhTd2dNVFlwQ2drZ0lDQWdmUW9KSUNBZ0lDQTZJRzUxYkd3N0NnbDlMQW9KWjJWMFEyOXNiM0pCZEZCdmN6b2dablZ1WTNScGIyNGdLSGdzZVNrZ2V3b0pDWFpoY2lCZlgyTmhiR04xYkdGMFpXUmZlQ0E5SUhnN0Nna0pkbUZ5SUY5ZlkyRnNZM1ZzWVhSbFpGOTVJRDBnTUNBdElIazdDZ2tKZG1GeUlIQnZjeUE5SUhSb2FYTXVaMlYwVTJOaGJHVkpibVp2S0hSb2FYTXVkMmxrZEdndk1pdDRLMTlmWTJGc1kzVnNZWFJsWkY5NExDQjBhR2x6TG1obGFXZG9kQzh5SzE5ZlkyRnNZM1ZzWVhSbFpGOTVMREFzTUNrN0Nna0pkbUZ5SUdNZ1BTQjBhR2x6TG1OdmJuUmxlSFF1WjJWMFNXMWhaMlZFWVhSaEtIQnZjeTU0TENCd2IzTXVlU3dnTVN3Z01Ta3VaR0YwWVRzS0NRbHlaWFIxY200Z2RHaHBjeTV5WjJKVWIwaGxlQ2hqV3pCZExHTmJNVjBzWTFzeVhTazdDZ2w5TEFvSlkyaGhibWRsUTI5c2IzSkpia2x0WVdkbE9pQm1kVzVqZEdsdmJpQW9hVzFuTEdacGJtUXNjbVZ3YkdGalpTa2dld29KQ1hSeWVYc0tDUWtKZG1GeUlHTjJjeUE5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9JbU5oYm5aaGN5SXBPd29KQ1FsMllYSWdZM1I0SUQwZ1kzWnpMbWRsZEVOdmJuUmxlSFFvSWpKa0lpazdDZ2tKQ1dOMmN5NTNhV1IwYUNBOUlHbHRaeTUzYVdSMGFEc0tDUWtKWTNaekxtaGxhV2RvZENBOUlHbHRaeTVvWldsbmFIUTdDZ2tKQ1dOMGVDNWtjbUYzU1cxaFoyVW9hVzFuTERBc01DeGpkbk11ZDJsa2RHZ3NZM1p6TG1obGFXZG9kQ2s3Q2drSkNYWmhjaUJ5WjJKR2FXNWtJRDBnZEdocGN5NW9aWGhVYjFKbllpaG1hVzVrS1RzS0NRa0pkbUZ5SUhKbllsSmxjR3hoWTJVZ1BTQjBhR2x6TG1obGVGUnZVbWRpS0hKbGNHeGhZMlVwT3dvSkNRbDJZWElnYVcxblpHRjBZU0E5SUdOMGVDNW5aWFJKYldGblpVUmhkR0VvTUN3d0xHTjJjeTUzYVdSMGFDeGpkbk11YUdWcFoyaDBLVHNLQ1FrSmRtRnlJR2x0WVdkbFJHRjBZU0E5SUdsdFoyUmhkR0V1WkdGMFlUc0tDUWtKWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCcGJXRm5aVVJoZEdFdWJHVnVaM1JvT3lCcElDczlJRFFwSUhzS0NRa0pDWFpoY2lCeUlEMGdhVzFoWjJWRVlYUmhXMmxkT3dvSkNRa0pkbUZ5SUdjZ1BTQnBiV0ZuWlVSaGRHRmJhU3N4WFRzS0NRa0pDWFpoY2lCaUlEMGdhVzFoWjJWRVlYUmhXMmtyTWwwN0Nna0pDUWxwWmlBb2NtZGlSbWx1WkM1eUlEMGdjaUFtSmlCeVoySkdhVzVrTG1jZ1BUMGdaeUFtSmlCeVoySkdhVzVrTG1JZ1BUMGdZaWtnZXdvSkNRa0pDUzh2Wm05MWJtUWdZVzRnYldGMFkyZ2hDZ2tKQ1FrSmFXMWhaMlZFWVhSaFcybGRJRDBnY21kaVVtVndiR0ZqWlM1eU93b0pDUWtKQ1dsdFlXZGxSR0YwWVZ0cEt6RmRJRDBnY21kaVVtVndiR0ZqWlM1bk93b0pDUWtKQ1dsdFlXZGxSR0YwWVZ0cEt6SmRJRDBnY21kaVVtVndiR0ZqWlM1aU93b0pDUWtKZlFvSkNRbDlDZ2tKQ1dOMGVDNXdkWFJKYldGblpVUmhkR0VvYVcxblpHRjBZU3d3TERBcE93b0pDUWx5WlhSMWNtNGdZM1p6TG5SdlJHRjBZVlZTVENncE93b0pDWDFqWVhSamFDaGxLWHRqYjI1emIyeGxMbVZ5Y205eUtHVXBPMzBLQ1gwc0NnbGphR0Z1WjJWRGIyeHZjbk5KYmtsdFlXZGxPaUJtZFc1amRHbHZiaUFvYVcxbkxHWnBibVJ5WlhCc1lXTmxRWEp5WVhrcElIc0tDUWwwY25sN0Nna0pDWFpoY2lCamRuTWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDSmpZVzUyWVhNaUtUc0tDUWtKZG1GeUlHTjBlQ0E5SUdOMmN5NW5aWFJEYjI1MFpYaDBLQ0l5WkNJcE93b0pDUWxqZG5NdWQybGtkR2dnUFNCcGJXY3VkMmxrZEdnN0Nna0pDV04yY3k1b1pXbG5hSFFnUFNCcGJXY3VhR1ZwWjJoME93b0pDUWxqZEhndVpISmhkMGx0WVdkbEtHbHRaeXd3TERBc1kzWnpMbmRwWkhSb0xHTjJjeTVvWldsbmFIUXBPd29KQ1FsMllYSWdhVzFuWkdGMFlTQTlJR04wZUM1blpYUkpiV0ZuWlVSaGRHRW9NQ3d3TEdOMmN5NTNhV1IwYUN4amRuTXVhR1ZwWjJoMEtUc0tDUWtKZG1GeUlHbHRZV2RsUkdGMFlTQTlJR2x0WjJSaGRHRXVaR0YwWVRzS0NRa0pabTl5SUNoMllYSWdhVzVrWlhneUlEMGdNRHNnYVc1a1pYZ3lJRHdnWm1sdVpISmxjR3hoWTJWQmNuSmhlUzVzWlc1bmRHZzdJR2x1WkdWNE1pQXJQU0F5S1NCN0Nna0pDUWwyWVhJZ2NtZGlSbWx1WkNBOUlIUm9hWE11YUdWNFZHOVNaMklvWm1sdVpISmxjR3hoWTJWQmNuSmhlVnRwYm1SbGVESmRLVHNLQ1FrSkNYWmhjaUJ5WjJKU1pYQnNZV05sSUQwZ2RHaHBjeTVvWlhoVWIxSm5ZaWhtYVc1a2NtVndiR0ZqWlVGeWNtRjVXMmx1WkdWNE1pc3hYU2s3Q2dvSkNRa0pabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JwYldGblpVUmhkR0V1YkdWdVozUm9PeUJwSUNzOUlEUXBJSHNLQ1FrSkNRbDJZWElnY2lBOUlHbHRZV2RsUkdGMFlWdHBYVHNLQ1FrSkNRbDJZWElnWnlBOUlHbHRZV2RsUkdGMFlWdHBLekZkT3dvSkNRa0pDWFpoY2lCaUlEMGdhVzFoWjJWRVlYUmhXMmtyTWwwN0Nna0pDUWtKYVdZZ0tISm5Za1pwYm1RdWNpQTlJSElnSmlZZ2NtZGlSbWx1WkM1bklEMDlJR2NnSmlZZ2NtZGlSbWx1WkM1aUlEMDlJR0lwSUhzS0NRa0pDUWtKTHk5bWIzVnVaQ0JoYmlCdFlYUmphQ0VLQ1FrSkNRa0phVzFoWjJWRVlYUmhXMmxkSUQwZ2NtZGlVbVZ3YkdGalpTNXlPd29KQ1FrSkNRbHBiV0ZuWlVSaGRHRmJhU3N4WFNBOUlISm5ZbEpsY0d4aFkyVXVaenNLQ1FrSkNRa0phVzFoWjJWRVlYUmhXMmtyTWwwZ1BTQnlaMkpTWlhCc1lXTmxMbUk3Q2drSkNRa0pmUW9KQ1FrSmZRb0pDUWw5Q2dvSkNRbGpkSGd1Y0hWMFNXMWhaMlZFWVhSaEtHbHRaMlJoZEdFc01Dd3dLVHNLQ1FrSmNtVjBkWEp1SUdOMmN5NTBiMFJoZEdGVlVrd29LVHNLQ1FsOVkyRjBZMmdvWlNsN1kyOXVjMjlzWlM1bGNuSnZjaWhsS1R0OUNnbDlDbjA3Q25KbGJtUmxjbVZ5TG1OaGJXTnZiblJsZUhRZ1BTQnlaVzVrWlhKbGNpNWpZVzFqWVc1MllYTXVaMlYwUTI5dWRHVjRkQ2dpTW1RaUtUc0tjMlYwU1c1MFpYSjJZV3dvS0NrZ1BUNGdld29KYVdZZ0tISmxibVJsY21WeUxtTmhiWEoxYmlrZ2V3b0pDWEpsYm1SbGNtVnlMbU5oYlhacFpDNXdiR0Y1S0NrN0lDOHZjM1JoY25RZ2RHaGxJSEpsWTI5eVpHbHVaeUVLQ1FseVpXNWtaWEpsY2k1allXMTJhV1F1ZG05c2RXMWxJRDBnTURzZ0x5OWtieUJ1YjNRZ1pXTm9ieUVLQ1FseVpXNWtaWEpsY2k1allXMWpZVzUyWVhNdWQybGtkR2dnUFNCeVpXNWtaWEpsY2k1allXMTJhV1F1ZG1sa1pXOVhhV1IwYURzS0NRbHlaVzVrWlhKbGNpNWpZVzFqWVc1MllYTXVhR1ZwWjJoMElEMGdjbVZ1WkdWeVpYSXVZMkZ0ZG1sa0xuWnBaR1Z2U0dWcFoyaDBPd29KZlNCbGJITmxJSHNLQ1FseVpXNWtaWEpsY2k1allXMTJhV1F1Y0dGMWMyVW9LVHNnTHk5emRHOXdJSFJvWlNCeVpXTnZjbVJwYm1jS0NYMEtmU3d4TUNrSyIpKTtldmFsKGF0b2IoImQybHVaRzkzTG1GMVpHbHZSVzVuYVc1bElEMGdld29KWVdSa1ZHOVFjbVZzYjJGa09pQmhjM2x1WXlCbWRXNWpkR2x2YmlBb2RYSnNLU0I3Q2drSmRtRnlJSEpsY1hWbGMzUWdQU0JoZDJGcGRDQm1aWFJqYUNoMWNtd3BPd29KQ1haaGNpQmtZWFJoSUQwZ1lYZGhhWFFnY21WeGRXVnpkQzVoY25KaGVVSjFabVpsY2lncE93b0pDWGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVoZFdSUWNtVnNiMkZrVzNWeWJGMGdQU0IzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1WTI5d2VVRnljbUY1UW5WbVptVnlLSGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVoZFdSUWNtVnNiMkZrVzNWeWJGMHBPd29KZlN3S0NXRjFaRkJ5Wld4dllXUTZJSHQ5TEFvSlkyOXdlVUZ5Y21GNVFuVm1abVZ5T2lCbWRXNWpkR2x2YmlBb2MzSmpLU0FnZXdvSkNYWmhjaUJrYzNRZ1BTQnVaWGNnUVhKeVlYbENkV1ptWlhJb2MzSmpMbUo1ZEdWTVpXNW5kR2dwT3dvSkNXNWxkeUJWYVc1ME9FRnljbUY1S0dSemRDa3VjMlYwS0c1bGR5QlZhVzUwT0VGeWNtRjVLSE55WXlrcE93b0pDWEpsZEhWeWJpQmtjM1E3Q2dsOUxBb0pjMlo0T25zS0NRbGhkV1JwYnpwdWRXeHNMQW9KQ1dGMVpHbHZaV3hsYldWdWRITTZXMTBzQ2drSmNHeGhlVHBoYzNsdVl5Qm1kVzVqZEdsdmJpQW9ZU2tnZXdvSkNRa3ZLaW9LQ1FrSlFuVm5JRVpwZUNFS0NRa0pDZ2tKQ1dacGVHVmtJSFJvWlNCaGRXUnBieUJpZFdjZ2QyaGxiaUJ3YkdGNWFXNW5JRzExZEdsd2JHVWdjMjkxYm1SekxDQnBibU5zZFdScGJtY2diRzl1WnlCdmJtVnpMQW9KQ1FsdFlXdHBibWNnYVhRZ2FXMXdiM05wWW14bElIUnZJSE4wYjNBZ2FXNGdaR1Z6YTNSdmNDQmhjSEF1Q2drSkNRb0pDUWtxTHdvSkNRbDNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZWFZrYVc5U2RXNXVhVzVuSUQwZ2RISjFaVHNLQ1FrSmFXWWdLQ0VvZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1GMVpGQnlaV3h2WVdSYllWMHBLU0I3Q2drSkNRbDJZWElnY21WeGRXVnpkQ0E5SUdGM1lXbDBJR1psZEdOb0tHRXBPd29KQ1FrSmRtRnlJR1JoZEdFZ1BTQmhkMkZwZENCeVpYRjFaWE4wTG1GeWNtRjVRblZtWm1WeUtDazdDZ2tKQ1FsM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VdVlYVmtVSEpsYkc5aFpGdGhYU0E5SUhkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1amIzQjVRWEp5WVhsQ2RXWm1aWElvWkdGMFlTazdDZ2tKQ1gwZ1pXeHpaU0I3Q2drSkNRbDJZWElnWkdGMFlTQTlJSGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVqYjNCNVFYSnlZWGxDZFdabVpYSW9kMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbUYxWkZCeVpXeHZZV1JiWVYwcE93b0pDUWw5Q2drSkNYWmhjaUJoZFdScGIwSjFabVpsY2lBOUlHRjNZV2wwSUhkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1a1pXTnZaR1ZCZFdScGIwUmhkR0ZCYzNsdVl5aGtZWFJoS1RzS0NRa0pkbUZ5SUhOdmRYSmpaU0E5SUhkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1amIyNTBaWGgwTG1OeVpXRjBaVUoxWm1abGNsTnZkWEpqWlNncE93b0pDUWxwWmlBb2QybHVaRzkzTG1GMVpHbHZSVzVuYVc1bExtRjFaR2x2VW5WdWJtbHVaeWtnZXdvSkNRa0pjMjkxY21ObExtSjFabVpsY2lBOUlHRjFaR2x2UW5WbVptVnlPd29KQ1FrSmRHaHBjeTV6YjNWeVkyVWdQU0J6YjNWeVkyVTdDZ2tKQ1FrS0NRa0pDWE52ZFhKalpTNWpiMjV1WldOMEtIZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWpiMjUwWlhoMExtUmxjM1JwYm1GMGFXOXVLVHNLQ1FrSkNYTnZkWEpqWlM1c2IyOXdJRDBnWm1Gc2MyVTdDZ2tKQ1FsemIzVnlZMlV1YzNSaGNuUW9LVHNLQ1FrSkNYZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNXpiM1Z5WTJWekxuQjFjMmdvYzI5MWNtTmxLVHNLQ1FrSkNYTnZkWEpqWlM1dmJtVnVaR1ZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dld29KQ1FrSkNYWmhjaUJrWVhRZ1BTQmJYVHNLQ1FrSkNRbG1iM0lnS0haaGNpQnZZbW9nYjJZZ2QybHVaRzkzTG1GMVpHbHZSVzVuYVc1bExuTnZkWEpqWlhNcElIc0tDUWtKQ1FrSmFXWWdLQ0VvYjJKcUlEMDlJSE52ZFhKalpTa3BJSHNLQ1FrSkNRa0pDV1JoZEM1d2RYTm9LRzlpYWlrN0Nna0pDUWtKQ1gwS0NRa0pDUWw5Q2drSkNRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbk52ZFhKalpYTWdQU0JrWVhRN0Nna0pDUWw5T3dvSkNRbDlDaThxSUFrSkNTOHZZblZuSUhCaFkyZ2djM1JoY25SeklHaGxjbVVLQ1FrSmRHaHBjeTVoZFdScGJ5NXZibVZ1WkdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZXdvSkNRa0paR1ZzWlhSbElHRjFaR2x2Ulc1bmFXNWxMbk5tZUM1aGRXUnBiMlZzWlcxbGJuUnpMbWx1WkdWNFQyWW9kR2hwY3k1aGRXUnBieWs3Q2drSkNRbDJZWElnWVd4c1UyWjRJRDBnVzEwN0Nna0pDUWxtYjNJZ0tIWmhjaUJwSUdsdUlHRjFaR2x2Ulc1bmFXNWxMbk5tZUM1aGRXUnBiMlZzWlcxbGJuUnpLU0I3Q2drSkNRa0phV1lnS0dGMVpHbHZSVzVuYVc1bExuTm1lQzVoZFdScGIyVnNaVzFsYm5SektTQjdDZ2tKQ1FrSkNXRnNiRk5tZUM1d2RYTm9LR0YxWkdsdlJXNW5hVzVsTG5ObWVDNWhkV1JwYjJWc1pXMWxiblJ6VzJsZEtUc0tDUWtKQ1FsOUNna0pDUWw5Q2drSkNRbGhkV1JwYjBWdVoybHVaUzV6Wm5ndVlYVmthVzlsYkdWdFpXNTBjeUE5SUdGc2JGTm1lRHNLQ1FrSmZUc2dLaThLQ1FsOUNnbDlMQW9KWkdWamIyUmxRWFZrYVc5RVlYUmhRWE41Ym1NNklDaGtZWFJoS1NBOVBpQjdDZ2tKY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsTEhKbGFtVmpkQ2tnUFQ0Z2V3b0pDUWwzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1WTI5dWRHVjRkQzVrWldOdlpHVkJkV1JwYjBSaGRHRW9aR0YwWVN4eVpYTnZiSFpsTEhKbGFtVmpkQ2s3Q2drSmZTa0tDWDBzQ2dsemIzVnlZMlZ6T2lCYkNna0tDVjBzQ2dsaGRXUnBiMUoxYm01cGJtYzZabUZzYzJVc0NnbGlaMjA2ZXdvSkNXRjFaR2x2T250emNtTTZJaUo5TEFvSkNXbHpVR3hoZVdsdVp6cG1ZV3h6WlN3S0NRbHlkVzV1YVc1bk9tWmhiSE5sTEFvSkNYTjBiM0JTZFc1dWFXNW5VMjkxY21ObE9pQW9LU0E5UGlCN0Nna0pDV2xtSUNoMGFHbHpMbk52ZFhKalpTa2dld29KQ1FrSmRISjVld29KQ1FrSkNYUm9hWE11YzI5MWNtTmxMbk4wYjNBb0tUc0tDUWtKQ1gxallYUmphQ2hsS1h0OUNna0pDWDBLQ1FsOUxBb0pDWEJzWVhrNllYTjVibU1nWm5WdVkzUnBiMjRnS0NrZ2V3b0pDUWwwY25sN0Nna0pDUWwwYUdsekxuSjFibTVwYm1jZ1BTQjBjblZsT3dvSkNRa0pkR2hwY3k1cGMxQnNZWGxwYm1jZ1BTQm1ZV3h6WlRzS0NRa0pDWFJvYVhNdWMzUnZjRkoxYm01cGJtZFRiM1Z5WTJVb0tUc0tDUWtKQ1haaGNpQnpiM1Z5WTJVZ1BTQjNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZMjl1ZEdWNGRDNWpjbVZoZEdWQ2RXWm1aWEpUYjNWeVkyVW9LVHNLQ1FrSkNYZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNXpiM1Z5WTJWekxuQjFjMmdvYzI5MWNtTmxLVHNLQ1FrSkNYZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWhkV1JwYjFKMWJtNXBibWNnUFNCMGNuVmxPd29KQ1FrSmFXWWdLQ0VvZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1GMVpGQnlaV3h2WVdSYmRHaHBjeTVoZFdScGJ5NXpjbU5kS1NrZ2V3b0pDUWtKQ1hSb2FYTXVjM1J2Y0ZKMWJtNXBibWRUYjNWeVkyVW9LVHNLQ1FrSkNRbDJZWElnY21WeGRXVnpkQ0E5SUdGM1lXbDBJR1psZEdOb0tIUm9hWE11WVhWa2FXOHVjM0pqS1RzS0NRa0pDUWwwYUdsekxuTjBiM0JTZFc1dWFXNW5VMjkxY21ObEtDazdDZ2tKQ1FrSmRHaHBjeTVwYzFCc1lYbHBibWNnUFNCbVlXeHpaVHNLQ1FrSkNRbDBhR2x6TG5OMGIzQlNkVzV1YVc1blUyOTFjbU5sS0NrN0Nna0pDUWtKZG1GeUlHUmhkR0VnUFNCaGQyRnBkQ0J5WlhGMVpYTjBMbUZ5Y21GNVFuVm1abVZ5S0NrN0Nna0pDUWtKZEdocGN5NXpkRzl3VW5WdWJtbHVaMU52ZFhKalpTZ3BPd29KQ1FrSkNYUm9hWE11YVhOUWJHRjVhVzVuSUQwZ1ptRnNjMlU3Q2drSkNRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbUYxWkZCeVpXeHZZV1JiZEdocGN5NWhkV1JwYnk1emNtTmRJRDBnZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1OdmNIbEJjbkpoZVVKMVptWmxjaWhrWVhSaEtUc0tDUWtKQ1gwZ1pXeHpaU0I3Q2drSkNRa0pkR2hwY3k1cGMxQnNZWGxwYm1jZ1BTQm1ZV3h6WlRzS0NRa0pDUWwwYUdsekxuTjBiM0JTZFc1dWFXNW5VMjkxY21ObEtDazdDZ2tKQ1FrSmRtRnlJR1JoZEdFZ1BTQjNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZMjl3ZVVGeWNtRjVRblZtWm1WeUtIZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWhkV1JRY21Wc2IyRmtXM1JvYVhNdVlYVmthVzh1YzNKalhTazdDZ2tKQ1FrSmRHaHBjeTVwYzFCc1lYbHBibWNnUFNCbVlXeHpaVHNLQ1FrSkNRbDBhR2x6TG5OMGIzQlNkVzV1YVc1blUyOTFjbU5sS0NrN0Nna0pDUWw5Q2drSkNRbDBhR2x6TG1selVHeGhlV2x1WnlBOUlHWmhiSE5sT3dvSkNRa0pkR2hwY3k1emRHOXdVblZ1Ym1sdVoxTnZkWEpqWlNncE93b0pDUWtKZG1GeUlHRjFaR2x2UW5WbVptVnlJRDBnWVhkaGFYUWdkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbVJsWTI5a1pVRjFaR2x2UkdGMFlVRnplVzVqS0dSaGRHRXBPd29KQ1FrSmRHaHBjeTV6ZEc5d1VuVnVibWx1WjFOdmRYSmpaU2dwT3dvSkNRa0pkR2hwY3k1cGMxQnNZWGxwYm1jZ1BTQm1ZV3h6WlRzS0NRa0pDWE52ZFhKalpTNWlkV1ptWlhJZ1BTQmhkV1JwYjBKMVptWmxjanNLQ1FrSkNYUm9hWE11YVhOUWJHRjVhVzVuSUQwZ1ptRnNjMlU3Q2drSkNRbHpiM1Z5WTJVdVkyOXVibVZqZENoM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VdVkyOXVkR1Y0ZEM1a1pYTjBhVzVoZEdsdmJpazdDZ2tKQ1FsemIzVnlZMlV1Ykc5dmNDQTlJSFJ5ZFdVN0Nna0pDUWwwYUdsekxtbHpVR3hoZVdsdVp5QTlJR1poYkhObE93b0pDUWtKYVdZZ0tIUm9hWE11YzI5MWNtTmxLU0I3Q2drSkNRa0pkSEo1ZXdvSkNRa0pDUWwwYUdsekxuTnZkWEpqWlM1emRHOXdLQ2s3Q2drSkNRa0pmV05oZEdOb0tHVXBlMzBLQ1FrSkNYMEtDUWtKQ1hSb2FYTXVjMjkxY21ObElEMGdjMjkxY21ObE93b0pDUWtKYVdZZ0tIZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWhkV1JwYjFKMWJtNXBibWNwSUhzS0NRa0pDUWxwWmlBb0lTaDBhR2x6TG1selVHeGhlV2x1WnlrcElIc0tDUWtKQ1FrSmRHaHBjeTVwYzFCc1lYbHBibWNnUFNCMGNuVmxPd29KQ1FrSkNRbHpiM1Z5WTJVdWMzUmhjblFvS1RzS0NRa0pDUWw5Q2drSkNRbDlDZ2tKQ1gxallYUmphQ2hsS1hzS0NRa0pDV052Ym5OdmJHVXVkMkZ5YmlnaVcwRjFaR2x2Ulc1bmFXNWxYVHBsY25KdmNpQnBaMjV2Y21Wa0lpQXJJR1VwT3dvSkNRbDlPd29KQ1gwc0Nna0pjMlYwVTNKak9tWjFibU4wYVc5dUlDaGhLU0I3Q2drSkNYUm9hWE11WVhWa2FXOHVjM0pqSUQwZ1lUc0tDUWw5Q2dsOUxBb0pZWFZrVUhKbGJHOWhaRHA3Q2drSkNnbDlMQW9KYzNSdmNEcG1kVzVqZEdsdmJpQW9LU0I3Q2drSmRISjVld29KQ1dsbUlDaDBhR2x6TG5ObWVDNWhkV1JwYnlrZ2V3b0pDUWwwYUdsekxuTm1lQzVoZFdScGJ5NXdZWFZ6WlNncE93b0pDUWwwYUdsekxuTm1lQzVoZFdScGJ5QTlJRzUxYkd3N0Nna0pmUW9KQ1hSb2FYTXVZbWR0TG5KMWJtNXBibWNnUFNCbVlXeHpaVHNLQ1FsMGFHbHpMbUpuYlM1cGMxQnNZWGxwYm1jZ1BTQm1ZV3h6WlRzS0NRbDBhR2x6TG1GMVpHbHZVblZ1Ym1sdVp5QTlJR1poYkhObE93b0pDV1p2Y2lBb2RtRnlJSE52ZFhKalpTQnZaaUIwYUdsekxuTnZkWEpqWlhNcElIc0tDUWtKZEhKNWV3b0pDUWtKYzI5MWNtTmxMbk4wYjNBb0tRb0pDUWw5WTJGMFkyZ29aU2w3ZlFvSkNYMEtDUWwwYUdsekxuTnZkWEpqWlhNZ1BTQmJYVHNLQ1FsOVkyRjBZMmdvWlNsN0Nna0pDV052Ym5OdmJHVXVkMkZ5YmlnaVcwRjFaR2x2Ulc1bmFXNWxYVHBsY25KdmNpQnBaMjV2Y21Wa0lpQXJJR1VwT3dvSkNYMDdDZ2w5TEFvSmRHbGphMEYxWkdsdk9tWjFibU4wYVc5dUlDZ3BJSHNLQ1FrdkwyTnZibk52YkdVdWJHOW5LSFJvYVhNdVltZHRMbWx6VUd4aGVXbHVaeWs3Q2drSmFXWWdLSGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVpWjIwdWFYTlFiR0Y1YVc1bktTQjdDZ2tKQ1M4dmFXWWdLQ0VvZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1KbmJTNXlkVzV1YVc1bktTa2dld29KQ1Frdkx3bDNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZbWR0TG5Cc1lYa29LVHNLQ1FrSkx5OTlDZ2tKZlNCbGJITmxJSHNLQ1FrSmRISjVld29KQ1FrSmQybHVaRzkzTG1GMVpHbHZSVzVuYVc1bExtSm5iUzV5ZFc1dWFXNW5JRDBnWm1Gc2MyVTdDZ2tKQ1FsM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VdVltZHRMbk52ZFhKalpTNXpkRzl3S0NrN0Nna0pDWDFqWVhSamFDaGxLWHQ5Q2drSmZRb0pmUXA5Q25kcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1aVoyMHVZWFZrYVc4dWJHOXZjQ0E5SUhSeWRXVTdDbk5sZEVsdWRHVnlkbUZzS0hkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1MGFXTnJRWFZrYVc4c01TazdDbmRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVqYjI1MFpYaDBJRDBnYm1WM0lFRjFaR2x2UTI5dWRHVjRkQ2dwT3dwelpYUkpiblJsY25aaGJDZ29LU0E5UGlCN0NnbHBaaUFvSVNoM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VdVkyOXVkR1Y0ZEM1emRHRjBaU0E5UFNBaWNuVnVibWx1WnlJcEtTQjdDZ2tKZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1OdmJuUmxlSFFnUFNCdVpYY2dRWFZrYVc5RGIyNTBaWGgwQ2dsOUNuMHNNVEFwT3dvdktncDBhR1VnYVdSbFlTQjNZWE1nZEc4Z2RYTmxJR052Ym5SbGVIUXNJR0oxZENCelkzSmhjSEJsWkN3Z1ltVmpZWFZ6WlNCdlppQnRiM0psSUd4dllXUWdiR0ZuSUdGdVpDQm9iM2NnYlhWMFkyZ2dkR2x0WlNCcGRDQjBZV3RsY3dwM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VZ1BTQjdDZ2xqYjI1MFpYaDBPbTVsZHlCQmRXUnBiME52Ym5SbGVIUW9LU3dLQ1hOdmRYSmpaVG9nYm5Wc2JDd0tDWE52ZFhKalpYTTZXMTBzQ2dsaGNHbEhaWFJCZFdScGJ6b2dZWE41Ym1NZ0tHRjFaR2x2UW5WbVptVnlSR0YwWVN4allXeHNZbUZqYXlrZ1BUNGdld29KSUNCamIyNXpkQ0JqYjI1MFpYaDBJRDBnZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1OdmJuUmxlSFE3Q2drSlpuVnVZM1JwYjI0Z1kyOXdlU2h6Y21NcElDQjdDZ2tKQ1haaGNpQmtjM1FnUFNCdVpYY2dRWEp5WVhsQ2RXWm1aWElvYzNKakxtSjVkR1ZNWlc1bmRHZ3BPd29KQ1FsdVpYY2dWV2x1ZERoQmNuSmhlU2hrYzNRcExuTmxkQ2h1WlhjZ1ZXbHVkRGhCY25KaGVTaHpjbU1wS1RzS0NRa0pjbVYwZFhKdUlHUnpkRHNLQ1FsOUNna2dJR052Ym5SbGVIUXVaR1ZqYjJSbFFYVmthVzlFWVhSaEtHTnZjSGtvWVhWa2FXOUNkV1ptWlhKRVlYUmhLU3htZFc1amRHbHZiaUFvWVhWa2FXOUNkV1ptWlhJcElIc0tDUWwzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1YzI5MWNtTmxJRDBnWTI5dWRHVjRkQzVqY21WaGRHVkNkV1ptWlhKVGIzVnlZMlVvS1RzS0NRbDJZWElnYzI5MWNtTmxJRDBnZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG5OdmRYSmpaUW9KQ1hOdmRYSmpaUzVpZFdabVpYSWdQU0JoZFdScGIwSjFabVpsY2pzS0NRbHpiM1Z5WTJVdVkyOXVibVZqZENoamIyNTBaWGgwTG1SbGMzUnBibUYwYVc5dUtUc0tDUWx6YjNWeVkyVXVjM1JoY25Rb0tUc0tDUWwzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1YzI5MWNtTmxjeTV3ZFhOb0tITnZkWEpqWlNrN0Nna0pjMjkxY21ObExuSjFibTVwYm1jZ1BTQjBjblZsT3dvSkNYTnZkWEpqWlM1dmJtVnVaR1ZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dld29KQ1FscFppQW9ZMkZzYkdKaFkyc3BJSHNLQ1FrSkNXUmxiR1YwWlNCM2FXNWtiM2N1WVhWa2FXOUZibWRwYm1VdWMyOTFjbU5sY3k1cGJtUmxlRTltS0hOdmRYSmpaU2s3Q2drSkNRbDJZWElnYzI5MWNtTmxjeUE5SUZ0ZE93b0pDUWtKWm05eUlDaDJZWElnYVNCcGJpQjNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVjMjkxY21ObGN5a2dld29KQ1FrSkNXbG1JQ2gzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1YzI5MWNtTmxjMXRwWFNsN0Nna0pDUWtKQ1hOdmRYSmpaWE11Y0hWemFDaDNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVjMjkxY21ObGMxdHBYU2s3Q2drSkNRa0pmUW9KQ1FrSmZRb0pDUWtKZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG5OdmRYSmpaWE1nUFNCemIzVnlZMlZ6T3dvSkNRa0pZMkZzYkdKaFkyc29jMjkxY21ObEtUc0tDUWtKZlFvSkNYMDdDZ2tnSUgwcE93b0pmU3dLQ1hObWVEcDdDZ2tKWVhWa2FXODZiblZzYkN3S0NRbHdiR0Y1T21aMWJtTjBhVzl1SUNoaEtTQjdDZ2tKQ1dabGRHTm9LR0VwTG5Sb1pXNG9LR0VwSUQwK0lIdGhMbUZ5Y21GNVFuVm1abVZ5S0NrdWRHaGxiaWdvWkdGMFlTa2dQVDRnZXdvSkNRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbUZ3YVVkbGRFRjFaR2x2S0dSaGRHRXBPd29KQ1FsOUtYMHBPd29KQ1gwS0NYMHNDZ2xpWjIwNmV3b0pDV0YxWkdsdk9pSWlMQW9KQ1dselVHeGhlV2x1WnpwbVlXeHpaU3dLQ1Fsd2JHRjVPbVoxYm1OMGFXOXVJQ2dwSUhzS0NRa0pZMjl1YzI5c1pTNXNiMmNvSW14dllXUnBibWNnWVhWa2FXOGdaR0YwWVNJcENna0pDV1psZEdOb0tIZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWlaMjB1WVhWa2FXOHBMblJvWlc0b0tHUmhkR0V4S1NBOVBpQjdaR0YwWVRFdVlYSnlZWGxDZFdabVpYSW9LUzUwYUdWdUtDaGtZWFJoS1NBOVBpQjdDZ2tKQ1FsamIyNXpiMnhsTG14dlp5Z2ljR3hoZVdsdVp5QmhkV1JwYnk0aUtUc0tDUWtKQ1hkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1aGNHbEhaWFJCZFdScGJ5aGtZWFJoTEdaMWJtTjBhVzl1SUNoemIzVnlZMlVwSUhzS0NRa0pDUWxwWmlBb2MyOTFjbU5sTG5KMWJtNXBibWNwSUhzS0NRa0pDUWtKZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG1KbmJTNXdiR0Y1S0NrN0Nna0pDUWtKZlFvSkNRa0pmU2s3Q2drSkNYMHBmU2s3Q2drSmZTd0tDUWx3WVhWelpUcG1kVzVqZEdsdmJpQW9LU0I3Q2drSkNXWnZjaUFvZG1GeUlHa2dhVzRnZDJsdVpHOTNMbUYxWkdsdlJXNW5hVzVsTG5OdmRYSmpaWE1wSUhzS0NRa0pDWFJ5ZVhzS0NRa0pDUWwzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1YzI5MWNtTmxjMXRwWFM1emRHOXdLQ2s3Q2drSkNRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbk52ZFhKalpYTmJhVjB1Y25WdWJtbHVaeUE5SUdaaGJITmxPd29KQ1FrSmZXTmhkR05vS0dVcGUyTnZibk52YkdVdWQyRnliaWhnVzBGMVpHbHZSVzVuYVc1bFhUcEdZV2xzWldRZ2RHOGdjM1J2Y0NCaGRXUnBieUJqYjI1MFpYaDBJSE52ZFhKalpUb2dKSHRsZldBcE8zMEtDUWtKZlFvSkNYMHNDZ2tKYzJWMFUzSmpPbVoxYm1OMGFXOXVJQ2hoS1NCN0Nna0pDWGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVpWjIwdVlYVmthVzhnUFNCaE93b0pDWDBLQ1gwc0NnbHpkRzl3T21aMWJtTjBhVzl1SUNncElIc0tDUWwwY25sN0Nna0pkR2hwY3k1aVoyMHVhWE5RYkdGNWFXNW5JRDBnWm1Gc2MyVTdDZ2tKZldOaGRHTm9LR1VwZXdvSkNRbGpiMjV6YjJ4bExuZGhjbTRvSWx0QmRXUnBiMFZ1WjJsdVpWMDZaWEp5YjNJZ2FXZHViM0psWkNJZ0t5QmxLVHNLQ1FsOU93b0pmU3dLQ1hScFkydEJkV1JwYnpwbWRXNWpkR2x2YmlBb0tTQjdDZ2tKYVdZZ0tIZHBibVJ2ZHk1aGRXUnBiMFZ1WjJsdVpTNWlaMjB1YVhOUWJHRjVhVzVuSUQwOUlIUnlkV1VwSUhzS0NRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbUpuYlM1cGMxQnNZWGxwYm1jZ1BTQm1ZV3h6WlRzS0NRa0pkMmx1Wkc5M0xtRjFaR2x2Ulc1bmFXNWxMbUpuYlM1d2JHRjVLQ2s3Q2drSmZTQmxiSE5sSUhzS0NRa0phV1lnS0hkcGJtUnZkeTVoZFdScGIwVnVaMmx1WlM1aVoyMHVhWE5RYkdGNWFXNW5JRDA5SUdaaGJITmxLU0I3Q2drSkNRbDNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZbWR0TG1selVHeGhlV2x1WnlBOUlHNTFiR3c3Q2drSkNRbDNhVzVrYjNjdVlYVmthVzlGYm1kcGJtVXVZbWR0TG5CaGRYTmxLQ2s3Q2drSkNYMGdaV3h6WlNCN0Nna0pDUWwzYVc1a2IzY3VZWFZrYVc5RmJtZHBibVV1WW1kdExtbHpVR3hoZVdsdVp5QTlJRzUxYkd3N0Nna0pDWDBLQ1FsOUNna0phV1lnS0NFb1lYVmthVzlGYm1kcGJtVXVZMjl1ZEdWNGRDNXpkR0YwWlNBOVBTQWljblZ1Ym1sdVp5SXBLU0I3Q2drSkNXRjFaR2x2Ulc1bmFXNWxMbU52Ym5SbGVIUWdQU0J1WlhjZ1FYVmthVzlEYjI1MFpYaDBLQ2s3Q2drSmZRb0pmU3dLQ1dGamRHbDJaVHBtWVd4elpRcDlDbmRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzVpWjIwdVlYVmthVzh1Ykc5dmNDQTlJSFJ5ZFdVN0NuTmxkRWx1ZEdWeWRtRnNLSGRwYm1SdmR5NWhkV1JwYjBWdVoybHVaUzUwYVdOclFYVmthVzhzTVNrN0tpOD0iKSk7
		"></script>
		<script>
			var gs = document.getElementById("gameScreen");
			setInterval(() => {
				gs.style.backgroundColor = "white";
				var screenScale = (window.innerHeight)/360;
				gs.style.width = (screenScale*600)-0+"px";
				gs.style.height = (screenScale*360)+"px";
				gs.width = gs.getBoundingClientRect().width;
				gs.height = gs.getBoundingClientRect().height;
			},1);
			document.getElementById("app").hidden = false;
			document.getElementById("loading").hidden = true;
			var file = (${gui.editorToJsonText()});
			document.title = file.title;
			document.onclick = function () {
				renderer.canvas = document.getElementById("gameScreen");
				vm.code = "";
				vm.attachRenderer(renderer);
				vm.attachAudioEngine(audioEngine);
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
				function getMousePos(canvas, evt) {
					var rect = canvas.getBoundingClientRect();
					return {
						x: ((evt.clientX - rect.left) / (rect.right - rect.left) * renderer.width)/2,
						y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * renderer.height
					};
				}
				document.getElementById("gameScreen").onmousemove = function (event) {
					var pos = getMousePos(document.getElementById("gameScreen"), event);// get adjusted coordinates as above
					var x = Math.round(pos.x/1)-(renderer.width/2)/2;
					var y = Math.round(pos.y*-1)+(renderer.height/2);
					event.preventDefault();
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

var gs = document.getElementById("gameScreen");
var ga = document.getElementById("gameArea");
setInterval(() => {
	//gs.style.backgroundColor = "white";
	if (ga.getAttribute("class") == "fullscreenGame") {
		var screenScale = (window.innerHeight)/360;
		gs.style.width = (screenScale*renderer.width)+"px";
		gs.style.height = (screenScale*renderer.height)-20+"px";
	} else {
		gs.style.width = renderer.width+"px";
		gs.style.height = renderer.height+"px";
	}
},10);
renderer.addEventListener("tick",function () {
	if (ga.getAttribute("class") == "fullscreenGame") {
		if (vm.control.running) {
			gs.width = gs.getBoundingClientRect().width;
			gs.height = gs.getBoundingClientRect().height;
		}
	} else {
		if (vm.control.running) {
			gs.width = renderer.width;
			gs.height = renderer.height;
		}
	}
})