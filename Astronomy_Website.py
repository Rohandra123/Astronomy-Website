from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/second')
def PlanetsPage():
    return render_template('PlanetsPage.html')

@app.route('/third')
def MoonPhasesPage():
    return render_template('MoonPhasesPage.html')

@app.route('/fourth')
def GalaxiesandConstellationPage():
    return render_template('GalaxiesandConstellationPage.html')

if __name__ == '__main__':
    app.run(debug=True)
