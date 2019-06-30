from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
from selenium import webdriver		


headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}
url="https://www.brainyquote.com/topics/blog"
req=Request(url,headers=headers)
page_html=urlopen(req).read()


result=[]
page_soup=soup(page_html,"html.parser")
quotes=page_soup.findAll('div',{"class":"qll-bg"})
for quote in quotes:
	text=quote.div.div.text
	result.append(text)

for i in range(len(result)):
	print(result[i])

# selenium 
driver=webdriver.Chrome()
 
driver.maximize_window()
 
driver.get('http://saranrajprojects.herokuapp.com/automatedBlogPost')

for i in range(len(result)):
	driver.find_element_by_css_selector('.quote-body').send_keys(result[i])
	driver.find_element_by_css_selector('.post-btn').click()
	driver.find_element_by_css_selector('.quote-body').clear()


