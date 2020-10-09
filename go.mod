module github.com/gohugoio/hugoTestProjectJSModImports

go 1.15

require (
	github.com/bep/hugo-jslibs/alpinejs v0.5.14 // indirect
	github.com/date-fns/date-fns v2.16.1+incompatible // indirect
	github.com/gohugoio/hugoTestModulesJS/mod1 v0.0.0-20201011174806-5f7e20f9ff4a // indirect
	github.com/gohugoio/hugoTestModulesJS/mod2 v0.0.0-20201011192008-decf54abafdd // indirect
)

replace github.com/gohugoio/hugoTestModulesJS/mod1 => ../hugoTestModulesJS/mod1
replace github.com/gohugoio/hugoTestModulesJS/mod2 => ../hugoTestModulesJS/mod2